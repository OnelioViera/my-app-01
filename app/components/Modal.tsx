"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 max-w-5xl bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center mt-40 drop-shadow-lg">
                    <div className="bg-white m-auto p-8">
                        <div className="flex flex-col items-center">
                            <div className="">
                            <h1 className="text-2xl font-sans mb-4">Modal Content</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus deleniti porro recusandae quam odit nihil excepturi debitis minima illo pariatur voluptatibus maxime alias et quia, ad optio? Quo, dolores!</p>
                            
                            <Link href={pathname} className="pt-4">
                                <button type="button" className="bg-orange-500 hover:bg-orange-700 text-white p-2 py-2 px-4 rounded">Close Modal</button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;