import React from 'react';
import { Slack } from 'lucide-react';
import CardComponent from "./../../components/gamestore/Card";
import FooterComponent from "./../../components/gamestore/Footer";

function Home() {

    return (
        <div className="flex flex-col gap-12">
            <div className="h-[30rem]">
                <img src="./img/peridot/logo-bglight.png" className="h-full w-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-5 ">
                {/* TRENDING NOW =========================================== */}
                <div className="flex flex-col gap-5 py-4 mx-auto max-w-screen-xl px-8 w-full">
                    <div className="flex gap-3">
                        <p className="text-3xl font-nokioMedium">TRENDING</p>
                        <p className="text-3xl font-nokioMedium text-myprimaryColor">NOW</p>
                    </div>
                    <div className="flex gap-5 max-md:flex-col rounded-3xl py-4 px-7 bg-gradient-to-t from-myseccondaryDarkColor hover:from-myaccentDarkColor via-transparent to-transparent duration-500">
                        <div className="lg:h-64 md:h-52 aspect-video overflow-hidden rounded-3xl">
                            <img src="./img/peridot/logo-bglight.png" className=" h-full w-full  object-cover duration-500 hover:scale-110 " alt="" />
                        </div>
                        <div className="flex flex-col gap-2 justify-between sm:text-sm md:text-xs lg:text-sm">
                            <p><label className="text-myprimaryColor font-nokioMedium" >Genre </label>Single Player, Action, Adventure</p>
                            <div className="flex flex-col gap-1">
                                <p className="sm:text-2xl lg:text-3xl md:text-2xl font-nokioMedium ">Peridot Game</p>
                                <div className="flex gap-1 text-textDisable">
                                    <Slack className='size-3 text-yellow-300' />
                                    <Slack className='size-3 text-yellow-300' />
                                    <Slack className='size-3 text-yellow-300' />
                                    <Slack className='size-3 ' />
                                    <Slack className='size-3 ' />
                                </div>
                            </div>
                            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, vel optio dignissimos odio assumenda dolor quod harum officiis quas.</p>

                            <div className="flex gap-1 items-center">
                                <img src="./img/peridot/coin-peridot.png" className='w-8 h-8 rounded-full' alt="" />
                                <p className='text-xl font-nokioMedium pt-1'>500 PER</p>
                            </div>
                            <div className="flex gap-3 text-center">
                                <div className="border border-myprimaryColor py-2 px-8 rounded-full max-md:w-1/2">
                                    <div className="mb-1"></div>
                                    <label className='text-sm font-nokioMedium '>DETAILS</label>
                                </div>
                                <div className="border border-myprimaryColor bg-myprimaryColor py-2 px-8 rounded-full max-md:w-1/2">
                                    <div className="mb-1"></div>
                                    <label className='text-sm font-nokioMedium'>BUY NOW</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BEST SELLER =========================================== */}
                <div className="flex flex-col gap-5 py-4 mx-auto max-w-screen-xl px-8 w-full">
                    <div className="flex gap-3">
                        <p className="text-3xl font-nokioMedium">BEST </p>
                        <p className="text-3xl font-nokioMedium text-myprimaryColor">SELLER</p>
                    </div>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </div>
                </div>
            </div>

            <FooterComponent />

        </div>
    );

}

export default Home;