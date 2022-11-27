import DashboardLayout from "../../../Layout/DashBoardLayout/DashBoardLayout";
import Blogs from "../../Blogs/Blogs";
import AddProduct from "../../Dashboard/AddProduct";
import AllSellers from "../../Dashboard/AllSellers";
import AllUsers from "../../Dashboard/AllUsers";
import Dashboard from "../../Dashboard/Dashboard";
import MyBooking from "../../Dashboard/MyBooking";
import MyProducts from "../../Dashboard/MyProducts";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Signup from "../../Login/Signup/Signup";
import CategoriesProducts from "../../Products/CategoriesProducts/CategoriesProducts";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../../Layout/Main/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
            {
                path: '/dashboard', element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            },
            {
                path: '/category/:Category',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.Category}`),
                element: <CategoriesProducts></CategoriesProducts>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard', element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/bookings', element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/addproduct', element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts', element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                loader: () => fetch("http://localhost:5000/users"),
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allsellers', element: <AllSellers></AllSellers>
            },
        ]
    }
])

export default routes;