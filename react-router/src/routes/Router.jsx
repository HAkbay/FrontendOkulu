import { HomeView } from "../views/HomeView"
import { AboutView } from "../views/AboutView"
import { useRoutes } from 'react-router-dom'
// import { ParameterView } from "../views/ParameterView"
import NewView from "../views/NewView"
import GamesView from "../views/GamesView"

export const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        { path: '/about', element: <AboutView /> },
        // { path: '/parameter/:id', element: <ParameterView /> },
        {
            path: '/news/', element: <NewView />, children: [
                { path: 'games', element: <GamesView /> }
            ]
        }
    ])
    return (routes)
}

export default Router