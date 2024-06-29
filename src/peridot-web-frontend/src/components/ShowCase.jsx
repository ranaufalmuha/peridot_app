export default function ShowCaseComponent() {
    const renderShowCase = () => {
        const logosSlide = [];

        for (let i = 0; i < 4; i++) {
            logosSlide.push(
                <div className="grid grid-cols-7 gap-7 w-[2000px] h-full scroller-slide animate-loop-scroll" key={i}>

                    <div className="col-span-2 h-auto flex flex-col">

                        <a className="group relative flex flex-col overflow-hidden myrounded px-4 pb-4 pt-40 hover:rotate-3 duration-500 flex-grow">
                            <img src="./img/mascots/char-boble.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4">Guide Spirit</h3>
                        </a>
                    </div>

                    <div className="col-span-1 sm:col-span-1 md:col-span-1">
                        <a href="" className="group flex justify-center items-center myrounded w-64 h-48 hover:rotate-3 duration-500 mb-4 bg-myseccondaryDarkColor">
                            <h3 className="z-10 text-xl text-center font-medium text-white p-4"><label className="bg-gradient-to-r from-red-700 via-blue-500 to-green-500 inline-block text-transparent bg-clip-text font-nokioMedium text-7xl">5,000</label></h3>
                        </a>
                        <a href="" className="group flex justify-center items-center myrounded w-64 h-48 hover:rotate-3 duration-500 mb-4 bg-myseccondaryDarkColor">
                            <h3 className="z-10 text-xl text-center font-medium text-white p-4"><label className="bg-gradient-to-r from-yellow-800 via-pink-500 to-purple-600 inline-block text-transparent bg-clip-text font-nokioMedium text-7xl">NFT</label></h3>
                        </a>

                    </div>

                    <div className="col-span-1 sm:col-span-1 md:col-span-1 h-auto flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden myrounded px-4 pb-4 pt-40 hover:rotate-3 duration-500 flex-grow">
                            <img src="./img/mascots/char-boble-fire.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4">Flarepaw</h3>
                        </a>
                    </div>

                    <div className="col-span-1 sm:col-span-1 md:col-span-1 h-auto flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden myrounded px-4 pb-4 pt-40 hover:rotate-3 duration-500 flex-grow">
                            <img src="./img/mascots/char-boble-water.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4">Wavelet</h3>
                        </a>
                    </div>

                    <div className="col-span-1 sm:col-span-1 md:col-span-1 h-auto flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden myrounded px-4 pb-4 pt-40 hover:rotate-3 duration-500 flex-grow">
                            <img src="./img/mascots/char-boble-earth.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4">Pebblepaw</h3>
                        </a>
                    </div>
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 h-auto flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden myrounded px-4 pb-4 pt-40 hover:rotate-3 duration-500 flex-grow">
                            <img src="./img/mascots/char-boble-air.jpg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4">Breezewing</h3>
                        </a>
                    </div>
                </div>
            );
        }

        return logosSlide;
    };


    return (
        <div className="flex gap-7 w-max scroller">
            {renderShowCase()}
        </div>
    );
}


