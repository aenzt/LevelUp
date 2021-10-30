import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import AppHead from '@/Components/AppHead'
import Navbar from "@/Components/Navbar";

export default function products(props){
    return (
        <>
            <AppHead title="About"/>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            <Navbar props={props}/>
                <div>
                    <h1 className="text-xl text-black">Hi From Product</h1>
                </div>
            </div>
        </>
    );

}
