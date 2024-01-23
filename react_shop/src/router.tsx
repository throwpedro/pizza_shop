import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);