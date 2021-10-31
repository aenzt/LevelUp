import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AppHead from "@/Components/AppHead";
import Navbar from "@/Components/Navbar";

export default function Welcome(props) {
    console.log(props.name);
    return (
        <>
            <AppHead title={props.title}/>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <Navbar props={props}/>
                <div>
                    {props.auth.user ? (
                        <h1 className="text-3xl font-bold text-black">Welcome {props.auth.user.name}!</h1>
                    ) : (
                        <h1 className="text-3xl font-bold text-black">Welcome Guest!</h1>
                    )}
                </div>
            </div>
        </>
    );
}
