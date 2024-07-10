import Parallax from "~/components/parallax";
import "../../app.css"
import styles  from "./index.module.css"
import pageStyle from "../../styles/page.module.css"

import { useContext } from "solid-js";
import { AppContext } from "~/app";


export default function Index() {

    const {teachers =[]} = useContext(AppContext) as any ?? {}

    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image='teachers_hero.jpg' opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>Teachers</h2>
              <p>Meet Our Team</p>              
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <blockquote>
                    <p>We’re Looking Forward To Working With You</p>
                </blockquote>
                <p>Our teachers are passionate and gifted in their abilities to lead. We believe that movement is medicine and that we have the power within the human body to heal ourselves with direct intentional movement. We will educate you on equanimity and teach you how to be still, how to quiet your mind in any situation. Most of all, we believe in the power of breath. This is the fundamental foundation of a yoga practice.</p>
            </div>
        </div>

        <div id={styles["section-3"]}>
            {teachers.map(
                    ({name, description, image}: {name:string, description: string, image: string})=>
                <div>
                    <div class={styles.profile}>
                        <div class={styles["profile-image"]}>
                            <img src={image} />
                        </div>
                        <div class={styles["profile-description"]}>
                            <h2>{name}</h2>
                            <div innerHTML={description}></div>
                        </div>
                    </div>
                    <hr class={styles.teacher}/>
                </div>
            )}
          

        </div>
      </div>
  }