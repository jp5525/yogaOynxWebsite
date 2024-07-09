import Home from "./home"
import Teachers from "./teachers"
import Classes from "./classes"
import Pricing from "./pricing"
import Contact from "./contact"

export default [
    { path: "/", component: Home },
    { path: "/teachers", component: Teachers},
    { path: "/classes", component: Classes},
    { path: "/pricing", component: Pricing},
    { path: "/contact", component: Contact}
]