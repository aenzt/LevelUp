import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import AppHead from '@/Components/AppHead';

export default function Index(props) {
    const time = new Date();
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl leading-tight">Welcome {props.auth.user.name}!</h2>}
        >
            <AppHead title={props.title}/>

            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-14 text-3xl font-bold">Dashboard</h1>
                <div className="h-1 w-[160px] mb-6 bg-indigo-500 rounded"></div>
                <div className="overflow-x-auto bg-white rounded shadow">
                </div>
            </div>
        </Authenticated>
    );
}
