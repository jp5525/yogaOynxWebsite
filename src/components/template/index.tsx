import Header from "../header"
import type { RouteSectionProps } from "@solidjs/router";

import styles from "./index.module.css"

export default (props: RouteSectionProps<unknown>) =>
  <div style={{height: "120vh"}}>
      <div id={styles["contact-box"]}>
        <span class="material-symbols-outlined">call</span>
        <span class={styles.phone}>(248) 977-3107</span> 

        <span class="material-symbols-outlined">mail</span>
        <span>yogaonyx1@gmail.com </span>
      </div>
      <Header />
      <div class="content">
        {props.children}
      </div>
  </div>