import React from "react";

export default function Create(props) {
    const time = new Date();
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome {props.auth.user.name}!</h2>}
        >
            <AppHead title={props.title}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Create!</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
