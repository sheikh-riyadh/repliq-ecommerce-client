import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AdminPage/AddProduct/AddProduct";
import CustomerList from "../Pages/AdminPage/CustomerList/CustomerList";
import ProductList from "../Pages/AdminPage/ProductList/ProductList";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ViewCart from "../Pages/ViewCart/ViewCarts";
import PrivateRouter from "./PrivateRouter";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/view-cart',
                element: <PrivateRouter><ViewCart></ViewCart></PrivateRouter>
            }, {
                path: '/add-product',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            }, {
                path: '/products-list',
                element: <PrivateRouter><ProductList></ProductList></PrivateRouter>
            }, {
                path: '/all-customers',
                element: <PrivateRouter><CustomerList></CustomerList></PrivateRouter>
            }
        ]
    }
])