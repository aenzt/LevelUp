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

            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-14 text-3xl font-bold">Users</h1>
                <div className="h-1 w-20 mb-6 bg-indigo-500 rounded"></div>
                <div className="flex items-center justify-between mb-6">
                    <Link
                        className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500 focus:outline-none"
                        href={route("user")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> User</span>
                    </Link>
                </div>
                <div className="overflow-x-auto bg-white rounded shadow mb-10">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">Name</th>
                                <th className="px-6 pt-5 pb-4">Email</th>
                                <th className="px-6 pt-5 pb-4" colSpan="2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.users.map(user => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {user.name}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {user.email}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <Link as='button' href="#" className="bg-yellow-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                            </svg>
                                                Edit
                                        </Link>
                                        <Link as='button' href="#" className="bg-red-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                                Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td className="px-6 py-4 border-t" colSpan="4">
                                    No users found.
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
}
