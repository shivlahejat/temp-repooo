"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../customcss/HeroSection.module.css";

const MainHeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const shouldReduceMotion = useReducedMotion();
  const roket = "/images/landing/uploadrocket2.webp";
  const star = "/images/landing/star.webp";
  const right = "/images/landing/check.svg";
  const meta = "/images/landing/metanew.webp";
  const videoRef = useRef<HTMLVideoElement>(null);
  const MobileVideoRef = useRef<HTMLVideoElement>(null);
  const sampleVideo = "/video/Demo.mp4";

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const enableControls = () => {
    if (MobileVideoRef.current) {
      MobileVideoRef.current.setAttribute("controls", "true");
    }
  };

  return (
    <>
      {!isMobile ? (
        <motion.section
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }} // Change from whileInView to animate
          transition={{
            duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
            ease: "easeOut",
            delay: 0.2, // Optional delay for better effect
          }}
          className={styles.textcontainer}
        >
          <div className={styles.heroText}>
            The simplest,{" "}
            <span
              className={styles.inlineIcon}
              style={{ display: "inline-block", overflow: "visible" }}
            >
              <motion.img
                src={roket}
                alt="rocket"
                className={styles.herorocket}
                style={{
                  transformOrigin: "center center !important",
                  verticalAlign: "top",
                }}
                initial={{
                  y: 50,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 25,
                  delay: 0.5,
                }}
              />
              quickest <span style={{ marginRight: 5 }} />
            </span>
            <br />
            bulk ad uploader
            <span
              className={styles.inlineIcon}
              style={{ display: "inline-block", overflow: "visible" }}
            >
              <motion.img
                src={star}
                alt="sparkles"
                className={styles.sparkle}
                style={{ transformOrigin: "center" }}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1.3 }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 25,
                  delay: 0.8,
                }}
              />
            </span>
            for Meta.
          </div>
          <div className={styles.subText}>
            <div className={styles.griditem}>
              <Image src={right} alt="right" width={21} height={21} />
              <div className={styles.text}> Launch 100s of ads together</div>
            </div>
            <div className={styles.griditem}>
              <Image src={right} alt="right" width={21} height={21} />
              <div className={styles.text}> Unlimited Team Seats</div>
            </div>
            <div className={styles.griditem}>
              <Image src={right} alt="right" width={21} height={21} />
              <div className={styles.text}>
                {" "}
                Save your settings and launch an ad in seconds
              </div>
            </div>
          </div>
          <div className={styles.buttoncontainer}>
            <a href="https://app.withblip.com/signup" className={styles.button}>
              Sign Up
            </a>
          </div>
          <div className={styles.buttonLabel}>
            NO CC Required. Free For 7 Days.
          </div>
          <div className={styles.metacontainer}>
            <Image
              src={meta}
              alt="meta"
              width={20}
              height={20}
              className={styles.metaimage}
            />
            <div className={styles.metaText}>Meta Verified Partner</div>
          </div>
          <div className={styles.imageWrapper1}>
            <video
              ref={videoRef}
              className={`${styles.image} ${styles.aspectVideo}`}
              width={1200}
              height={800}
              controls
              muted
              loop
            >
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.section>
      ) : (
        <motion.section
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
            margin: isMobile ? "0px" : "-100px",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
            ease: "easeOut",
          }}
          className={styles.textcontainerstart}
        >
          <div className={styles.heroTextStart}>
            The simplest,
            <span className={styles.inlineIconStart}>
              <motion.img
                src={roket}
                alt="rocket"
                className={styles.herorocketStart}
                style={{ transformOrigin: "center" }}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1.7 }}
                transition={{
                  type: "spring",
                  stiffness: 600,
                  damping: 25,
                  delay: 0.5,
                }}
              />
              <span style={{ marginRight: "5px" }} />
              <br />
              quickest bulk ad
            </span>
            <br />
            <span className={styles.inlineIconStart}>
              uploader
              <motion.img
                src={star}
                alt="sparkles"
                className={styles.sparkleStart}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1.3 }}
                transition={{
                  type: "spring",
                  stiffness: 600,
                  damping: 25,
                  delay: 0.7,
                }}
              />
              for Meta.
            </span>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.videoContainer}>
              <video
                className={`${styles.image}`}
                ref={MobileVideoRef}
                muted
                autoPlay
                loop
                playsInline
                onClick={enableControls} // or onTouchStart for mobile
              >
                <source src="/video/Demo.mp4" type="video/mp4" />
                Your browser does not support the video tag
              </video>
            </div>
          </div>
          <div className={styles.buttonScontainer}>
            <a
              href="https://app.withblip.com/signup"
              className={styles.buttoncontainer}
            >
              <div className={styles.button1Start}>Start Free Trial</div>
            </a>
            <div className={styles.buttonLabelMobile}>
              NO CC Required. Free For 7 Days.
            </div>
            <div className={styles.metacontainerStart}>
              <Image
                src={meta}
                alt="meta"
                width={10}
                height={10}
                className={styles.metaimageStart}
              />
              <div className={styles.metaTextStart}>Meta Verified Partner</div>
            </div>
          </div>

          <div className={styles.subText}>
            <div className={styles.griditem}>
              <Image src={right} alt="right" width={21} height={21} />
              <div className={styles.text}> Launch 100s of ads together</div>
            </div>
            <div className={styles.griditem}>
              <Image src={right} alt="right" width={21} height={21} />
              <div className={styles.text}> Unlimited Team Seats</div>
            </div>
            <div className={styles.griditem}>
              <Image src={right} alt="right" width={21} height={21} />
              <div className={styles.text}>
                {" "}
                Save your settings and launch an ad in seconds
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* below is the desktop */}
    </>
  );
};

export default MainHeroSection;
