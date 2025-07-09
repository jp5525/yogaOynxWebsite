import Parallax from "~/components/parallax";
import { createAsync } from "@solidjs/router";
import  PublicGoogleSheetsParser from 'public-google-sheets-parser'
import styles  from "./index.module.css"
import { addBaseUrl } from "~/util"
import { Suspense, Switch, Match } from "solid-js";
import pageStyle from "../../styles/page.module.css"
import "../../app.css"


export default function Index() {
    const classes = createAsync( async ()=> new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Classes"}).parse() )
    
    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('classes_hero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2 class="fn-cormorant">Classe Schedule</h2>     
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <p class="copy">Calm your mind. Center your body and mind. Stretch the possibilities. Everyone is welcome—whether you’ve been doing yoga for years, or are brand new to the discipline—we have something for everyone!</p>
            </div>
        </div>

        <div id={styles["section-3"]}>
        <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="50188949bbfb" data-widget-version="1" ></healcode-widget>
        </div>
      </div>
  }