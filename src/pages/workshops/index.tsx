import Parallax from "~/components/parallax";
import styles  from "./index.module.css"
import { addBaseUrl } from "~/util"
import pageStyle from "../../styles/page.module.css"
import "../../app.css"
import  PublicGoogleSheetsParser from 'public-google-sheets-parser'
import { createAsync } from "@solidjs/router";
import { Suspense, Switch, Match } from "solid-js";

const YogaClass = (props: { class:{title: string, description: string, image:string, date: string, focus?: string}})=>{
    const {title, description, image, date, focus} = props.class;
    
    return <div class={styles.class}>
        {/* <div class={styles["class-image"]}>
            <Parallax 
                class={styles["host-img"]} 
                image={image} 
                fixed={false}
                opacity={1}
                focus={focus}
            ></Parallax>
            {/* <img src={image} /> }
        </div> */}
        <div >
            <div>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <div class="copy" innerHTML={description}></div>
            </div>
        </div>
    </div>

}

export default function Index() {
    const workshops = createAsync( async ()=> new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Workshops"}).parse() ) ;

    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('workshops.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>Workshops</h2>
              <p>Special Offers</p>              
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <blockquote>
                    <p>Explore Yoga In New Ways</p>
                </blockquote>
                <p class="copy">Our workshops offer the adventure of yoga in a variety of options. Whether you’re seeking play and fun or gentleness and rest, we have something for you.</p>
                <div class={styles["center"]}>
                    <a href="https://www.mindbodyonline.com/explore/locations/yoga-onyx" class="btn"> Sign Up </a>    
                </div>
            </div>
        </div>

        <div id={styles["section-3"]}>
            <Suspense fallback={<p>Loading..</p>}>
                <Switch>
                    <Match when={workshops()}>
                        {(workshops() ?? []).map(c=><YogaClass class={c} />)}
                    </Match >
                </Switch >
          </Suspense>
        </div>
      </div>
  }