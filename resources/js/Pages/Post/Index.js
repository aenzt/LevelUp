import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import AppHead from "@/Components/AppHead";
import { Link } from "@inertiajs/inertia-react";

export default function Index(props) {
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

            <div className="w-[90vw] mx-auto sm:px-6 lg:px-8 md:w-screen">
                <h1 className="mt-14 text-3xl font-bold">Post</h1>
                <div className="h-1 w-16 mb-6 bg-indigo-500 rounded"></div>
                <div className="flex items-center justify-between mb-6">
                    <Link
                        className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500 focus:outline-none"
                        href={route("post-create")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> Post</span>
                    </Link>
                </div>
                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">Sender's Name</th>
                                <th className="px-6 pt-5 pb-4">Account's Email</th>
                                <th className="px-6 pt-5 pb-4">Paper</th>
                                <th className="px-6 pt-5 pb-4">Glass</th>
                                <th className="px-6 pt-5 pb-4">Metal</th>
                                <th className="px-6 pt-5 pb-4">Plastic</th>
                                <th className="px-6 pt-5 pb-4">Status</th>
                                <th className="px-6 pt-5 pb-4 border-b">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.post.map(post => (
                                <tr
                                    key={post.id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {post.firstName} {post.lastName}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {props.auth.user.email}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {post.paperType} grams
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {post.glassType} grams
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {post.metalType} grams
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {post.plasticType} grams
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        {post.status == 1 ? <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            Approved
                                        </h5> : post.status == 2 ? <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            Denied
                                        </h5> : <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            Awaiting Approval
                                        </h5>}
                                    </td>
                                    <td className="mt-2 border-t">
                                        <Link as='button' href={`/dashboard/post/${post.id}`} className="bg-blue-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </Link>
                                        <Link as='button' href={`/dashboard/post/edit/${post.id}?status=true`} className="bg-green-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                        <Link as='button' href={`/dashboard/post/edit/${post.id}?status=false`} className="bg-red-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td className="px-6 py-4 border-t" colSpan="4">
                                    No Post found.
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
}
