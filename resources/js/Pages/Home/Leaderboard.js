import React from "react";
import AppHead from '@/Components/AppHead'
import NavbarNew from "@/Components/NavbarNew";
import Table from "@/Components/Table";

export default function Leaderboard(props){
    return (
        <>
            <AppHead title={props.title}/>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-200 dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className='absolute top-0 w-full'>
                    <NavbarNew props={props}/>
            </div>
                <div className='container mx-auto my-14'>
                    <h1 className="text-3xl text-center font-bold text-black p-5">Top Leaderboard</h1>
                    <Table props={props}/>
                </div>
            </div>
        </>
    );

}
