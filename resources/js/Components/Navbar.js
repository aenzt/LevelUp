import React from "react";
import { Link } from '@inertiajs/inertia-react';
import classNames from 'classnames';

export default ({ props }) => {
    return (
        <>
            <div className=" bg-indigo-900 w-screen fixed top-0 left-0 px-6 py-6 sm:block">
                {props.auth.user ? (
                    <>
                        <Link
                        href='/'
                        className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                            'text-indigo-300 rounded-md underline' : props.title === 'Home'
                        })}
                        >
                        Home
                        </Link>

                        <Link
                        href="/leaderboard"
                        className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                            'text-indigo-300 rounded-md underline' : props.title === 'Leaderboard'
                        })}
                        >
                        Leaderboard
                        </Link>

                        <Link
                            href="#"
                            className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                                'text-indigo-300 rounded-md underline' : props.title === 'Dashboard'
                            })}
                        >
                            Submit
                        </Link>

                        <Link
                            method='post'
                            href="/logout"
                            className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                                'text-indigo-300 rounded-md underline' : props.title === 'Dashboard'
                            })}
                        >
                            Log Out
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href='/'
                            className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                                'text-indigo-300 rounded-md underline': props.title === 'Home'
                            })}
                        >
                            Home
                        </Link>

                        <Link
                            href="/leaderboard"
                            className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                                'text-indigo-300 rounded-md underline': props.title === 'Leaderboard'
                            })}
                        >
                            Leaderboard
                        </Link>

                        <Link
                            href={route("login")}
                            className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                                'text-indigo-300 rounded-md underline': props.title === ''
                            })}
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className={classNames('ml-4 px-2 py-2 text-lg font-semibold text-white', {
                                'text-indigo-300 rounded-md underline': props.title === ''
                            })}
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}
