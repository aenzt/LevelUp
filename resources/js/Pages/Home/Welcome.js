import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import Coastline from "./coastline.jpg";
import NavbarNew from "@/Components/NavbarNew";
import AppHead from "@/Components/AppHead";

export default function Welcome(props) {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();
    let rank = 0;

    if(props.auth.user){
        for (let index = 0; index < props.users.length; index++) {
            if(props.users[index].id == props.auth.user.id){
                rank = index+1;
                break;
            }
        }
    }

    const startTimer = () => {
        const countdown = new Date("January 1, 2022 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdown - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    const d = new Date();
    const day = d.getDay();
    const dayNum = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    let todayday;
    let todaymonth;

    switch (day) {
        case 0:
            todayday = "Sunday";
            break;
        case 1:
            todayday = "Monday";
            break;
        case 2:
            todayday = "Tuesday";
            break;
        case 3:
            todayday = "Wednesday";
            break;
        case 4:
            todayday = "Thursday";
            break;
        case 5:
            todayday = "Friday";
        case 6:
            todayday = "Saturday";
    }
    switch (month) {
        case 1:
            todaymonth = "January";
            break;
        case 2:
            todaymonth = "February";
            break;
        case 3:
            todaymonth = "March";
            break;
        case 4:
            todaymonth = "April";
            break;
        case 5:
            todaymonth = "May";
            break;
        case 6:
            todaymonth = "June";
            break;
        case 7:
            todaymonth = "July";
            break;
        case 8:
            todaymonth = "August";
            break;
        case 9:
            todaymonth = "September";
            break;
        case 10:
            todaymonth = "October";
            break;
        case 11:
            todaymonth = "November";
            break;
        case 12:
            todaymonth = "December";
            break;
    }

    return (
        <>
        <AppHead title={props.title} />
        <div className="z-0">
            <NavbarNew props={props}/>
        </div>
        <div className="w-screen h-screen">
            <div className="relative w-4/5 h-72 mx-auto">
                <a className="absolute w-full py-2 top-5 inset-x-5 lg:inset-x-24 text-white text-lg lg:text-6xl font-bold">Lets make our coastline cleaner.</a>
                <img
                    src={Coastline}
                    alt="missing coastline img"
                    className="w-full h-full object-cover object-bottom rounded-lg shadow-md mx-auto my-3"
                ></img>
            </div>
            <div className="grid lg:grid-cols-2 justify-items-center my-5 mx-1">
                <div className="shadow-lg rounded w-72 lg:w-3/5 h-60 lg:h-52">
                    <a className="flex justify-center text-xl font-semibold text-indigo-900 mt-1.5">Time left to submit</a>
                    <div className="w-full border-b-2"></div>
                    <div className="flex flex-col justify-center items-center h-3/4 mx-1">
                        <a className="text-xl text-center lg:text-3xl font-bold text-indigo-900">{timerDays} days {timerHours} hours {timerMinutes} minutes {timerSeconds} seconds</a>
                        <Link href="/submit" className="text-sm font-semibold text-white mt-2 p-2 bg-indigo-900 rounded shadow"><span>Submit Here!</span></Link>
                    </div>
                </div>
                <div className="shadow-lg rounded-md w-72 lg:w-3/5 h-60 lg:h-52 my-4 lg:my-0">
                    <a className="flex justify-center text-xl font-semibold text-indigo-900 mt-1.5">Top Leaderboards</a>
                    <div className="w-full border-b-2"></div>
                    <div className="content-between items-center mx-2 text-lg text-white">
                        <a className="flex justify-between my-4 bg-yellow-400 rounded w-full px-2"><span>{props.users[0].name}</span><span>{props.users[0].score} pearls</span></a>
                        <a className="flex justify-between my-4 bg-gray-400 rounded w-full px-2"><span>{props.users[1].name}</span><span>{props.users[1].score} pearls</span></a>
                        <a className="flex justify-between my-4 bg-yellow-800 rounded w-full px-2"><span>{props.users[2].name}</span><span>{props.users[2].score} pearls</span></a>
                    </div>
                </div>
            </div>
            {props.auth.user ? (
                <div className="grid lg:grid-cols-2 justify-items-center my-5 mx-1">
                <div className="shadow-lg rounded w-72 lg:w-3/5 h-48 lg:h-32">
                    <a className="flex justify-center text-xl font-semibold text-indigo-900 mt-1.5">Your Pearl</a>
                    <div className="w-full border-b-2"></div>
                    <div className="flex flex-col justify-center items-center h-3/4 mx-1">
                        <a className="text-xl text-center lg:text-3xl font-bold text-indigo-900">{props.auth.user.score} pearls</a>
                    </div>
                </div>
                <div className="shadow-lg rounded-md w-72 lg:w-3/5 h-48 lg:h-32 my-4 lg:my-0">
                    <a className="flex justify-center text-xl font-semibold text-indigo-900 mt-1.5">Current Rank</a>
                    <div className="w-full border-b-2"></div>
                    <div className="flex flex-col justify-center items-center h-3/4 mx-1">
                        <a className="text-xl text-center lg:text-3xl font-bold text-indigo-900">#{rank}</a>
                    </div>
                </div>
            </div>
            ) : (<div/>)}
        </div>
        </>
    );
}
