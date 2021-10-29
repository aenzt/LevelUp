import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AppHead from "@/Components/AppHead";

export default function Welcome(props) {
    console.log(props.name);
    return (
        <>
            <AppHead title={props.title}/>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href="/dashboard"
                            className="text-md font-semibold text-gray-700 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href='/'
                                className="ml-4 text-md font-semibold text-gray-700 underline"
                            >
                                Home
                            </Link>
                            <Link
                                href={route("login")}
                                className="ml-4 text-md font-semibold text-gray-700 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-md font-semibold text-gray-700 underline"
                            >
                                Register
                            </Link>
                            <Link
                                href="/products"
                                className="ml-4 text-md font-semibold text-gray-700 underline"
                            >
                                Products
                            </Link>
                        </>
                    )}
                </div>
                <div>
                    <h1 className="text-xl text-black">{props.name}</h1>
                </div>
            </div>
        </>
    );
}
