import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AppHead from "@/Components/AppHead";
import Navbar from "@/Components/Navbar";
import NavbarNew from "@/Components/NavbarNew";

export default function Welcome_backup(props) {
    return (
        <>
            <AppHead title={props.title}/>
            <div className="flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className='absolute top-0 w-full'>
                    <NavbarNew props={props}/>
                </div>
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
