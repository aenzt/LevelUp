import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import AppHead from "@/Components/AppHead";
import { Link, useForm } from "@inertiajs/inertia-react";
import TextInput from "@/Components/TextInput";
import LoadingButton from "@/Components/LoadingButton";

export default function Index(props) {
    const { data, setData, errors, post, processing } = useForm({
        title: '',
        description: '',
      });
    function handleSubmit(e){
        e.preventDefault();
        post(route('post-store'));
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Welcome {props.auth.user.name}!
                </h2>
            }
        >
            <AppHead title={props.title} />

            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-14 text-3xl font-bold">Create Post</h1>
                <div className="h-1 w-44 mb-6 bg-indigo-500 rounded"></div>
                <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="Title"
                                name="title"
                                onChange={e => setData('title', e.target.value)}
                            ></TextInput>
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="Description"
                                name="description"
                                onChange={e => setData('description', e.target.value)}
                            ></TextInput>
                        </div>
                        <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                            <LoadingButton
                                loading={false}
                                type="submit"
                                className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
                            >
                                Create User
                            </LoadingButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
