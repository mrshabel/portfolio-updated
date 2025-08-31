---
title: "From Web APIs to Storage Engines: Building BeckDB"
date: "2024-08-30"
author: "Shabel Gumah"
summary: "Moving away from building boring web APIs to storage engines"
image: "/images/beckdb.jpg"
---

After taking a detox from building conventional CRUD APIs as I felt they were career-stagnating, I decided to explore other interesting areas.
Moving into cool stuff: something that would squeeze the CS theories I’ve learnt over the past years.
Martin Kleppmann’s Designing Data Intensive Applications was a great start to exposing me to how systems are built on a larger scale and how my favorite tech tools work under the hood. While this was a good starting point, most ideas and concepts were presented in discrete forms and were not cohesive. Luckily, I chanced on a paper detailing Bitcask, the storage engine which powers Riak, a popular distributed database.
The paper was clearly written and structured, so understanding the complete model was straightforward. This in turn gave birth to BeckDB.

## What then is BeckDB?

> BeckDB is a key-value database that can be used as an embedded database or server database, acting as a drop-in replacement for Redis for simple use cases.

Enough of the buzzwords here. BeckDB is simply a key-value store that can be used without any database server like SQLite or with a database server that allows you to connect with any redis client (CLI or Library).
Subsequent sections will focus on the server database since it comprises of both the embedded version and a network layer for communicating with clients.

## How data is stored

At the heart of BeckDB is a storage engine largely inspired by Bitcask’s design. Data is appended to the tail of an open file known as a data file. Once this is done, a mapping of the key and record’s metadata is kept in memory for quick access. The metadata contains the file name and exact position on disk where the record was written. This ensures that operations can be done very quickly while supporting lots of concurrent operations.
Updates and deletes are still recorded as if we were writing new values to BeckDB. The goal is to ensure that every request uses a single disk seek (we only make a single request to disk).

Now you may be wondering why we’re still keeping redundant data, older versions of records that were either modified or deleted.
A special process runs in the background that is responsible for removing stale data and also merging data files that are no longer written to.

If you’re still around and enjoying BeckDB’s storage engine at this point then you should check out the Bitcask paper. It’s an interesting and simple read to go through.

## How can others communicate with BeckDB?

The layer that allows clients to communicate with BeckDB is simply a TCP server which is compatible with Redis’ protocol. It follows the exact specifications detailed by Redis for library authors to integrate with.
While working with the Redis Serialization Protocol (RESP), a design decision that impressed me a lot was the fact that RESP uses length prefix for most of its data types. That way we can simply read data we’re interested in at once without going through it token(character) by character. This makes RESP parsing much easier and efficient than JSON.
A sample RESP data could be ‘$6\r\nShabel\r\n’ which is interpreted as the first character being the data type, the number being the total length of the data, ‘\r\n’ simply being a delimiter and “Shabel”, the data.

---

Not to cut the excitement short but I would like to keep the content concise without going much into the technical details here. If you’d like to know more about BeckDB, you can check out the [design document](https://docs.google.com/document/d/1JraaGk-bAUwHib3XfE5EUJxWVKODEQ7cPCapDtRG-WE/edit?usp=sharing) or the source code on [GitHub](https://github.com/mrshabel/beckdb).

Till we meet again, Visca Barcaaa. We’re winning the UCL this season with ease. Ciao
