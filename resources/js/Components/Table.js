import React from "react";

export default ({ props }) => {
    return (
        <div className="bg-white rounded shadow">
            <table className="w-screen -mt-3 md:mt-0 md:whitespace-nowrap md:w-full">
                <thead className='bg-indigo-900'>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4 text-white font-extrabold">Rank</th>
                        <th className="px-6 pt-5 pb-4 text-white font-extrabold">Name</th>
                        <th className="px-6 pt-5 pb-4 text-white font-extrabold">Score</th>
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
                                            {props.users.indexOf(user) + 1}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        <h5 className="flex items-center font-semibold px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {user.name}
                                        </h5>
                                    </td>
                                    <td className="border-t">
                                        {user.id == props.users[0].id ? (
                                            <h5 className="flex bg-yellow-300 font-bold items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {user.score} Pearls
                                            </h5>
                                        ) : user.id == props.users[1].id ? (
                                            <h5 className="flex bg-gray-300 font-bold items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {user.score} Pearls
                                            </h5>
                                        ): user.id == props.users[2].id ? (
                                            <h5 className="flex bg-yellow-600 font-bold items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                {user.score} Pearls
                                            </h5>
                                        ) : (
                                            <h5 className="flex items-center font-bold px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {user.score} Pearls
                                        </h5>
                                        )}
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
    );
};
