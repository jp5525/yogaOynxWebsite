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
                <h2 class={styles.yellow}>Grand Haven</h2>
                <h3>OCT 3 - OCT 6</h3>
                <a href={`#${styles["section-7"]}`} class={styles.btn}> Reserve </a>
            </div>
        </div>

        <div id={styles["section-3"]}>
            <h2 classList={{[styles.yellow]: true, [styles["center-text"]]: true}}>Hosts</h2>

            <div class={styles.center}>
                <Host image="samantha.jpg" name="Samantha Piro" description="Samantha is a licensed professional counselor and a 500 hour RYT. She is passionate about combining the healing modalities of talk therapy and movement. Samantha loves to find the balance of stillness and play in nature." />
                <Host image="kelly.jfif" name="Kelly Cvetovski" description="Kelly is a physical therapist and 500 hour RYT. She loves traveling and incorporating yoga into travels, whether that is taking classes around the state of Michigan or participating and teaching in international retreats." />
                <Host image="shelby.jpg" name="Shelby Spahar" description="Shelby is studying hospitality management at Cornell University with plans to open up her own inn upon graduation. Shelby has been in the service industry for the last 10 years, traveling throughout the world, learning about food across cultures." />
            </div>

        </div>

        <div id={styles["section-4"]} >
            <Parallax style={{ "min-height": "80Vh"}} opacity={0.60} image={addBaseUrl('Mainplace.webp')}>
                <div style={{ "min-height": "80Vh"}} classList={{[styles.center]: true, [styles["center-text"]]: true}}>
                    <div classList={{[styles.content]: true, [styles.center]: true}}>
                        <h2>Accommodations</h2>
                        <p>We will be staying in a beautiful 8 bed, 3.5 bath cabin. Nestled between Lake Michigan and Ottawa Sands Lake. This cabin has wonderful view of the water and will be the perfect place to get away  for the weekend.</p>

                    </div>

                </div>
            </Parallax>

        </div>

         <div id={styles["section-5"]} classList={{[styles.center]: true, [styles["space-between"]]: true}}>
            <div class={styles.left}>
                <Parallax class={styles["scale-img"]}  fixed={false} image={addBaseUrl('grandHaven.jpg')} ></ Parallax>
            </div>
            <div >
                <div>
                    <h2 class={styles.yellow}>Schedule</h2>
                    <Accordion collapsible>
                        <Accordion.Item value="0" class={styles["accordion-item"]}>
                        <Accordion.Trigger>
                            <Accordion.Header>Thursday</Accordion.Header>
                            <div class={styles.icon}><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
                        </Accordion.Trigger>
                            
                            <Accordion.Content>
                                <ul class={styles["normal-ul"]}>
                                    <li>4-6pm check in</li>
                                    <li>7pm meditation & intention setting</li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item value="1" class={styles["accordion-item"]}>
                            <Accordion.Trigger>
                                <Accordion.Header>Friday & Saturday</Accordion.Header>
                                <div class={styles.icon}><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
                            </Accordion.Trigger>
                            <Accordion.Content>
                                <ul class={styles["normal-ul"]}>
                                    <li>8am coffee & light refreshments</li>
                                    <li>9am vinyasa yoga</li>
                                    <li>1030am brunch</li>
                                    <li>12pm scheduled activity</li>
                                    <li>3pm free time</li>
                                    <li>5pm dinner</li>
                                    <li>630pm yin yoga</li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item value="2" class={styles["accordion-item"]}>
                            <Accordion.Trigger>
                                <Accordion.Header>Sunday</Accordion.Header>
                                <div class={styles.icon}><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
                            </Accordion.Trigger>
                            <Accordion.Content>
                                <ul class={styles["normal-ul"]}>
                                    <li>9am vinyasa yoga</li>
                                    <li>1030 closing meditation</li>
                                    <li>1130am farewell brunch</li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>

        <div id={styles["section-6"]} classList={{[styles.center]: true, [styles["space-between"]]: true}}>
            <div class={styles.left}>
                <div>
                    <h2 class={styles.yellow}>Included In Your Stay</h2>
                    <ul class={styles["normal-ul"]}>
                        <li>Accommodations (Thursday-Sunday)</li>
                        <li>Meals Friday - Sunday</li>
                        <li>Yoga twice a day Friday & Saturday, once on Sunday</li>
                        <li>2 Guided Meditations</li>
                        <li>Friday hike at Rosey Mound</li>
                        <li>Saturday cooking class with Shelby Spahar</li>
                        <li>One hour massage</li>
                        <li>30-minute counseling session with Samantha Piro, LPC</li>
                    </ul>

                </div>
            </div>
            <div class={styles.right}>
                <Parallax class={styles["scale-img"]} fixed={false} image={addBaseUrl('sunset.webp')} ></ Parallax>
            </div>
        </div>

        <div id={styles["section-7"]}>
            <Parallax style={{ "min-height": "85Vh"}} image={addBaseUrl('outsideGrandHaven.webp')}>
                <div  style={{ "min-height": "85Vh"}} class={styles.content}>
                    <div class={styles["center-text"]}>
                        <h2 class={styles.yellow}>Reserve a Spot</h2>

                        <div class={styles.center}>
                            <Room image="queenbunk.webp" url={queenBunkUrl} price="$1225" name="Queen Bunk" description="A queen sized bed In a room that will be shared with 1 other person." />
                            <Room image="queenbed.webp" url={queenBedUrl} price="$1300" name="Queen Bed" description="A queen sized bed In a private room." />
                            <Room image="kingbed.webp" url={kingBedUrl}price="$2000 ($2500 if shared with a friend)" name="King Bed" description="A King sized bed In a private room " />
                        </div>

                    </div>
                </div>
            </Parallax>
        </div> 
      </div>
  }