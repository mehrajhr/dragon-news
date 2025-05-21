import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layoutes/HomeLayouts";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/Category/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>Authentication layout</h2>
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '/*',
        element: <h2>Error</h2>
    }
])

export default router;