import {clientOnly } from "@solidjs/start"

import Home from "./home"
const Teachers = clientOnly(()=>import("./teachers"))
import Classes from "./classes"
const Pricing = clientOnly(()=>import("./pricing"))
import Contact from "./contact"

export default [
    { path: "/", component: Home },
    { path: "/teachers", component: Teachers},
    { path: "/classes", component: Classes},
    { path: "/pricing", component: Pricing},
    { path: "/contact", component: Contact}
]