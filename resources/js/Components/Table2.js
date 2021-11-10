import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default ({ props }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString('en-GB')
    }
    return (
        <div className="overflow-x-auto bg-white rounded shadow">
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">Sender's Name</th>
                        <th className="px-6 pt-5 pb-4">Account's Email</th>
                        <th className="px-6 pt-5 pb-4">Date</th>
                        <th className="px-6 pt-5 pb-4">Paper</th>
                        <th className="px-6 pt-5 pb-4">Glass</th>
                        <th className="px-6 pt-5 pb-4">Metal</th>
                        <th className="px-6 pt-5 pb-4">Plastic</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.posts.map(post => (
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
                                    {post.email}
                                </h5>
                            </td>
                            <td className="border-t">
                                <h5 className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {formatDate(post.created_at)}
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
                                {post.status == 1 ? <a className="rounded-xl bg-green-100 text-green-600 font-bold p-1">
                                    Approved
                                </a> : post.status == 2 ? <a className="rounded-xl bg-red-100 text-red-600 font-bold p-1">
                                    Denied
                                </a> : <a className="rounded-xl bg-yellow-100 text-yellow-600 font-bold p-1">
                                    Awaiting Approval
                                </a>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
