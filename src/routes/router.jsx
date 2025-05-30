import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layoutes/HomeLayouts";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/Category/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../layoutes/AuthLayout";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";

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
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path:'/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component : Register
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>
        ,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h2>Error</h2>
    }
])

export default router;