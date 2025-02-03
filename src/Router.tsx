import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CocinaSection from "./pages/CocinaSection";
import LavaboSection from "./pages/LavaboSection";
import ExteriorSection from "./pages/ExteriorSection";
import ProductosSection from "./pages/ProductosSection";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ProductosSection/>
            },
            {
                path: "/",
                element: <ProductosSection/>
            },
            {
                path: "cocina",
                element: <CocinaSection/>
            },
            {
                path: "lavabo",
                element: <LavaboSection/>
            },
            {
                path: "exterior",
                element: <ExteriorSection/>
            },
        ]
    }
])

export function Routes() {
    return <RouterProvider router={router} />
}