import Header from "../components/Header/Header";
import DefaultLayOut from "../layout/DefaultLayOut"
import OutLayOut from "../layout/OutLayOut"
import Calendary from "../pages/Calendary";
import CreateSticker from "../pages/CreateSticker";
import Home from "../pages/Home"
import StickyWall from "../pages/StickyWall";
import Today from "../pages/Today";
import Upcoming from "../pages/Upcoming"
const routesConfig = [
    {
        path:'/header',
        element:<Header />
    },
    {
        element: <DefaultLayOut />,
        children: [
            {
                path: '/',
                element: <Home />
            }
            
        ]
    },
    {
        element: <OutLayOut />,
        children: [
            
            {
                path: '/today',
                element: <Today />
            },
            {
                path: '/calendary',
                element: <Calendary />
            },
            {
                path: '/stickyWall',
                element: <StickyWall />
            },
            {
                path: '/upcoming',
                element: <Upcoming />
            },
            {
                path: '/createSticker',
                element: <CreateSticker />
            }
        ]
    }
]

export default routesConfig;