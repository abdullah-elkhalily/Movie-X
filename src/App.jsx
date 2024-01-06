import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Applayout from "./commponents/Applayout"
import Regist from "./pages/regist/Regist"
import Favorit from "./pages/favorit/favorit"
import Login from "./pages/login/Login"
import Details from "./pages/details/Details"
import NotFound from "./commponents/NotFound"
import Movie from "./pages/movies/Movies"
import { Provider } from "react-redux"
import Store from "./store/store"


function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Applayout />,
    children: [
      { index: true, element: <Movie /> },
      { path: '/favorit', element: <Favorit /> },
      { path: '/regist', element: <Regist /> },
      { path: '/login', element: <Login /> },
      { path: '/details/:id', element: <Details /> },
      { path: '*', element: <NotFound /> }
    ]

  }

  ])


    return <Provider store={Store} >      <RouterProvider router={router} />      </Provider> 
  }




export default App
