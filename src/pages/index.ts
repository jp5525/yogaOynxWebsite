import {clientOnly } from "@solidjs/start"

import Home from "./home"
const Teachers = clientOnly(()=>import("./teachers"))
const Classes = clientOnly(()=>import("./classes"))
const Pricing = clientOnly(()=>import("./pricing"))
import Contact from "./contact"
import Retreats from "./retreats"
import Schedule from "./schedule"
const Workshops = clientOnly(()=>import("./workshops"))

export default [
    { path: "/", component: Home },
    { path: "/teachers", component: Teachers},
    { path: "/classes", component: Classes},
    { path: "/pricing", component: Pricing},
    { path: "/contact", component: Contact},
    { path: "/retreats", component: Retreats},
    { path: "/workshops", component: Workshops},
    { path: "/schedule", component: Schedule}
]