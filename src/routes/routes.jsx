import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Slider from "../Pages/Slider/Slider";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Slider></Slider>,
                loader: () => fetch('https://travel-guru-server-anikabushra.vercel.app/places/1')
            },
            {
                path: '/places/:id',
                element: <Slider></Slider>,
                loader: ({ params }) => fetch(`https://travel-guru-server-anikabushra.vercel.app/places/${params.id}`)
            }
        ]
    }
])