"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "../customcss/TestimonialsSection.module.css";

const TestimonialSection = ({ isMobile }: { isMobile: boolean }) => {
  const shouldReduceMotion = useReducedMotion();
  const Sam = "/images/landing/Sam.jpeg";
  const onward = "/images/landing/onward.png";
  const Henry = "/images/landing/Henry.jpg";
  const MK = "/images/landing/mk.png";
  const rose = "/images/landing/rose.svg";
  const swap = "/images/landing/Frame.svg";
  const settings = "/images/landing/setting.svg";
  const rocket = "/images/landing/rocket.svg";
  return (
    <motion.section
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
        margin: isMobile ? "0px" : "-100px",
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut",
      }}
      className={`${styles.content} ${styles.nopadding}`}
    >
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialSubHeading}>
          Supporting 500+ Ad Launches Daily
        </div>
        <div className={styles.testimonialHeading}>
          People are calling it the best invention since sliced bread
        </div>
        <div className={styles.testimonialsGrid}>
          {/* Testimonial 1 */}
          <div className={`${styles.testimonialContainer} ${styles.color1}`}>
            <blockquote className={styles.testimonialQuote}>
              &quot;Jesus, It&apos;s super fast. It&apos;s everything I wanted
              to replace my ads manager workflow&quot;
            </blockquote>

            <div className={styles.testimonialProfile}>
              <img
                src={Sam}
                alt="Samuel Appentsen"
                className={styles.profileImage}
              />
              <span className={styles.profileName}>Samuel Appentsen</span>
            </div>
            <div className={styles.companyTitle}>Co Founder, Onward Agency</div>
            <img
              src={onward}
              alt="Onward Agency"
              className={styles.companyLogo}
            />
          </div>

          {/* Testimonial 2 */}
          <div className={`${styles.testimonialContainer} ${styles.color2}`}>
            <blockquote className={styles.testimonialQuote}>
              &quot;I used to dread having to get into Ads Manager to upload
              ads. Now with Blip, it takes just two clicks and anyone on the
              team can do it themselves.&quot;
            </blockquote>

            <div className={styles.testimonialProfile}>
              <img
                src={Henry}
                alt="Person Name"
                className={styles.profileImage}
              />
              <span className={styles.profileName}>Henry Boldizsar</span>
            </div>

            <div className={styles.companyTitle}>Mobile App Founder</div>
          </div>

          <div className={`${styles.testimonialContainer} ${styles.color3}`}>
            <blockquote className={styles.testimonialQuote}>
              &quot;We manage hundreds of creatives each week across multiple
              8/9 figure brands, and Blip has cut our launch time by 90% with
              zero friction and flawless accuracy. Fast, reliable,
              essential.&quot;
            </blockquote>

            <div className={styles.testimonialProfile}>
              <img src={MK} alt="Person Name" className={styles.profileImage} />
              <span className={styles.profileName}>MK</span>
            </div>

            <div className={styles.companyTitle}>Founder, JDGMNT Digital</div>
          </div>
        </div>
      </section>

      <div className={styles.head} id="about">
        <Image src={rose} width={24} height={24} alt="rose" />
        Escape from Button Clicking Hell
      </div>
      <div className={styles.groupText}>
        <div className={styles.title1}>
          The fastest way to manage multiple ad accounts
        </div>
        <div className={styles.subtitle1}>
          End context-switching whiplash. No more selecting the same settings
          over and over, copy-pasting text dozens of times, or sluggish UI.
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              src={swap}
              alt="swap"
              width={30}
              height={30}
              className={styles.myImg}
            />
            <span>Easily Swap Ad Accounts</span>
          </div>
        </div>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              src={settings}
              alt="settings"
              width={30}
              height={30}
              className={styles.myImg}
            />
            <span>Auto-Populate Settings</span>
          </div>
        </div>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              src={rocket}
              alt="rocket"
              width={30}
              height={30}
              className={styles.rocketIcon}
            />
            <span>Fast launch all creatives</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
