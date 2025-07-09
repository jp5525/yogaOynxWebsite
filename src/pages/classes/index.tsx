import Parallax from "~/components/parallax";
import { createAsync } from "@solidjs/router";
import  PublicGoogleSheetsParser from 'public-google-sheets-parser'
import styles  from "./index.module.css"
import { addBaseUrl } from "~/util"
import { Suspense, Switch, Match } from "solid-js";
import pageStyle from "../../styles/page.module.css"
import "../../app.css"

type YogaClassModel =  {title: string, description: string, image:string};

const YogaClass = (props: { class:YogaClassModel })=>{
    const {title, description, image} = props.class;

    return <div class={styles.class}>
        <div class={styles["class-image"]}>
            <img src={image} />
        </div>
        <div class={styles["class-descripiton"]}>
            <div>
                <h2 class="fn-cormorant">{title}</h2>
                <div class="copy" innerHTML={description}></div>
            </div>
        </div>
    </div>

}

export default function Index() {
    const classes = createAsync( async ()=> new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Classes"}).parse() )
    
    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('classes_hero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2 class="fn-cormorant">Classes</h2>    
              <div class="center" id={styles["mt-16"]}>
                <a href="/schedule" class="btn"> Schedule </a>    
              </div>       
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <p class="copy">Calm your mind. Center your body and mind. Stretch the possibilities. Everyone is welcome—whether you’ve been doing yoga for years, or are brand new to the discipline—we have something for everyone!</p>
            </div>
        </div>

        <div id={styles["section-3"]}>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Match when={classes()}>
                        {(classes() ?? []).map(c=><YogaClass class={c} />)}
                    </Match >
                </Switch >
          </Suspense>
        </div>
      </div>
  }