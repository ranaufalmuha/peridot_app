import React, { useState, useEffect } from 'react';
import "../../landingpagecss.scss";
import { Link } from "react-router-dom";
import CommunityComponent from "../../components/Community";
import RoadMapComponent from "../../components/RoadMap";
import TeamComponent from "../../components/Team";
import ShowCaseComponent from "../../components/ShowCase";
import Footer from "../../components/Footer";

// backend 
import formatToken from '../../utils/FormatterToken';
import { peridot_web_backend_Token } from 'declarations/peridot_web_backend_Token';

function Home() {
    // Peridot Informations =================================================
    const [tokenname, setTokenName] = useState(null);
    const [symbol, setSymbol] = useState(null);
    const [totalSupply, setTotalSupply] = useState(null);
    const [tokenfee, setTokenFee] = useState(500);

    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        peridot_web_backend_Token.per_total_supply().then((result) => {
            setTotalSupply(formatToken(result));
        });
    }, []);



    return (
        <div className="">
            {/* ==================================  */}
            <div id="firstpageid"></div>
            < hr />
            {/* ==================================  */}
            < div className="relative overflow-hidden pt-32"  >
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="font text-4xl font-bold tracking-tight sm:text-6xl">Peridot</h1>
                            <p className="mt-4 text-xl text-gray-500">Peridot ( PER ) is a token designed to empower the gaming and digital transaction ecosystem</p>
                            <div className="flex gap-5 mt-7">
                                <a href="#" className="inline-block rounded-full bg-myprimaryColor py-3 px-8 text-center font-medium text-white ">Buy $PER</a>

                                <a href="./whitepapers/v1_0.pdf" className="inline-block rounded-full border border-myprimaryColor py-3 px-8 text-center font-medium text-myprimaryColor hover:bg-white hover:text-black">Read Whitepaper</a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-20">
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="./img/peridot/logo-bglight.png" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="./img/peridot/logo-bglight.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="./img/peridot/logo-bglight.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="./img/peridot/logo-bglight.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="./img/peridot/logo-bglight.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="./img/peridot/logo-bglight.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="./img/peridot/logo-bglight.png" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* ==================================  */}
            < hr />
            {/* ==================================  */}
            <div className="py-32 relative w" id="communityid">
                <h1 className=" mb-12 text-center font text-4xl font-bold tracking-tight text-white sm:text-4xl">Join Our Community</h1>
                <br />
                <br />
                <CommunityComponent />
            </div>
            {/* ====================================================================  */}
            < hr />
            {/* ==================================  */}
            <div className="py-32 px-8">
                <div className="py-4 px-2 mx-auto max-w-screen-xl  sm:py-4 lg:px-6">
                    <h1 className=" mb-12 text-center font text-4xl font-bold tracking-tight text-white sm:text-4xl">About</h1>
                    <div className="flex flex-col gap-20 ">
                        {/* ==================================  */}
                        <div className="flex gap-12 items-center justify-center max-md:flex-col ">
                            <img src="./img/peridot/logo-bglight.png" className="size-96 myrounded overflow-hidden object-cover" />
                            <div className="md:w-1/2">
                                <h4 className="text-2xl mb-6">Why Peridot?</h4>
                                <div className="text-xl text-gray-400">
                                    <p>
                                        Peridot ( PER ) is a token designed to empower the gaming and digital transaction ecosystem. The project serves as a game launcher and digital distribution, allowing users to access, purchase, and play various games.
                                    </p>
                                    <br />
                                    <p>Peridot canister ID :</p>
                                    <p>{process.env.CANISTER_ID_PERIDOT_TOKEN}</p>
                                </div>
                            </div>
                        </div>
                        {/* ==================================  */}
                        <div className="flex gap-12 items-center justify-center max-md:flex-col">
                            <div className="md:w-1/2 max-md:order-last">
                                <h4 className="text-2xl mb-6">Tokenomics</h4>
                                <div className="text-xl text-gray-400">
                                    <p>💎 Supply Minted : {totalSupply + " PER"}</p>
                                    <br />
                                    <p>🔧 Fee : {tokenfee + " PER"}</p>
                                    <br />
                                    <a href="./whitepapers/v1_0.pdf" className="inline-block rounded-full border border-myprimaryColor py-3 px-8 text-center font-medium text-myprimaryColor hover:bg-white hover:text-black">Read Whitepaper</a>
                                </div>
                            </div>
                            <img src="./img/tokenomics.png" className="size-96 myrounded overflow-hidden object-cover" />
                        </div>
                        {/* ==================================  */}
                    </div>
                </div>
            </div>

            {/* ==================================  */}
            < hr />
            {/* ==================================  */}
            <div className="py-32" id="roadmapid">
                <RoadMapComponent />
            </div>
            {/* ==================================  */}
            < hr />
            {/* ==================================  */}

            <div className="relative items-center flex justify-center overflow-hidden">
                <div className="h-full w-max md:w-full md:h-max flex justify-center object-cover bg-cover absolute -z-10 ">
                    <img src="./img/bg-team-full.png" alt="" className="myanimatespin" />
                </div>
                <div className="py-32">
                    <h1 className=" mb-12 text-center font text-4xl font-bold tracking-tight text-white sm:text-4xl">Founder</h1>
                    <TeamComponent />
                </div>
            </div>
            {/* ==================================  */}
            < hr />
            {/* ==================================  */}
            < section className="py-32 overflow-hidden" >
                <ShowCaseComponent />
            </section >
            {/* ==================================  */}
            < hr />
            {/* ==================================  */}

            <Footer />
        </div >
    );
}

export default Home;
