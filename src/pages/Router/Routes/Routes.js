import Home from "../../Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../../Layout/Main/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            }
        ]
    }
])

export default routes;