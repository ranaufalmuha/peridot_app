"use client";
import { useEffect } from "react";
import RoadAnimation from "../utils/RoadAnimation";


export default function RoadMapComponent() {
    const listroadmaps = [
        {
            title: "Phase 1: Token Development and Initial Launch",
            desc1: "Conceptualization and Planning: Develop a clear business plan including token utility, game integration, and application development.",
            desc2: "Tokenomics Design: Allocate 20% of tokens to the development team, 20% for game rewards, 10% for marketing, and 10% for corporate reserves.",
            desc3: "Token Launch: Initial minting of PER tokens through Peridot Swap with planned cyclical reductions to control inflation.",
            imgurl: "./img/roadmap/1.jpg",
        },
        {
            title: "Phase 2: Gaming Platform Development",
            desc1: "Platform Development: Create a gaming platform similar to Steam, integrating NFTs and the Metaverse for enhanced player experiences.",
            desc2: "Game Integration: Develop and launch games that utilize the PER token for in-game transactions and rewards.",
            desc3: "Community Building: Increase user engagement through marketing campaigns and by building a strong community around the gaming platform.",
            imgurl: "./img/roadmap/2.jpg",
        },
        {
            title: "Phase 3: Peridot Wallet Launch",
            desc1: "Wallet Development: Develop the Peridot Wallet, a secure and versatile digital wallet for managing crypto assets and NFTs within the Peridot ecosystem.",
            desc2: "Integration: Ensure seamless integration of the Peridot Wallet with all solutions within the Peridot ecosystem, providing instant connectivity for players.",
            desc3: "User Adoption: Promote the Peridot Wallet to increase adoption and facilitate easier transactions within the gaming platform.",
            imgurl: "./img/roadmap/3.jpg",
        },
        {
            title: "Phase 4: Expansion and Ecosystem Growth",
            desc1: "Cross-Platform Integration: Allocate 10% of the total token supply for ICP Swap and SNS Swap to enable broader integration with other crypto ecosystems.",
            desc2: "Game Portfolio Expansion: Continuously develop and launch new games to expand the gaming portfolio and attract a larger user base.",
            desc3: "Sustainable Growth: Implement strategies to maintain long-term growth and stability of the Peridot ecosystem, including periodic reviews and updates.",
            imgurl: "./img/roadmap/4.jpg",
        }

    ]


    useEffect(() => {
        RoadAnimation(listroadmaps.length);
    }, []);

    const myRoadMaps = () => {
        const logosSlide = [];

        for (let i = 0; i < listroadmaps.length; i++) {
            logosSlide.push(
                <CommunityDetail
                    title={`${listroadmaps[i]["title"]}`}
                    desc1={`${listroadmaps[i]["desc1"]}`}
                    desc2={`${listroadmaps[i]["desc2"]}`}
                    desc3={`${listroadmaps[i]["desc3"]}`}
                    theClass={`RoadMaps${i}`}
                    imgurl={`${listroadmaps[i]["imgurl"]}`}
                    key={i}
                />
            );
        }

        return logosSlide;
    };

    return (
        <div className="overflow-hidden relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" >
            <h1 className=" mb-12 text-center font text-4xl font-bold tracking-tight text-white sm:text-4xl">Roadmap</h1>
            {/* ==================================  */}
            <div className="py-12">
                {myRoadMaps()}
            </div>
            {/* ==================================  */}

        </div>
    );
}

function CommunityDetail({ title, desc1, desc2, desc3, theClass, imgurl }) {
    return (
        <div className={`${theClass} flex max-md:flex-col py-16 md:items-center `}>
            <div className="md:pr-10 w-1/2 max-md:order-2">
                <h4 className="text-2xl mb-3">{title}</h4>
                <div className="flex-col flex gap-4">
                    <div className="flex gap-4">
                        <label>⚔︎</label>
                        <label className="text-gray-500"> {desc1}</label>
                    </div>
                    <div className="flex gap-4">
                        <label>⚔︎</label>
                        <label className="text-gray-500"> {desc2}</label>
                    </div>
                    <div className="flex gap-4">
                        <label>⚔︎</label>
                        <label className="text-gray-500"> {desc3}</label>
                    </div>
                </div>
            </div>
            <div className="relateive max-md:order-1 max-md:my-4">
                <img src={imgurl} className="md:w-52 md:h-52 w-1/2 aspect-square object-cover rounded-2xl shadow-lg shadow-myprimaryColor-opacity50" />

            </div>
            <div className="row mb-32"></div>

        </div>
    );
}

