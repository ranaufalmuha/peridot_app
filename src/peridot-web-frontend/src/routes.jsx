import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/_Peridot_/Home';
import Profile from './pages/_Peridot_/Profile';
import AirDrop from './pages/_Peridot_/AirDrop';

// gamestore 
import GameStore from './pages/gamestore/main';
import LibraryGamsStore from './pages/gamestore/Library';
import HomeGamsStore from './pages/gamestore/Home';
import DetailGame from './pages/gamestore/DetailGame';

const router = createBrowserRouter([
    // main path 
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "airdrop",
                element: <AirDrop />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    // GameStore path 
    {
        path: "/gamestore",
        element: <GameStore />,
        children: [
            {
                index: true,
                element: <HomeGamsStore />
            },
            {
                path: "",
                element: <HomeGamsStore />
            },
            {
                path: "library",
                element: <LibraryGamsStore />
            },
            {
                path: "detailgame",
                element: <DetailGame />
            },
        ]
    },
]);

export default router;
