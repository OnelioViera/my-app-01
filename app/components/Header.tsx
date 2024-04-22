import Link from 'next/link';
function Header() {
    return (
        <header>
            <div className="mb-3">
                <Link href="/about">
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-5 drop-shadow-lg mx-1">About</button>
                </Link>

                <Link href="/product">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-2 px-4 mx-1 drop-shadow-lg">Products</button>
                </Link>

                <Link href="?modal=true">
                    <button type="button" className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded mx-1">Contact</button>
                </Link>

            </div>
        </header>
    )
}

export default Header;