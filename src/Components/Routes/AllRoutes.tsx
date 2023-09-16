import { createBrowserRouter } from 'react-router-dom'
import WebLayout from '../Layouts/WebLayout'
import MyDay from "../Pages/MyDay"
import Important from '../Pages/Important'
import Board from '../Pages/Board'
import ErrorBoundary from '../Utils/ErrorBoundary'
import "../../App.css"

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,

        children: [
            {
                index: true,
                element: <MyDay />,
            },

            {
                path: "important",
                element: <Important />,
            },

            {
                path: "board",
                element: <Board />,
            }
        ]
    }
])

export default AllRoutes