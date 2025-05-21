import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layoutes/HomeLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts
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