import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { LogOut, Menu, X } from 'lucide-react';

// get Information PERIDOT TOKEN 
import PlugConnect from '@psychedelic/plug-connect';
import FormatterToGeneralToken from '../utils/FormatterToGeneralToken';

// backend motoko 
import { peridot_web_backend_user } from 'declarations/peridot_web_backend_user';
import { peridot_web_backend_Token } from 'declarations/peridot_web_backend_Token';




function Navbar() {
    const tokenCanisterId = process.env.CANISTER_ID_PERIDOT_TOKEN;
    const whitelist = ['bd3sg-teaaa-aaaaa-qaaba-cai'];
    const host = 'http://127.0.0.1:4943';

    // Peridot Informations =================================================
    const [connected, setConnected] = useState(false);
    const [principalId, setPrincipalId] = useState('');
    const [balance, setBalance] = useState('');
    localStorage.setItem("isConnected", connected);
    console.log("koneksi 1", connected)

    useEffect(() => {
        const checkBalance = async () => {
            peridot_web_backend_Token.balance_of(localStorage.getItem("principalId")).then((result) => {
                setBalance(FormatterToGeneralToken(result));
            });
        }
        // ================================================================
        const checkConnection = async () => {
            const isConnected = await window.ic.plug.isConnected();
            setConnected(isConnected);

            if (isConnected) {
                if (!window.ic.plug.agent) {
                    await window.ic.plug.createAgent({ whitelist, host });
                }
                const principal = await window.ic.plug.agent.getPrincipal();

                setPrincipalId(principal.toString());
                localStorage.setItem("principalId", principal);
                checkBalance();

                console.log("Test : " + principalId);
            }
        };
        checkConnection();
        checkBalance();


    }, []);

    const onConnectCallback = async () => {
        const requestConnect = await window.ic.plug.requestConnect();
        const isConnected = await window.ic.plug.isConnected();
        if (isConnected) {
            const principal = await window.ic.plug.agent.getPrincipal();
            peridot_web_backend_user.loginOrRegister(principal.toString()).then((result) => {
                setConnected(true);
                setPrincipalId(principal.toString());
                console.log('Plug Wallet connected:', principal.toString());

                localStorage.setItem("principalId", principal);

            })

        } else {
            console.log('Failed to connect Plug Wallet');
        }
    };

    const handleLogout = () => {
        setConnected(false);
        setPrincipalId('');
        window.ic.plug.disconnect();
        localStorage.setItem("isConnected", false);
        localStorage.removeItem("principalId");
    };

    // Button =================================================
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="text-md capitalize ">
            <nav className="flex w-screen fixed z-10 bg-mydarkColor font-nokioMedium border border-x-0 border-t-0 border-myseccondaryDarkColor">

                <div className="py-3 mx-auto max-w-screen-xl px-8 w-full flex items-center justify-between">
                    {/* <!-- Logo --> */}
                    <div className="flex w-1/2 items-center">
                        <div className="hidden md:flex gap-5 ml-4">
                            <div className=" hover:text-myprimaryColor"><Link to="/">Home</Link></div>
                            <div className=" hover:text-myprimaryColor"><a href="#roadmapid">Roadmap</a></div>
                            <div className=" hover:text-myprimaryColor"><Link to="/gamestore">Game Store</Link></div>
                            <div className=" hover:text-myprimaryColor"><Link to="/airdrop">Airdrop</Link></div>
                        </div>
                    </div>
                    <a href="/" className="h-8 w-8 flex justify-center items-center">
                        <img src="./img/peridot/logo-bgnone.png" className="aspect-square object-contain" alt="Logo" />
                    </a>

                    <div className={`md:hidden absolute top-16 left-0 right-0 bg-mydarkColor transition-transform duration-300 ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                        <ul className="flex flex-col items-center gap-5 py-5">
                            <li className="hover:text-myprimaryColor"><Link to="/" onClick={toggleMenu}>Home</Link></li>
                            <li className="hover:text-myprimaryColor"><a href="#roadmapid" onClick={toggleMenu}>Roadmap</a></li>
                            <li className="hover:text-myprimaryColor"><Link to="/gamestore" onClick={toggleMenu}>Game Store</Link></li>
                            <li className="hover:text-myprimaryColor"><Link to="/airdrop" onClick={toggleMenu}>Airdrop</Link></li>
                            {menuOpen ? (
                                <button onClick={toggleMenu} className="focus:outline-none flex justify-center w-full px-8">
                                    <X />
                                </button>
                            ) : (
                                <button onClick={toggleMenu} className="focus:outline-none flex w-full px-8">
                                    <Menu />
                                </button>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-end w-1/2 ">
                        {connected ? (
                            <div className='flex items-center gap-2'>
                                <div className="h-12 p-2 px-4 rounded-md bg-myseccondaryDarkColor flex items-center font-nokioMedium">
                                    <p className='mt-1'>{balance} PER</p>
                                </div>
                                <Link to='/profile' className=' h-12 w-12 p-2 rounded-md bg-myseccondaryDarkColor '>
                                    <img src="./img/peridot/logo-bglight.png" alt="" className="rounded-full w-full aspect-square object-cover" />
                                </Link>

                                <button onClick={handleLogout}>
                                    <LogOut className='text-red-500' />
                                </button>
                            </div>
                        ) : (
                            <button className='border-2 border-myprimaryColor py-2 px-4 rounded-lg flex gap-2 items-center' onClick={onConnectCallback}><img src="./img/brands/plugwallet.png" className='w-6 aspect-square object-contain' alt="" />
                                <p>Connect wallet</p>
                            </button>
                            // <div className="">test</div>
                        )}
                    </div>
                </div>
            </nav >
        </div>
    );
}

export default Navbar;