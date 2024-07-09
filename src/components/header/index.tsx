import { createScrollPosition,  } from "@solid-primitives/scroll";
import { createEffect, createSignal } from "solid-js"
import { useLocation } from "@solidjs/router";

import styles from "./index.module.css"
import "../../app.css"

export default ()=>{

    const { pathname } = useLocation();
    const windowScroll = createScrollPosition();
    const [classes, setClasses] = createSignal({ [styles.row]: true, [styles.header]:true, [styles.sticky]:false });
    const [crrPage, setCrrPage] = createSignal(pathname)
    const [crrOpen, setOpen] = createSignal(false)

    const navItems = [
        { title:"Home", path:"/"},
        { title:"Teachers", path:"/teachers"},
        { title:"Classes", path:"/classes"},
        { title:"Class\u00A0Schedule", path:"https://www.mindbodyonline.com/explore/locations/yoga-onyx"},
        { title:"Pricing", path:"/pricing"},
        { title:"Contact", path:"/contact"},
    ]

    createEffect(() => {
        if (windowScroll.y > 50) {
            setClasses({ [styles.row]: true, [styles.header]:true, [styles.sticky]:true })
        } 
        else {
            setClasses({ [styles.row]: true, [styles.header]:true, [styles.sticky]:false })
        }
    });

    return <div id={styles.header} classList={classes()}>
        <div id={styles.logo}>
            <a onClick={()=>setCrrPage("/")} href="/"><img src="/public/logo.png"/></a>
        </div>
        <div id={styles.nav}>
            <ul classList={{[styles["hide-on-mobile"]]: !crrOpen()}}>
                {
                    navItems.map(navItem=>
                        <li class={navItem.path===crrPage()?styles["current-page"]: ""}>
                            <a onClick={()=> setCrrPage(navItem.path)} href={navItem.path}>{navItem.title}</a>
                        </li>
                    )    
                }
            </ul>

        </div>
        <div class={styles["hide-on-desktop"]}>
            <div class={styles.mobile} onClick={ ()=>setOpen( !crrOpen() ) }>
                <i class="menuIcon material-symbols-outlined">{ crrOpen()? "close" : "menu" }</i>
            </div>
        </div>
        
    </div> 
}