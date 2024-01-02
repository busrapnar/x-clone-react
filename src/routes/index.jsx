import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Explore from "../pages/explore"
import Notifications from "../pages/notifications"
import NotFound from "../pages/notFound"
import MainLayout from "../layouts/main"
import Messages from "../pages/messages"
import Lists from "../pages/lists"

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'explore',
				element: <Explore />
			},
			{
				path: 'notifications',
				element: <Notifications />
			},
			{
				path: 'messages',
				element: <Messages></Messages>
			},
			{
				path: 'lists',
				element: <Lists/>
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])
export default routes