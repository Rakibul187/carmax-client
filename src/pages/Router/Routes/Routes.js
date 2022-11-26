import DashboardLayout from "../../../Layout/DashBoardLayout/DashBoardLayout";
import AddProduct from "../../Dashboard/AddProduct";
import Dashboard from "../../Dashboard/Dashboard";
import MyBooking from "../../Dashboard/MyBooking";
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
            }
        ]
    }
])

export default routes;