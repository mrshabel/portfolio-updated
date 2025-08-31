import GoBack from "@/components/go-back";

export const metadata = {
    title: "Shabel's Blog | Football & Systems",
    description:
        "Personal blog with my football opinions and curation on systems",
    icons: {
        icon: "/profile.png",
    },
};

export default function BlogLayout({ children }) {
    return (
        <main className="w-full">
            <div className="my-6">
                <GoBack />
            </div>
            {children}
        </main>
    );
}
