---
title: "The SGQueue Story: Building a Message Queue with PostgreSQL"
date: "2024-03-15"
author: "Shabel Gumah"
summary: "My adventures of building a message queue on top of PostgreSQL."
image: "/images/sgqueue_image.jpg"
---

Shabel here again, and oh, today's writeup isn't about my usual football rants and hypes. My late adventures on YouTube led me to a video by `@fireship` where he talked about supporting pub/sub in PostgreSQL. I actually got curious and surprised so I began my quest of finding out how feasible this is due to certain complications in delivery guarantees of message queue based systems. Two things I found which is worth sharing is the reason behind me building SGQueue, a cheeky way of naming my project as `Shabel Gumah's Queue`.

## SKIP LOCKED and LISTEN/NOTIFY to the rescue

The two core postgres features at the heart of SGQueue are `SKIP LOCKED` and `LISTEN/NOTIFY`. Double-processing in task processing system is such a common phenomenon due to different workers trying to process the same message without knowledge of whether the task has been processed already or not. For simple systems with a single worker, this may seem unlikely due to non-concurrent task access. For highly concurrent systems, however, workers actively try to retrieve and process task at their convenience hence the need for ensuring that a task isn't acquired by multiple workers. A very common solution to this would be using `row locks` whenever a task is retrieved from the database table. While locking a row will solve our problem here, other workers will be hanging and stuck in line waiting for the initial worker to release the lock it holds. Since the locked task is of no use to us now, it's best that we skip locked rows and proceed to other rows (tasks) in line for us to process.
The beauty of SQL databases is that we can use an inbuilt mechanism to skip all locked tasks when they are being updated by using the `SKIP LOCKED` clause. Here's a simple demo:

```sql
SELECT * FROM messages
WHERE status = 'pending'
ORDER BY created_at ASC
FOR UPDATE SKIP LOCKED
LIMIT 1;
```

With the snippet above, a worker simply has to run the query to retrieve a non-processed task.
When multiple consumers execute this query:

-   Each consumer gets a different message
-   No consumer blocks another
-   Messages are processed in order
-   No messages are lost or processed twice

Now on the second mechanism, `LISTEN/NOTIFY` is a postgres proprietary solution that allows users trigger a notification with a simple SQL query to all subscribers of the specified notification channel. Yeah, you heard it right lol, PostgreSQL for everything. Not so fast, the gotcha here is that payloads sent in notifications cant exceed 8kb (roughly 8,000 characters) so I decided to use the notify feature as a way of signalling to the consumer/worker that a new task is ready for processing rather than sending the entire payload in the notification. As a way of ensuring that consumers still get messages in events of any failure while delivering the notification, polling is used as the default fallback in intervals of about 30 seconds to avoid burdening the database.
A simple notification demo is shown below
Listen on "messages" channel

```sql
LISTEN messages_channel
```

Send message to subscribers using `NOTIFY`

```sql
NOTIFY messages_channel, 'new task available';
```

Still around? You may want to check out SGQueue whenever you need a message queue in your postgres-based application without introducing additional battery services such as RabbitMQ, Redis, Kafka. The ACID properties of SQL databases also guarantees that messages are durable even in the even of system failure.

Till my next football writeup drops, don't hesitate to checkout the implementation here. [SGQueue on GitHub](https://github.com/mrshabel/sgqueue).
