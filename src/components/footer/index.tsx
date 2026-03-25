import { createSignal } from "solid-js"
import { useLocation } from "@solidjs/router";
import { addBaseUrl } from "~/util";

import styles from "./index.module.css"
import "../../app.css"
import { style } from "solid-js/web";

export default ()=>{

    const { pathname } = useLocation();
    const [crrPage, setCrrPage] = createSignal(pathname)
    const [classes, setClasses] = createSignal({ [styles.row]: true, [styles.header]:true, [styles.sticky]:false });
    const baseUrl = import.meta.env.SERVER_BASE_URL? `${import.meta.env.SERVER_BASE_URL}` :  "/";

    return <div id={styles.footer}>

        <div class={styles.left}>
            <div id={styles.logo} >
                <a onClick={()=>setCrrPage(baseUrl? baseUrl : "/")} href={baseUrl? baseUrl : "/"}>
                    <img src={addBaseUrl("logo.png")}/>
                </a>
            </div>
            <div class={styles.address}>
                <address>3651 S. Baldwin Rd,<br />Orion, MI 48350</address>

                <div id={styles["contact-box"]}>
                    <span class={styles.phone}>(248) 977-3107</span> 
                    <br />
                    <span><a href="mailto:info@onyx.yoga">info@onyx.yoga</a></span>
                </div>
            </div>
        </div>
        <div class={styles.right}>
            <div id={styles.social}>
                <a href="https://www.instagram.com/yogaonyxlo"> 
                    <img src={addBaseUrl("instagram.svg")} />
                </a>
                <a href="https://www.facebook.com/yogaonyxlo"> 
                    <img src={addBaseUrl("facebook.svg")} />
                </a>
            </div>
        </div>
    </div>
}