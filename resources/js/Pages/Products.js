import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import AppHead from '@/Components/AppHead'
import Navbar from "@/Components/Navbar";
import Table from "@/Components/Table";

export default function products(props){
    return (
        <>
            <AppHead title={props.title}/>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-200 dark:bg-gray-900 sm:items-center sm:pt-0">
            <Navbar props={props}/>
                <div className='container mx-auto'>
                    <h1 className="text-3xl text-center font-bold text-black p-5">Top Leaderboard</h1>
                    <Table props={props}/>
                </div>
            </div>
        </>
    );

}
