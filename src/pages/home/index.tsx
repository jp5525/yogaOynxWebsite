import { addBaseUrl } from "~/util"
import Parallax from "~/components/parallax";
import "../../app.css"
import styles from "./index.module.css"
import {createSignal} from "solid-js"

export default function Index() {
    const [show, setShow] = createSignal({[styles.modal]: true, [styles.dn]: true});
    const toggleModal = () =>{
      let display = show()[styles.dn];

      setShow({
        [styles.modal]: true, 
        [styles.dn]: !display
      })
    }
    setTimeout(() => toggleModal(), 2500)
    return <div style={{height: "120vh"}}>    

        <div classList={show()}>
          <div class={styles["modal-background"]} on:click={toggleModal}></div>
          <div class={styles["modal-content"]}>
            <div class={styles["modal-header"]}>
              <h4>Black Friday Sale!</h4>
            </div>
            
            <div class={styles["modal-body"]}>
              <p class="copy"><strong>6 Month Unlimited</strong> – <span style="color: #ccaa53;">$119.00</span> billed monthly for 6 months. purchase this membership & receive ONE additional month FREE.</p>
              <p class="copy"><strong>6 Month Unlimited Prepaid</strong> – <span style="color: #ccaa53;">$700.00</span> billed one time. purchase this membership & receive ONE additional month FREE.</p>
              <p class="copy"><strong>12 Month Unlimited</strong> – <span style="color: #ccaa53;">$109.00</span> billed monthly for 12 months. purchase this membership & receive TWO additional months FREE.</p>
              <p class="copy"><strong>12 Month Unlimited Prepaid</strong> – <span style="color: #ccaa53;">$1200.00</span> billed one time & receive TWO additional months FREE.</p>
              <p class="copy"><strong>10% Off</strong> – all class packages.</p>

                <div class="center">
                  <a href="https://www.mindbodyonline.com/explore/locations/yoga-onyx" class="btn"> Claim Offer </a>    
                </div>
              
            </div>
          </div>
        </div>

        <Parallax class={styles.hero} style={{ "min-height": "85Vh"}} image={addBaseUrl('home_page_hero_banner.jpg')}>
            <div id={styles["welcome-box"]}>
              <h2>Welcome</h2>
              <p>Heal yourself through yoga. Transform your body and mind.</p>
              <div id={styles["action-items"]}>
                  <a href={addBaseUrl("classes")}>
                    Class Offerings
                  </a>

                  <a class={styles["hollow-btn"]} href={"https://www.mindbodyonline.com/explore/locations/yoga-onyx"} target="_blank">
                    View Schedule
                  </a>

              </div>
            </div>
        </Parallax>
        <div id={styles["section-2"]}>
          <div id={styles.copy}>
            <div>
              <h2>Welcome To Yoga Onyx</h2>
              <p>At Yoga Onyx, we believe in the healing power of breath, movement, and stillness. We believe in coming together as a community to practice, and have cultivated a safe space for everyBODY to be able to just be, as you are, in the current moment, whatever that looks like, free from judgment.</p>
              <p>We live in a fast-paced society. We are trained to believe that busy is a good thing, or even productive. In this go go go lifestyle that has been created over generations, Yoga Onyx leads and encourages the opposite. We teach our students how to be still. How to strengthen the mind and build an equanimity, the ability to be still, and of a sound mind even in chaotic situations. We teach that movement is medicine. That we have the power within the human body to heal ourselves with direct, intentional movement. But most of all, we believe in the power of the breath. This is the fundamental, foundation of a yoga practice. Our teachers will begin each class by cultivating a breath, a deep, diaphragmatic breath that encourages lightness, promotes detoxification, and quiets the mind, ultimately linking the mind to the body and the breath, all together.</p>
              <p>We are a warm to hot studio, heated with infrared panels. We believe in practicing in a heated space as it lowers the risk of injury, leads to deeper detoxification, promotes an increased flexibility, and increases circulation, amongst other things. We chose infrared panels because of the numerous benefits they provide. Studies show that practicing yoga, or movement, or even stillness in an infrared environment can lower cholesterol, improve cardiovascular health, strengthen the immune system, activates serotonin production which aids in those struggling with depression, to name a few…</p>
              <p>We are confident that you will find a peaceful and safe place here. A place for you to cultivate your own yoga practice or deepen it. A place for you to come as you are, turn your attention inward, quiet your mind, find stillness, and freely move your body without judgment.</p>
              <a href={addBaseUrl('teachers')}>Meet Our Teachers</a>
            </div>
          </div>

          <div id={styles.image}>
            <Parallax style={{height:"100%"}} image={addBaseUrl("home_page_section_2.jpg")}></Parallax>
          </div>
        </div>
    </div>;
  }