import Parallax from "~/components/parallax";
import styles  from "./index.module.css"
import { addBaseUrl } from "~/util"
import pageStyle from "../../styles/page.module.css"
import "../../app.css"


const classes = [
    {
        title: "Slow Flow",
        description: "<p>The students will begin in a restorative pose as the teacher leads students to cultivate a deep diaphragmatic breath. As the focus remains on maintaining the breath, the teacher will encourage and direct movement to the body, beautifully linking the two together allowing the body to fluidly move, soften, and open.</p>",
        image: "classes_slow_flow.jpg"
    },
    {
        title: "Slow Burn",
        description: "<p>The students will begin in a restorative pose as the teacher leads students to cultivate a deep diaphragmatic breath. As the focus remains on maintaining the breath, the teacher will encourage and direct movement to the body leading to longer holding, sometimes more challenging poses, allowing the mind and body to strengthen while softening around hard edges. Cultivating an equanimity within.</p>",
        image: "classes_slow_burn.jpg"
    },
    {
        title: "Vinyasa",
        description: "<p>This is a creative class that encourages students to move fluidly and innately linking breath to movement. </p><p>As the teacher leads students into cultivating a deep, low belly, audible breath, the class will almost always begin with a sequence of either traditional, or a modified variation of Sun Salutations, warming up the body and linking breath to movement. A second and third sequence is led by the teacher while encouraging and creating space for the student to freely move his or her own body in its own innate rhythm. Students will end in restorative poses and possibly an inversion that the student holds within his or her practice. This is a faster pace class where the movements become rhythmic, like a dance.</p>",
        image: "classes_vinyasa.jpg"
    },
    {
        title: "Yin",
        description: "<p>This is a slower, more restorative class.</p><p>Students begin in a restorative pose while the teacher leads them to focus on the breath and quiet the mind.</p><p>The entire class involves restorative yoga poses, primarily seated or laying down, where we will spend anywhere from 2-7 minutes in each pose. The teacher will encourage the students to maintain that deeper, full belly breath, while letting go, and softening the body, allowing the student to breathe deeper into the pose, and promoting a deeper stretch. This allows the student to not only soften the muscles, but begins to retrain the connective tissue as well, changing the dynamics of the body.</p>",
        image: "classes_yin.jpg"
    },
    {
        title: "Vin/Yin",
        description: "<p>Students will begin in a restorative pose as the teacher leads students to cultivate a deep, diaphragmatic breath. As the breath is maintained, the teacher will add movement to the body. Students will move through a sequence or multiple sequences of fluid movements, building the breath and creating heat within in the body.</p><p>Once the body is warm, students will come down by moving into a yin practice. The poses are restorative and slow. Each pose is held for a longer duration of 2-7 minutes. This class offers the perfect blend of movement and stillness.</p>",
        image: "classes_vin_yin.jpg"
    },
    {
        title: "Yin + Sound Healing",
        description: "<p>Students will begin in a restorative pose as the teacher leads students to cultivate a deep, diaphragmatic breath. As the breath is maintained, the teacher will slowly incorporate gentle movements to the body. The first half of class is a traditional yin class where poses are restorative, gentle, and held for two to seven minutes… Once the physical body has opened, the second half of class is to nourish the energetic mind, body and soul through the healing vibrations of crystal sound bowls.</p>",
        image: "classes_yin_sound_healing.jpg"
    },
    {
        title: "Ashtanga",
        description: "<p>This short form Ashtanga class is fully guided and structured. The teacher will lead students through a specific series of traditional standing and seated postures and poses. Ashtanga is the foundation of all other yoga classes offered here and will help you deepen your practice with options to explore each asana.</p><p>This practice is suitable for beginners and seasoned yogi and everybody in between.</p>",
        image: "home_page_hero_banner.jpg"
    }
]

const YogaClass = (props: { class:{title: string, description: string, image:string}})=>{
    const {title, description, image} = props.class;

    return <div class={styles.class}>
        <div class={styles["class-image"]}>
            <img src={addBaseUrl(image)} />
        </div>
        <div class={styles["class-descripiton"]}>
            <div>
                <h2>{title}</h2>
                <div class="copy" innerHTML={description}></div>
            </div>
        </div>
    </div>

}

export default function Index() {
    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('classes_hero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>Classes</h2>
              <p>At Yoga Oynx</p>              
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <blockquote>
                    <p>Wide Range Of Classes Available</p>
                </blockquote>
                <p class="copy">Calm your mind. Center your body and mind. Stretch the possibilities. Everyone is welcome—whether you’ve been doing yoga for years, or are brand new to the discipline—we have something for everyone!</p>
            </div>
        </div>

        <div id={styles["section-3"]}>
          {classes.map(c=><YogaClass class={c} />)}

        </div>
      </div>
  }