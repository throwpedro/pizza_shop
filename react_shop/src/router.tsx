import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

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