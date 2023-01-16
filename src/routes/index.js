// Public routes
import Home from "../pages/Home"
import Members from "../pages/Members"

const publicRoutes =[
    { path: '/', component: Home},
    { path: '/members', component: Members},

];

const privateRoutes = []

export {publicRoutes, privateRoutes}