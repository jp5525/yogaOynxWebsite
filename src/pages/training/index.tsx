import Parallax from "~/components/parallax";
import { addBaseUrl } from "~/util"
import styles  from "./index.module.css"
import pageStyle from "../../styles/page.module.css"
import "../../app.css"
import { Collapsible } from "@kobalte/core/collapsible";
;import { Title, MetaProvider } from "@solidjs/meta";

const plusIcon =  ()=> <div class={styles["icon-toggle"]}>

    <svg class={styles["icon-primary"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>

    <svg class={styles["icon-secondary"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
    </svg>

</div>


export default function Index() {

    return <div>
        <MetaProvider>
            <Title>Training | Yoga Onyx</Title>
        </MetaProvider>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image={addBaseUrl('trainingHero.jpg')} opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2 class="fn-cormorant">TRAININGS</h2>
              <p>DEEPEN YOUR PRACTICE</p>              
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <div class={styles["center-text"]}>
                    <h2>Embodied Pratice</h2>

                </div>
                <p class="copy">A deeper exploration of yoga through movement, philosophy, and the practice of everyday life.</p>


                <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>
                <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>
                <div class={styles["row"]}>
                    <div class={`center ${styles["healcode-container"]}`} id={styles["mt-16"]}>
                        <healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="111984" data-mb-site-id="5730222" data-service-id="100207" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Weekend Track" />
                    </div> 
                    <div class={`center ${styles["healcode-container"]}`} id={styles["mt-16"]}>
                        <healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="111984" data-mb-site-id="5730222" data-service-id="100205" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Weekday Track" />
                    </div>
                </div>
                    
            </div>
        </div>

        <div id={styles["section-3"]}>
            <h2 class="fn-cormorant">All you need to know about this 30 - hour training.</h2>
            <Collapsible class={styles["collapsible"]}>
                <Collapsible.Trigger class={styles["collapsible__trigger"]}>
                    What is this training?
                   { plusIcon }
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <p> This 30-hour training is a deeper exploration of yoga, bridging the gap between the physical practice we cultivate in the studio and the lives we live beyond the mat.</p>
                    <p>Rooted in the tradition of Ashtanga yoga, we'll explore foundational movement, history, philosophy, and the eight limbs through the lens of mental health. Together, we'll examine how these teachings can support the way we respond to stress, navigate relationships, and cultivate greater awareness in everyday life.</p>
                    <p>Throughout the training, we'll return to a central question: How do we live yoga off the mat? We'll explore what it means to stay connected to the Self in a world full of Other, allowing the practice to become something we embody—not just something we do.</p>
                </Collapsible.Content>

            </Collapsible>

            <Collapsible class={styles["collapsible"]}>
                <Collapsible.Trigger class={styles["collapsible__trigger"]}>
                    Who is this for?
                   { plusIcon }
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <p>You love yoga and want to deepen your practice beyond weekly classes.</p>

                    <p>✓ You're curious about the philosophy and history behind yoga.</p>

                   <p> ✓ You want to better understand the "why" behind the practice.</p>

                    <p>✓ You're interested in exploring the connection between yoga and mental health.</p>

                    <p>✓ You want practical tools to bring yoga into your relationships and everyday life.</p>

                    <p>✓ You're looking for a thoughtful, supportive learning environment.</p>

                    <p>✓ You're a yoga teacher looking to reconnect with the roots of the practice—or a dedicated student who simply wants to learn more.</p>

                    <p>✓ You believe yoga is more than movement and want to explore what that really means.</p>

                    <p>No teaching experience is required.</p>
                </Collapsible.Content>
            </Collapsible>

            <Collapsible class={styles["collapsible"]}>
                <Collapsible.Trigger class={styles["collapsible__trigger"]}>
                    What will we explore?
                   { plusIcon }
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <b>Practice</b><br />
                    Foundational Ashtanga yoga<br />
                    Breath and bandhas<br />
                    Sun Salutations<br />
                    Standing postures<br />
                    Seated postures<br />
                    Safe alignment and modifications<br />
                    Building a sustainable personal practice<br />
                    <br />
                    <b>Philosophy</b><br />
                    The history of yoga<br />
                    The Eight Limbs<br />
                    Traditional Ashtanga philosophy<br />
                    Yoga beyond the poses<br />
                    Applying ancient teachings to modern life<br />
                    <br />
                    <b>Self & Other</b> <br />
                    Mental health through the lens of yoga<br />
                    The relationship between Self and Other<br />
                    Stress, emotions, and the nervous system<br />
                    Awareness and relationship patterns<br />
                    Living yoga off the mat<br />
                    Journaling, discussion, and integration <br /> <br />
                </Collapsible.Content>
            </Collapsible>

            <Collapsible class={styles["collapsible"]}>
                <Collapsible.Trigger class={styles["collapsible__trigger"]}>
                     When is this training?
                   { plusIcon }
                </Collapsible.Trigger>
                <Collapsible.Content>
                    Choose the schedule that best fits your life. Both tracks cover the same 30-hour curriculum. < br />
                    < br />
                    <b>Weekday Track</b> < br />
                    September 8 - November 17 < br />
                    No training on September 29. <br />
                    Tuesdays < br />
                    10:30 AM–2:00 PM < br />
                    < br />
                    <b>Weekend Intensive Track</b> < br />
                    September 19–20 < br />
                    12:00 PM–5:00 PM < br />
                    < br />
                    October 10–11 < br />
                    12:00 PM–5:00 PM < br />
                    < br />
                    November 14–15 < br />
                    12:00 PM–5:00 PM < br />
                    < br />

                </Collapsible.Content>
            </Collapsible>

            <Collapsible class={styles["collapsible"]}>
                <Collapsible.Trigger class={styles["collapsible__trigger"]}>
                    How much is tuition?
                   { plusIcon }
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <b>Early Bird Tuition $425</b> Register by <b>July 31</b> < br />
                    < br />
                    <b>Regular Tuition $500</b> Beginning <b>August 1 </b> < br />
                    < br />
                    Payment plans are available. < br />
                </Collapsible.Content>
            </Collapsible>

            <Collapsible class={styles["collapsible"]}>
                <Collapsible.Trigger class={styles["collapsible__trigger__last"]}>
                    FAQ
                   { plusIcon }
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <p>
                        <b>What materials/books do I need?</b> <br />
                        All books are optional. I am not requiring any specific readings except for one book report. I will provide you a list of the books from you to choose from to do your book report on. This list will be provided upon registration.
                        I do highly recommend purchasing The Ashtanga Manual by David Swenson.
                    </p>

                    <p>
                        <b>What happens if I can't make a session?</b> <br />
                        Please do your best to commit to making it to every session. I am unable to commit to extra one on one time to get you caught up, but I will be able to provide you the material and I will do my best to go over it with you.
                        If you already know you can't make a session, please let me know ahead of time.
                    </p>

                    <p>
                        <b>Is Ashtanga covered at 10:30am on Tuesdays?</b> <br />
                        Yes! If you have a class package you do not need to use one of your passes. Ashtanga on Tuesdays is included in the training.
                    </p>
                </Collapsible.Content>
            </Collapsible>

            <div class={styles["row"]}>
                    <div class={`center ${styles["healcode-container"]}`} id={styles["mt-16"]}>
                        <healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="111984" data-mb-site-id="5730222" data-service-id="100207" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Weekend Track" />
                    </div> 
                    <div class={`center ${styles["healcode-container"]}`} id={styles["mt-16"]}>
                        <healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="111984" data-mb-site-id="5730222" data-service-id="100205" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Weekday Track" />
                    </div>
                </div>
        </div>

        <div id={styles["section-4"]}>
            <h2 class="fn-cormorant">Meet the Teacher</h2>
            <div id={styles["main"]}>
                <div class={styles["left"]}>
                    <div >
                        <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/7pcEY3YER4yOiEwubAVZOQ?viewBox=1746%2C1746&ownerId=A3KMUJEZLMDKC3&groupShareToken=4JK-iUmOTlO48AYaghjJaQ.-mcDxKDE-g2j9UZvGNYuft" />
                    </div>
                </div>
                <div class={styles["right"]}>
                    <p>I'm Samantha, owner of Yoga Onyx, an RYT-500 yoga teacher, and a Licensed Professional Counselor.</p>

                    <p>I became a yoga teacher because I experienced the healing potential of the practice and wanted to bring together two worlds that have shaped my life: yoga and mental health. That vision is ultimately what led me to purchase Yoga Onyx—a space where I could cultivate a community that sees yoga as more than exercise and supports students in carrying the practice beyond the walls of the studio.</p>

                    <p>This training is an opportunity to bring that vision to life. I created it to bridge the gap between the physical practice of yoga and the lived experience of being human. Drawing from the tradition of Ashtanga yoga alongside my background in mental health, my hope is to create a space where movement, philosophy, and self-inquiry come together in a way that's practical, thoughtful, and deeply applicable to everyday life.</p>

                    <p>My hope is that you'll leave not only with a deeper understanding of yoga, but with greater confidence in how to live the practice—staying connected to your Self in a world full of Other.</p>
                </div>
            </div>
        </div>
      </div>
  }