import React from "react";
import AppHead from '@/Components/AppHead'
import NavbarNew from "@/Components/NavbarNew";
import Table2 from "@/Components/Table2";

export default function History(props) {
    console.log(props.posts)
    return (
        <>
            <AppHead title={props.title} />
            <div className="flex relative min-h-screen bg-gray-200 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className='absolute top-0 w-full z-30'>
                    <NavbarNew props={props} />
                </div>
                <div className='relative w-screen lg:mx-16 my-20'>
                    <h1 className="text-3xl text-center font-bold text-black p-5">Submission History</h1>
                    <Table2 props={props} />
                </div>
            </div>
        </>
    );

}
