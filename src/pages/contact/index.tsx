import Parallax from "~/components/parallax";
import "../../app.css"
import styles  from "./index.module.css"
import pageStyle from "../../styles/page.module.css"


export default function Index() {
    return <div style={{height: "120vh"}}>
        <Parallax class={pageStyle.hero} style={{"min-height": "40vh"}} image='contact_hero.jpg' opacity={0.55}>
            <div id={pageStyle["hero-box"]}>
              <h2>Contact</h2>
              <p>Get in Touch</p>              
            </div>
        </Parallax>

        <div id={pageStyle["section-2"]}>
            <div>
                <blockquote>
                    <p>We Hope To See You Soon</p>
                </blockquote>
                <p>Have a question for us? Please feel free to contact us by phone, email, or our online form. We will get in touch with you as soon as possible. Thank you!</p>
            </div>
        </div>

        <div id={styles["section-3"]}>
            <div id={styles["contact-info"]}>
                <div>
                    <h2>Contact Info</h2>
                    <div class={styles.contact}>
                        <div class={styles.icon}><span class="material-symbols-outlined">pin_drop</span></div>

                        <div class={styles.info}>
                            <h4>Address</h4>
                            <p>
                                <a href="https://goo.gl/maps/xAgtFqNRvRraTVBE9" target="_blank" rel="noopener" title="Get Directions"><strong>Yoga Onyx</strong></a>
                                <br />
                                <a class="copy" href="https://goo.gl/maps/xAgtFqNRvRraTVBE9" target="_blank" rel="noopener" title="Get Directions">3651 S Baldwin Rd.</a>
                                <br />
                                <a class="copy" href="https://goo.gl/maps/xAgtFqNRvRraTVBE9" target="_blank" rel="noopener" title="Get Directions">Orion Twp., MI 48359</a>
                            </p>
                        </div>
                    </div>

                    <div class={styles.contact}>
                        <div class={styles.icon}><span class="material-symbols-outlined">call</span></div>

                        <div class={styles.info}>
                            <h4>Phone</h4>
                            <p class="copy">(248) 977-3107</p>
                        </div>
                    </div>

                    <div class={styles.contact}>
                        <div class={styles.icon}><span class="material-symbols-outlined">mail</span></div>

                        <div class={styles.info}>
                            <h4>Email</h4>
                            <p class="copy">yogaonyx1@gmail.com</p>
                        </div>
                    </div>

                    <hr />

                    <div id={styles.social}>
                        <img src="facebook_icon.svg" />
                        <img src="instagram_icon.webp" />
                    </div>

                </div>
            </div>
            <div id={styles["contact-form"]}>
                <div>
                    <h2>Contact Form</h2>
                    <p class="copy">Prefer to contact us via form? Please fill out the form below. We will answer you as soon as possible!</p>
                    <div>
                        <form>
                            <div id={styles["form-line-1"]}>
                                <div id={styles["left"]}>
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" />
                                </div>

                                <div id={styles["right"]}>
                                    <label for="email">Email Address:</label>
                                    <input type="text" id="email" name="email" />

                                </div>

                            </div>

                            <br />

                            <div>
                                <label for="phone">Phone Number:</label> <br />
                                <input type="text" id="phone" name="phone" /> <br />

                            </div>

                            <div>
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" ></textarea>
                            </div>

                            
                            
                            <input type="submit" value="Send Message"/>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div id={styles["section-4"]}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.8990900343742!2d-83.3091752838505!3d42.72702651983887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88249530de73895b%3A0x5d086602705f5558!2sYoga%20Onyx!5e0!3m2!1sen!2sus!4v1675717402160!5m2!1sen!2sus" width="100%" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
  }