"use client";
import { useEffect } from "react";
import TeamAnimation from "../utils/TeamAnimation";


export default function TeamComponent() {
    const listteam = [
        {
            name: "Ranaufal Muha",
            jobdesk: "CEO",
            imgurl: "./img/peridot/logo-bglight.png",
        },
    ]


    useEffect(() => {
        TeamAnimation();
    }, []);

    const myTeam = () => {
        const logosSlide = [];

        for (let i = 0; i < listteam.length; i++) {
            logosSlide.push(
                <div className="flex items-center pb-6" key={i}>
                    <img src={`${listteam[i]["imgurl"]}`} alt="" className="inset-0 object-cover rounded-2xl w-32 h-32 group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div className="px-8">
                        <p className="text-2xl">{`${listteam[i]["name"]}`}</p>
                        <p className="text-gray-500">{`${listteam[i]["jobdesk"]}`}</p>
                    </div>
                </div>
            );
        }

        return logosSlide;
    };

    return (
        <div className=" mx-auto max-w-7xl px-4 py-4 sm:static sm:px-6 lg:px-8 md:flex md:justify-between teamanimations">
            {myTeam()}
        </div>
    );
}
