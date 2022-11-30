import DashboardLayout from "../../../Layout/DashBoardLayout/DashBoardLayout";
import Blogs from "../../Blogs/Blogs";
import AddProduct from "../../Dashboard/AddProduct";
import AllSellers from "../../Dashboard/AllSellers";
import AllUsers from "../../Dashboard/AllUsers";
import Dashboard from "../../Dashboard/Dashboard";
import MyBooking from "../../Dashboard/MyBooking";
import MyProducts from "../../Dashboard/MyProducts";
import Payment from "../../Dashboard/Payment";
import Contact from "../../Home/Contact/Contact";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Signup from "../../Login/Signup/Signup";
import CategoriesProducts from "../../Products/CategoriesProducts/CategoriesProducts";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
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
                path: '/contact', element: <Contact></Contact>
            },
            {
                path: '/dashboard', element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            },
            {
                path: '/category/:Category',
                loader: ({ params }) => fetch(`https://carmax-server-alpha.vercel.app/category/${params.Category}`),
                element: <PrivateRoute><CategoriesProducts></CategoriesProducts></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers', element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://carmax-server-alpha.vercel.app/bookings/${params.id}`),
            },
        ]
    }
])

export default routes;