import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default ({ props }) => {
    return (
        <div className="overflow-x-auto bg-white rounded shadow">
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">Name</th>
                        <th className="px-6 pt-5 pb-4">Score</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map(user => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t">
                                        <h5 className="flex items-center font-semibold px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {user.name}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        {user.id == props.users[0].id ? (
                                            <h5 className="flex bg-yellow-300 font-bold items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {user.score}
                                            </h5>
                                        ) : user.id == props.users[1].id ? (
                                            <h5 className="flex bg-gray-300 font-bold items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {user.score}
                                            </h5>
                                        ): user.id == props.users[2].id ? (
                                            <h5 className="flex bg-yellow-600 font-bold items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {user.score}
                                            </h5>
                                        ) : (
                                            <h5 className="flex items-center font-bold px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {user.score}
                                        </h5>
                                        )}
                                    </td>
                                </tr>
                            ))}
                    {/* <tr>
                        <td className="px-6 py-4 border-t" colSpan="2">
                            No User found.
                        </td>
                        <td className="px-6 py-4 border-t" colSpan="2">
                            No Score found.
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};