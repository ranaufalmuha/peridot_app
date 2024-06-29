import { Link } from 'react-router-dom';
export default function CardComponent() {
    return (
        <Link to='/gamestore/detailgame' className="flex flex-col gap-2 py-4 px-7 rounded-3xl  justify-between bg-gradient-to-t from-myseccondaryDarkColor hover:from-myaccentDarkColor via-transparent to-transparent">
            <div className="h-40 aspect-video rounded-3xl overflow-hidden">
                <img src="./img/peridot/logo-bglight.png" className="object-cover duration-500 hover:scale-110" alt="" />
            </div>
            <p className='text-xs'><label className="text-myprimaryColor font-nokioMedium" >Genre </label>Single Player, Action, Adventure</p>
            <div className="flex flex-col gap-1">
                <p className="text-lg font-nokioMedium">Peridot Game</p>
            </div>
            <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, vel optio dignissimos odio</p>

            <div className="flex gap-1 items-center">
                <img src="./img/peridot/coin-peridot.png" className='w-4 h-4 rounded-full' alt="" />
                <p className='font-nokioMedium pt-1'>500 PER</p>
            </div>
            <div className="flex mt-1 gap-2 text-center">
                <Link to="/gamestore/detailgame" className="border border-myprimaryColor w-1/2 py-2 px-5 rounded-full font-nokioMedium">DETAILS
                </Link>
                <Link to='#error' className="bg-myprimaryColor w-1/2 py-2 px-5 rounded-full font-nokioMedium">BUY NOW
                </Link>
            </div>
        </Link>
    );
}
