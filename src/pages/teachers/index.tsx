import Parallax from "~/components/parallax";
import { addBaseUrl } from "~/util";
import "../../app.css"
import styles  from "./index.module.css"
import pageStyle from "../../styles/page.module.css"
import  PublicGoogleSheetsParser from 'public-google-sheets-parser'
import { createAsync } from "@solidjs/router";
import { Suspense, Switch, Match } from "solid-js";
import { Title, MetaProvider } from "@solidjs/meta";

export default function Index() {

    const teachers = createAsync( async ()=> new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Teachers"}).parse() );
    
    return <div style={{height: "120vh"}}>
        <MetaProvider>
          <Title>Teachers | Yoga Onyx</Title>
        </MetaProvider>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('teachers_hero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2 class="fn-cormorant">Teachers</h2>
              
              <div class="center" id={pageStyle["mt-16"]}>
                <a href="/schedule" class="btn"> See Schedule </a>    
              </div>                    
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <p>Our teachers are passionate and gifted in their abilities to lead. We believe that movement is medicine and that we have the power within the human body to heal ourselves with direct intentional movement. We will educate you on equanimity and teach you how to be still, how to quiet your mind in any situation. Most of all, we believe in the power of breath. This is the fundamental foundation of a yoga practice.</p>
            </div>
        </div>

        <div id={styles["section-3"]}>
            <Suspense fallback={<p>Loading..</p>}>
            <Switch>
                <Match when={teachers()}>
                    {(teachers() ?? []).map(
                            ({name, description, image}: {name:string, description: string, image: string})=>
                        <div>
                            <div class={styles.profile}>
                                <div class={styles["profile-image"]}>
                                    <img src={image} />
                                </div>
                                <div class={styles["profile-description"]}>
                                    <h2 class="fn-cormorant">{name}</h2>
                                    <div innerHTML={description}></div>
                                </div>
                            </div>
                            <hr class={styles.teacher}/>
                        </div>
                    )}
                </Match >
            </Switch >
          </Suspense>

        </div>
      </div>
  }