import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function GameStoreApp() {

    return (
        <div className="text-md  ">
            <div className="fixed">
                <nav className="flex w-screen  bg-mydarkColor font-nokioMedium capitalize">
                    {/* <nav className="flex w-screen fixed bg-mydarkColor font-nokioMedium capitalize"> */}
                    <div className="py-4 mx-auto max-w-screen-xl px-8 w-full flex items-center justify-between">
                        <div className="flex gap-5 w-1/2">
                            <Link to="" >home</Link>
                            <Link to="library">library</Link>
                            <Link to="library">assets</Link>
                            <Link to="library">news</Link>
                        </div>
                        <Link to="/">
                            <img src="./img/peridot/logo-bgnone.png" className="h-8 mx-3" alt="" />
                        </Link>
                        <div className="flex justify-end w-1/2">
                            login
                        </div>
                    </div>
                </nav>
                <div className="w-full bg-red-600 text-center p-3">ON DEVELOPE</div>
            </div>
            <Outlet />
        </div>
    );

}

export default GameStoreApp;