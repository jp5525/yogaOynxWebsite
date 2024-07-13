import Parallax from "~/components/parallax";
import { addBaseUrl } from "~/util"
import styles  from "./index.module.css"
import pageStyle from "../../styles/page.module.css"
import "../../app.css"
import  PublicGoogleSheetsParser from 'public-google-sheets-parser'
import { Suspense, Switch, Match } from "solid-js";
import { createAsync } from "@solidjs/router";

const Pricing = (props:{items:{group:string, description:string}[]}) => <div class={styles.pricing}>
<div class={styles["pricing-title"]}>
    <h2 innerHTML={props.items[0]?.group}></h2>
</div>
<div class={styles["pricing-info"]}>
    {props.items.map(p=><div innerHTML={p.description}></div>)}
</div>
</div>

const groupPricing = (acc, crr)=>{
    acc[crr.group] = [...(acc[crr.group] ?? []), crr]
    return acc
}

export default function Index() {

    const pricing = createAsync( ()=> new PublicGoogleSheetsParser("1LzEJ5Bgcdu7QOVlauooDXtBUEDWPzOcf-7Br5XPiYnc",{sheetName:"Pricing"}).parse() );  
    //const newPricing: Record<"string", {group:string, description:string}[]> = (pricing() ?? []).reduce(, {})

    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('classes_hero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>Pricing</h2>
              <p>Offers, Packages, & Memberships</p>              
            </div>
        </Parallax>


        <div id={styles["section-2"]}>
            <Suspense fallback={<p>Loading..</p>}>
                <Switch>
                    <Match when={pricing()}>
                        {Object.values((pricing() ?? []).reduce(groupPricing, {})).map(group=><><Pricing items={group} /> <hr /></>)}
                    </Match>
                </Switch>
            </Suspense>
        </div>
      </div>
  }