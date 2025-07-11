import { addBaseUrl } from "~/util"
import Parallax from "~/components/parallax";
import "../../app.css"
import styles from "./index.module.css"
import { Title, MetaProvider } from "@solidjs/meta";


export default function Index() {
    
    return <div style={{height: "120vh"}}>    

        
        <MetaProvider>
          <Title>Yoga Onyx</Title>
        </MetaProvider>
        <Parallax class={styles.hero} style={{ "min-height": "85Vh"}} image={addBaseUrl('home_page_hero_banner.jpg')}>
            <div id={styles["welcome-box"]}>
              <h2>Welcome</h2>
              <p>A sacred space for movement and stillness where body and breath align.</p>
              <div id={styles["action-items"]}>
                  <a  href={addBaseUrl("classes")}>
                    Class Offerings
                  </a>

                  <a  href={"https://www.mindbodyonline.com/explore/locations/yoga-onyx"} target="_blank">
                    View Schedule
                  </a>
              </div>
            </div>
        </Parallax>
        <div id={styles["section-2"]}>
          <div id={styles.copy}>
            <div>
              <p>At Yoga Onyx, we believe in the healing power of breath, movement, and stillness. Located in Orion Michiga, we are a flow-on-your-own studio — meaning that after guided instruction, students are encouraged to move at their own pace, in rhythm with their breath, adapting and modifying each pose to meet their personal needs. This approach fosters autonomy, self-awareness, and a deeper connection to your body and practice. We’ve created a space where every body is welcome — to show up as you are, free from judgment, and fully supported.</p>
              <p>In a world that glorifies busy, we teach the opposite. We guide students toward stillness, mental clarity, and inner strength — the ability to remain grounded even in chaos. We believe movement is medicine, and that the human body holds an innate ability to heal through intentional, mindful motion. At the heart of it all is the breath. Each class begins with deep, diaphragmatic breathing to promote lightness, detoxification, and calm — aligning body, mind, and breath as one.</p>
              <p>Our studio is warm to hot, heated with therapeutic infrared panels. Practicing in heat helps reduce injury risk, increase circulation, enhance flexibility, and support detoxification. Infrared technology offers additional benefits, such as improved cardiovascular health, strengthened immunity, lowered cholesterol, and increased serotonin production — which can support those managing depression.</p>
              <p>At Yoga Onyx, you’ll find a peaceful and empowering space to cultivate or deepen your practice. A place to move freely, turn inward, and simply be — exactly as you are.</p>
              <a href={addBaseUrl('teachers')} class="btn">Meet Our Teachers</a>
            </div>
          </div>

          
        </div>
    </div>;
  }