import Parallax from "~/components/parallax";
import styles  from "./index.module.css"

import pageStyle from "../../styles/page.module.css"
import "../../app.css"

import { useContext } from "solid-js";
import { AppContext } from "~/app";

const Pricing = (props:{items:{group:string, description:string}[]}) => <div class={styles.pricing}>
<div class={styles["pricing-title"]}>
    <h2 innerHTML={props.items[0]?.group}></h2>
</div>
<div class={styles["pricing-info"]}>
    {props.items.map(p=><div innerHTML={p.description}></div>)}
</div>
</div>

export default function Index() {

    const {pricing =[]} = useContext(AppContext)  ?? {};
    const newPricing: Record<"string", {group:string, description:string}[]> = pricing.reduce((acc, crr)=>{
        acc[crr.group] = [...(acc[crr.group] ?? []), crr]
        return acc
    }, {})

    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image='classes_hero.jpg' opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>Pricing</h2>
              <p>Offers, Packages, & Memberships</p>              
            </div>
        </Parallax>


        <div id={styles["section-2"]}>

            {Object.values(newPricing).map(group=><><Pricing items={group} /> <hr /></>)}

        </div>
      </div>
  }