import Link from "next/link";

export default function() {
    return (
    <main className="flex min-h-screen flex-col items-center pt-40">
        <h1 className="text-5xl text-center">Products</h1>

        <div className="text-center">
            <p className="mt-6">
                This is the contact page.
            </p>

<Link href="/">
    <button className="bg-green-500 hover:bg-green-700 py-2 px-4 text-white font-bold rounded mt-6 drop-shadow-lg">Home</button>
</Link>

            </div>
            </main>
    );
}