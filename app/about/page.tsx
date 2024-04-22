import Image from "next/image";
import Link from "next/link";

export default function() {
    return (
    <main className="flex min-h-screen flex-col items-center pt-40">
        <h1 className="text-5xl text-center">About</h1>

        <div className="text-center">
            <p className="mt-6">
                This is a Next.js app created by Onelio Viera.
            </p>

<Link href="/">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded drop-shadow-lg mx-1">Home</button>
</Link>
<Link href="/product">
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-6 rounded drop-shadow-lg mx-1">Product</button>
</Link>

        </div>
    </main>

    );
}