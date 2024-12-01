import Parallax from "~/components/parallax";
import { addBaseUrl } from "~/util"
import styles  from "./index.module.css"
import pageStyle from "../../styles/page.module.css"
import "../../app.css"
import { Accordion } from "@kobalte/core/accordion"

type HostT = {
    name: string, 
    image: string, 
    description: string
}

type RoomT = {
    name: string, 
    image: string, 
    description: string,
    price: string,
    url: string
}

const Host = ({name, image, description}: HostT) =>
<div classList={{[styles.host]: true, [styles["center-text"]]: true}} >
    <Parallax 
        class={styles["host-img"]} 
        image={addBaseUrl(image)} 
        fixed={false}
        opacity={1}
    ></Parallax>
    <h3>{name}</h3>
    <p>{description}</p>
</div>

const queenBunkUrl = "https://buy.stripe.com/00g4i8bbwgUidCU288"
const kingBedUrl = "https://buy.stripe.com/28o5mcenI47w42k4gi"
const queenBedUrl = "https://buy.stripe.com/6oE6qg1AW6fEbuMeUV"

const Room = ({name, image, description, price, url}: RoomT) =>
<div classList={{[styles.room]: true, [styles["center-text"]]: true}} >
    <img src={addBaseUrl(image)} />
    <h3>{name}</h3>
    <h5>{price}</h5>
    <p>{description}</p>

    <a href={url} class={styles.btn}> Reserve </a>
</div>

export default function Index() {

    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('retreats_hero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>RETREATS</h2>
              <p>SERENE GETAWAYS</p>              
            </div>
        </Parallax>


        <div id={pageStyle["section-2"]}>
            <div class={styles["center-text"]}>
                <h2 class={styles.yellow}>IN-HOUSE RETREAT</h2>
                <h3>FEBRUARY 2ND, 2025</h3>
                <a href={`#${styles["section-7"]}`} class={styles.btn}> Reserve </a>
            </div>
        </div>

        <div id={styles["section-3"]}>
            <div classList={{ [styles.center]: true, [styles.col]: true}}>
                <h2 class={styles.yellow}>FEBRUARY 2ND. 8AM - 4:30PM</h2>
                <hr />
                <p>Taking place in our peaceful studio space, our day-long local yoga staycation offers an immersive experience for relaxation and rejuvenation. The day begins with a grounding yoga session with gentle flows to awaken the body and calm the mind. Afterward, a serene meditation session helps participants deepen their mindfulness practice and cultivate inner peace. Throughout the day, guests enjoy nourishing meals offering both meat or plant-based dishes that support both body and soul. Midday, indulge in a soothing massage to release tension and enhance relaxation. As the retreat progresses, there are opportunities to connect with like-minded individuals in a tranquil atmosphere, allowing you to recharge and rediscover balance. Whether you're a seasoned yogi or a first-timer, the retreat provides a rejuvenating experience, leaving you feeling refreshed, centered, and renewed. Give yourself some self care this winter. </p>
            </div>

            <div class={styles.even}>
                <div class={styles.left}>
                    <h3 class={styles.yellow}>schedule:</h3>
                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>8am</div>
                        <div class={styles.desc}>Tea & Intention Setting</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>9am</div>
                        <div class={styles.desc}>Vinyasa Yoga</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>10:30am</div>
                        <div class={styles.desc}>Yin Yoga</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>12pm</div>
                        <div class={styles.desc}>Lunch</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>1pm</div>
                        <div class={styles.desc}>Massage & Vision Board Creation</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>3pm</div>
                        <div class={styles.desc}>Meditation</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>3:30</div>
                        <div class={styles.desc}>Journaling</div>
                    </div>

                    <hr />
                    <div class={styles.schedule}>
                        <div class={styles.time}>4pm</div>
                        <div class={styles.desc}>Closing Remarks</div>
                    </div>
                </div>
                <div>
                    <h3 class={styles.yellow}>Hosted by Kelly Cvetovski</h3>
                    <div class={styles.kelly}>
                        <div>
                            <img src="./kelly.jpeg" />
                        </div>
                        <div>
                            <p>Kelly is a physical therapist and 500 hour RYT. She loves traveling and incorporating yoga into travels, whether that is taking classes around the state of Michigan or participating and teaching in international retreats.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        
      </div>
  }