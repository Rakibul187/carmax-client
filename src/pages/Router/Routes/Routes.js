import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Signup from "../../Login/Signup/Signup";
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
        ]
    }
])

export default routes;