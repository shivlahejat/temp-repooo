"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Intercom from "@intercom/messenger-js-sdk";
import styles from "../../../src/app/Landing.module.css";
import Image from "next/image";
import { useReducedMotion, motion } from "framer-motion";
import { faqs, features } from "@/constants/data";

export default function LandingPage() {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const MobileVideoRef = useRef<HTMLVideoElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const rose = "/images/landing/rose.svg";
  const swap = "/images/landing/Frame.svg";
  const settings = "/images/landing/setting.svg";
  const rocket = "/images/landing/rocket.svg";
  const roket = "/images/landing/uploadrocket2.webp";
  const star = "/images/landing/star.webp";
  const right = "/images/landing/check.svg";
  const meta = "/images/landing/metanew.webp";
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const sampleVideo = "/video/Demo.mp4";
  const cardrocket = "/images/landing/tranparentRocket.svg";
  const uprocket = "/images/landing/uploadrocket2.webp";
  const thumb1 = "/images/landing/thumb1.webp";
  const thumb2 = "/images/landing/thumb2.webp";
  const thumb3 = "/images/landing/thumb3.webp";
  const cardsettings = "/images/landing/transparentSetting.svg";
  const copy = "/images/landing/transparentCopy.svg";
  const dwimg = "/images/landing/download.svg";
  const copimg = "/images/landing/copy.svg";
  const image = "/images/landing/pic.svg";
  const driveIcon = "/images/landing/googledrive.webp";
  const download = "/images/landing/transparentDoenload.svg";
  const light = "/images/landing/light.webp";
  const auto = "/images/landing/auto.svg";
  const autoImg = "/images/landing/dynamicauto1.webp";
  const cardmobile3 = "/images/landing/mobilecard3.webp";
  const carousel = "/images/landing/carousel.svg";
  const carouselImg = "/images/landing/carousel-img.webp";
  const cardmobile1 = "/images/landing/mobilecard1.webp";
  const shop = "/images/landing/shop.svg";
  const shopImg = "/images/landing/shop-img.webp";
  const cardmobile2 = "/images/landing/mobileCard2.webp";
  const dynamic = "/images/landing/dynamic.svg";
  const dynamicImg = "/images/landing/dynamic-img.webp";
  const cardmobile4 = "/images/landing/mobilecard4.webp";
  const iconOrange = "/images/landing/iconOrange.svg";
  const check = "/images/landing/check-circle.svg";
  const earth = "/images/landing/earth.webp";
  const Sam = "/images/landing/Sam.jpeg";
  const Henry = "/images/landing/Henry.jpg";
  const MK = "/images/landing/mk.png";
  const Meteor = "/images/landing/Meteor.webp";
  const onward = "/images/landing/onward.png";
  const cards = "/images/landing/cartgroup.webp";
  const mobilecards = "/images/landing/cartmobile.webp";
  const agency = "/images/landing/agency.webp";
  const brand = "/images/landing/shop.webp";
  const bulb = "/images/landing/bulb.webp";
  const plusicon = "/images/landing/plus.svg";

  useEffect(() => {
    const timeout = setTimeout(() => {
      Intercom({ app_id: "zcgmjurf" });
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreen = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      checkScreen();
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (landingRef.current) {
        setIsScrolled(landingRef.current.scrollTop > 10);
      }
    };

    landingRef.current?.addEventListener("scroll", scrollHandler);
    return () =>
      landingRef.current?.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        // Browser blocked autoplay, video will show with controls
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const enableControls = () => {
    if (MobileVideoRef.current) {
      MobileVideoRef.current.setAttribute("controls", "true");
    }
  };


  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;
      if (
        menuOpen &&
        target &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    },
    []
  );

  return (
    <div className={styles.landing} ref={landingRef}>
      <div className={styles.container}>
        <div>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/landing/logo.webp"
              alt="Logo"
              width={48}
              height={48}
              className={styles.blipLogo}
              priority
            />
            <span className={styles.brandText}>Blip</span>
          </div>
          <header className={styles.header}>
            <div className={styles.brand}>
              <Image
                src="/images/landing/logo.webp"
                alt="Logo"
                width={32}
                height={32}
                className={styles.blipLogo}
                priority
              />
              <span className={styles.brandText}>Blip</span>
            </div>
            <button
              className={styles.menuBtn}
              ref={menuBtnRef}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className={styles.menuBtnText}>Menu</div>
            </button>

            <div
              ref={mobileMenuRef}
              className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
            >
              <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                about
              </a>

              <a
                href="#realfeatures"
                onClick={(e) => scrollToSection(e, "realfeatures")}
              >
                features
              </a>

              <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
                pricing
              </a>


              <a href="https://app.withblip.com/signup" className={styles.startBtn}>
                Start Free Trial
              </a>
            </div>
            <nav
              className={`${styles.navLinks} ${isScrolled ? styles.scrolled : ""
                }`}
            >
              <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                about
              </a>

              <a
                href="#realfeatures"
                onClick={(e) => scrollToSection(e, "realfeatures")}
              >
                features
              </a>

              <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
                pricing
              </a>

              <a href="https://app.withblip.com" className={styles.startBtn}>
                Log In
              </a>
              <a href="https://app.withblip.com/signup" className={styles.FreeTrial}>
                Start Free Trial
              </a>
            </nav>
          </header>
        </div>
        <motion.section
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }} // Change from whileInView to animate
          transition={{
            duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
            ease: "easeOut",
            delay: 0.2 // Optional delay for better effect
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
              <video className={`${styles.image}`} ref={MobileVideoRef} muted autoPlay loop playsInline onClick={enableControls} // or onTouchStart for mobile
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
            <div className={styles.testimonialSubHeading}>Supporting 500+ Ad Launches Daily</div>
            <div className={styles.testimonialHeading}>
              People are calling it the best invention since sliced bread
            </div>
            <div className={styles.testimonialsGrid}>
              {/* Testimonial 1 */}
              <div className={`${styles.testimonialContainer} ${styles.color1}`}>
                <blockquote className={styles.testimonialQuote}>
                  &quot;Jesus, It&apos;s super fast. It&apos;s everything I wanted to replace my ads manager workflow&quot;
                </blockquote>

                <div className={styles.testimonialProfile}>
                  <img
                    src={Sam}
                    alt="Samuel Appentsen"
                    className={styles.profileImage}
                  />
                  <span className={styles.profileName}>Samuel Appentsen</span>
                </div>

                <div className={styles.companyTitle}>
                  Co Founder, Onward Agency
                </div>

                <img
                  src={onward}
                  alt="Onward Agency"
                  className={styles.companyLogo}
                />
              </div>

              {/* Testimonial 2 */}
              <div className={`${styles.testimonialContainer} ${styles.color2}`}>
                <blockquote className={styles.testimonialQuote}>
                  &quot;I used to dread having to get into Ads Manager to upload ads. Now with Blip, it takes just two clicks and anyone on the team can do it themselves.&quot;
                </blockquote>

                <div className={styles.testimonialProfile}>
                  <img
                    src={Henry}
                    alt="Person Name"
                    className={styles.profileImage}
                  />
                  <span className={styles.profileName}>Henry Boldizsar</span>
                </div>

                <div className={styles.companyTitle}>
                  Mobile App Founder
                </div>
              </div>

              <div className={`${styles.testimonialContainer} ${styles.color3}`}>
                <blockquote className={styles.testimonialQuote}>
                  &quot;We manage hundreds of creatives each week across multiple 8/9 figure brands, and Blip has cut our launch time by 90% with zero friction and flawless accuracy. Fast, reliable, essential.&quot;
                </blockquote>

                <div className={styles.testimonialProfile}>
                  <img
                    src={MK}
                    alt="Person Name"
                    className={styles.profileImage}
                  />
                  <span className={styles.profileName}>MK</span>
                </div>

                <div className={styles.companyTitle}>
                  Founder, JDGMNT Digital
                </div>
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
              End context-switching whiplash. No more selecting the same
              settings over and over, copy-pasting text dozens of times, or
              sluggish UI.
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
        <div className={styles.mainGrid} >
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardcontainer}>
                <div className={styles.textwrap}>
                  <Image src={cardrocket} alt="rocket" width={33} height={31} />
                  <div className={styles.tag}>Fast and Furious</div>
                </div>
                <div className={styles.title2}>
                  Upload multiple creatives at once
                </div>
                <div className={styles.cardDes}>
                  Automate your ad creation flow with lightning-fast bulk
                  uploads, saved settings, and ad previews — all in one clean
                  dashboard.
                </div>
              </div>

              <div className={styles.uploadContainer}>
                <div className={styles.contentWrap}>
                  <div className={styles.uploadHeader}>
                    <Image src={uprocket} alt="rocket" width={45} height={45} />
                    <div className={styles.subheadspan}>
                      <strong>30 Files uploaded</strong>
                      <div className={styles.subhead}>to a new adset</div>
                    </div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBarFill}></div>
                  </div>
                </div>

                <div className={styles.thumbnailStack}>
                  <Image
                    src={thumb2}
                    width={85}
                    height={56}
                    alt="thumb1"
                    className={` ${styles.leftcard}`}
                  />
                  <Image
                    src={thumb3}
                    alt="thumb2"
                    width={85}
                    height={56}
                    className={`${styles.centercard}`}
                  />
                  <Image
                    src={thumb1}
                    alt="thumb3"
                    width={85}
                    height={56}
                    className={`${styles.rightcard}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.card4}>
              <div>
                <div className={styles.textwrap}>
                  <Image src={cardsettings} alt="copy" width={24} height={24} />
                  <div className={styles.tag}>
                    Every setting everywhere at once
                  </div>
                </div>
                <div className={styles.title2}>
                  Persistent Settings Per Ad Account
                </div>
                <div className={styles.cardDes}>
                  UTMs, page selections, ad name formulas, all saved, per ad
                  account, so nothing resets on reload.
                </div>
              </div>
              <div className={styles.gridwrap1}>
                <div className={styles.gridcontainer}>
                  <div className={styles.stepbadge}>1</div>
                  <div className={styles.point}>
                    Toggle all Meta Creative Enhancements
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <div className={styles.stepbadge}>2</div>
                  <div className={styles.point}>
                    Default CTA, Links and UTMs
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <div className={styles.stepbadge}>3</div>
                  <div className={styles.point}>
                    Custom Ad Naming Conventions
                  </div>
                </div>
                <div className={styles.addbutton1}>
                  Auto Populate All Settings
                </div>
              </div>
            </div>
            <div className={styles.mobilecard2}>
              <div>
                <div className={styles.textwrap}>
                  <Image src={copy} alt="copy" width={24} height={24} />
                  <div className={styles.tag}>Saving private templates</div>
                </div>
                <div className={styles.title2}>
                  Apply saved templates for copy, CTA, and links
                </div>
                <div className={styles.cardDes}>
                  Stop wasting time in Meta Ads Manager&apos;s clunky interface.
                  Simply select your ideal settings once. We take care of the
                  rest.
                </div>
              </div>

              <div className={styles.gridwrap}>
                <div className={styles.gridcontainer}>
                  <Image src={dwimg} alt="rocket" width={18} height={18} />
                  <div className={styles.point}>
                    Import recently used copy from Meta
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <Image src={copimg} alt="rocket" width={18} height={18} />
                  <div className={styles.point}>
                    Save Variations of Primary Text and Headlines
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <Image src={image} alt="rocket" width={18} height={18} />
                  <div className={styles.point}>
                    Making ads using new template
                  </div>
                </div>
                <div className={styles.addbutton}>+ Add New Template</div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.mobilecard4}>
              <div>
                <div className={styles.textwrap}>
                  <Image src={cardsettings} alt="copy" width={24} height={24} />
                  <div className={styles.tag}>
                    Every setting everywhere at once
                  </div>
                </div>
                <div className={styles.title2}>
                  Persistent Settings Per Ad Account
                </div>
                <div className={styles.cardDes}>
                  UTMs, page selections, ad name formulas, all saved, per ad
                  account, so nothing resets on reload.
                </div>
              </div>
              <div className={styles.gridwrap1}>
                <div className={styles.gridcontainer}>
                  <div className={styles.stepbadge}>1</div>
                  <div className={styles.point}>
                    Toggle all Meta Creative Enhancements
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <div className={styles.stepbadge}>2</div>
                  <div className={styles.point}>
                    Default CTA, Links and UTMs
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <div className={styles.stepbadge}>3</div>
                  <div className={styles.point}>
                    Custom Ad Naming Conventions
                  </div>
                </div>
                <div className={styles.addbutton1}>Save Settings</div>
              </div>
            </div>
            <div className={styles.card2}>
              <div>
                <div className={styles.textwrap}>
                  <Image src={copy} alt="copy" width={24} height={24} />
                  <div className={styles.tag}>Saving private templates</div>
                </div>
                <div className={styles.title2}>
                  Apply saved templates for copy, CTA, and links
                </div>
                <div className={styles.cardDes}>
                  Stop wasting time in Meta Ads Manager&apos;s clunky interface.
                  Simply select your ideal settings once. We take care of the
                  rest.
                </div>
              </div>
              <div className={styles.gridwrap}>
                <div className={styles.gridcontainer}>
                  <Image src={dwimg} alt="rocket" width={20} height={20} />
                  <div className={styles.point}>
                    Import recently used copy from Meta
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <Image src={copimg} alt="rocket" width={20} height={20} />
                  <div className={styles.point}>
                    Save Variations of Primary Text and Headlines
                  </div>
                </div>
                <div className={styles.gridcontainer}>
                  <Image src={image} alt="rocket" width={20} height={20} />
                  <div className={styles.point}>
                    Making ads using new template
                  </div>
                </div>
                <div className={styles.addbutton}>+ Add New Template</div>
              </div>
            </div>
            <div className={styles.card3}>
              <div>
                <div className={styles.textwrap}>
                  <Image src={download} alt="rocket" width={24} height={24} />
                  <div className={styles.tag}>Arrival</div>
                </div>
                <div className={styles.title2}>
                  No more upload, download hell.
                </div>
                <div className={styles.cardDes}>
                  No need to spend hours downloading hundreds of ad assets. With
                  Blip, you can one-click deploy media from your Drive to Meta
                  Ads Manager.
                </div>
              </div>

              <div className={styles.uploadContainer1}>
                <div className={styles.uploadIconWrap1}>
                  <Image
                    src={driveIcon}
                    alt="Drive"
                    className={styles.drive}
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.contentWrap1}>
                  <div className={styles.progressBar1}>
                    <div className={styles.progressBarFill1}></div>
                  </div>
                </div>
                <div className={styles.uploadIconWrap1}>
                  <Image
                    src="/images/landing/logo.webp"
                    alt="Rocket"
                    width={92}
                    height={92}
                    className={styles.rocket}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.section
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
          className={styles.videoSectionContainer}
        >
          <div className={styles.videoSectionHeader}>
            <img
              src={light}
              alt="Lightning"
              className={styles.videoSectionIcon}
            />
            <div className={styles.videoSectionHeading}>
              Ad Account Set up faster than Facebook changes its algorithm
            </div>
            <div className={styles.videoSectionPara}>
              Watch a quick demo of how easy it is to configure all your
              existing preferences from ads manager to Blip!
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <video
              className={`${styles.autoplayVideo} ${styles.desktopVideo}`}
              muted
              loop
              playsInline
              controls
              autoPlay
            >
              <source src="/video/setup-demo.mp4" type="video/mp4" />
            </video>

            <video
              className={`${styles.autoplayVideo} ${styles.mobileVideo}`}
              muted
              loop
              playsInline
              controls
              autoPlay
            >
              <source src="/video/setup-demo-mobile.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.section>
        <div className={styles.cardsContainer}>
          <motion.section
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
            className={styles.cardHeader}
          >
            {/* <div className={styles.cardHeader}> */}
            <div className={styles.cardHeading} id="realfeatures">
              Wide Variety of Ad Types Supported
            </div>
            <div className={styles.cardPara}>
              Through a combination of auto detection and user selection we help
              you make the right type of ad based on campaign and ad set
              selected.
            </div>
            {/* </div> */}
          </motion.section>

          <div className={styles.Cards}>
            <div className={styles.cardCarouselAuto1}>
              <div className={styles.cardsTitle}>
                <div className={styles.cardsHeader}>
                  <Image
                    alt="auto"
                    src={auto}
                    width={18}
                    height={18}
                    className={styles.headSVG}
                  />
                  <div className={styles.cardsHeading}>Auto Grouped</div>
                </div>
                <div className={styles.cardsPara1}>
                  Upload media of different aspect ratios to group together for
                  one ad
                </div>
              </div>

              <div>
                <img src={autoImg} className={styles.images} />
                <img src={cardmobile3} className={styles.mobileimages} />
              </div>
            </div>

            <div className={styles.cardCarouselAuto}>
              <div className={styles.cardsTitle}>
                <div className={styles.cardsHeader}>
                  <Image
                    alt="carosual"
                    src={carousel}
                    width={18}
                    height={18}
                    className={styles.headSVG}
                  />
                  <div className={styles.cardsHeading}>Carousel</div>
                </div>
                <div className={styles.cardsPara}>
                  Easily rearrange cards, give unique text for each card or
                  apply the same to all
                </div>
              </div>
              <div>
                <img src={carouselImg} className={styles.images} />
                <img src={cardmobile1} className={styles.mobileimages} />
              </div>
            </div>

            <div className={styles.cardShopDynamic}>
              <div className={styles.cardsTitle}>
                <div className={styles.cardsHeader}>
                  <Image
                    alt="shop"
                    src={shop}
                    width={18}
                    height={18}
                    className={styles.headSVG}
                  />
                  <div className={styles.cardsHeading}>Shop Destination</div>
                </div>
                <div className={styles.cardsPara}>
                  Auto detects when shop destination is needed and lets you
                  select
                </div>
              </div>
              <div>
                <img src={shopImg} className={styles.images} />
                <img src={cardmobile2} className={styles.mobileimages} />
              </div>
            </div>

            <div className={styles.cardShopDynamic1}>
              <div className={styles.cardsTitle}>
                <div className={styles.cardsHeader}>
                  <Image
                    alt="dynamic"
                    src={dynamic}
                    width={18}
                    height={18}
                    className={styles.headSVG}
                  />
                  <div className={styles.cardsHeading}>Flexible</div>
                </div>
                <div className={styles.cardsPara}>
                  Provide multiple media and text options to test for the adset
                </div>
              </div>
              <div>
                <img src={dynamicImg} className={styles.images} />
                <img src={cardmobile4} className={styles.mobileimages} />
              </div>
            </div>
          </div>
        </div>
        <motion.section
          className={styles.wrapperIcon}
          id="features"
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
        >
          <div className={styles.badgeTitle}>Built by the best</div>
          <h2 className={`${styles.title} ${styles.titleupdate}`}>
            Blip has been built by people with over 10 years of experience
            launching ads
          </h2>
          <div className={`${styles.subtitle} ${styles.nosubtitle}`}>
            The team behind blip has managed over 10mil in ad spend. <br />
            The experience has been tailored to the absolute essentials which
            will improve your quality of life.
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                {feature.title === "Launch Ads Turned off" ? (
                  <div
                    className={`${styles.iconBox} ${styles.activeToggle} ${feature.iconClass}`}
                  >
                    <img src={iconOrange} alt="toggle" />
                  </div>
                ) : (
                  <div className={`${styles.iconBox} ${feature.iconClass}`}>
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                )}
                <p className={styles.featureText}>{feature.title}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className={styles.pricingHeader} id="pricing">
          <h2 className={styles.pricingTitle}>Money cant buy you happiness.<br></br> But it can save you from Ads Manager.<br></br> Which is like the same thing.</h2>

        </div>

        <motion.section

          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15, // trigger a bit earlier
            margin: "0px 0px -10% 0px", // helps mobile Safari
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : isMobile ? 0.2 : 0.7,
            ease: "easeOut",
          }}
          className={styles.wrapperStart}
        >


          <div className={styles.container4Start}>
            <div className={styles.startcontent3}>

              <div className={styles.price1Start}>Starter</div>

              <div className={styles.priceStart}>$99/month</div>
              <Image src={brand} alt="description" width={125} height={125} style={{
                marginTop: '24px', marginBottom: '26px', filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))'
              }} />
              <ul className={styles.featureStart}>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  1 Ad Account
                </li>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Ad Launches
                </li>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Spend
                </li>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <img src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Team Seats
                </li>
              </ul>
              <a href="https://app.withblip.com/signup" className={styles.ctaBtnStart} style={{ color: '#7B68EE' }}>
                Start Posting Ads
              </a>
              <div className={styles.descriptionStart}>
                7 Day Free trial. No CC required.
              </div>
            </div>
          </div>


          <div className={styles.container3Start}>
            <div className={styles.startcontent3}>

              <div className={styles.price1Start}>Light</div>

              <div className={styles.priceStart}>$199/month</div>
              <Image src={bulb} alt="description" width={125} height={125} style={{
                marginTop: '24px', marginBottom: '26px', filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))'
              }} />
              <ul className={styles.featureStart}>

                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  5 Ad Accounts
                </li>

                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Ad Launches
                </li>

                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Spend
                </li>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <img src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Team Seats
                </li>
              </ul>

              <a href="https://app.withblip.com/signup" className={styles.ctaBtnStart} style={{ color: '#EB8339' }}>
                Start Posting Ads
              </a>
              <div className={styles.descriptionStart}>
                7 Day Free Trial. No CC required
              </div>
            </div>
          </div>


          <div className={styles.container2Start}>
            <div className={styles.startcontent3}>

              <div className={styles.price1Start}>Pro</div>

              <div className={styles.priceStart}>$370/month</div>
              <Image src={agency} alt="description" width={125} height={125} style={{
                marginTop: '24px', marginBottom: '26px', filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))'
              }} />
              <ul className={styles.featureStart}>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Ad Accounts
                </li>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Ad Launches
                </li>

                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <Image src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Spend
                </li>
                <li className={styles.feature}>
                  <span className={styles.icon}>
                    <img src={check} alt="check" width={14} height={14} />
                  </span>
                  Unlimited Team Seats
                </li>
              </ul>

              <a href="https://app.withblip.com/signup" className={styles.ctaBtnStart}>
                Start Posting Ads
              </a>
              <div className={styles.descriptionStart}>
                7 Day Free Trial. No CC required
              </div>
            </div>
          </div>


        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
            margin: isMobile ? "0px" : "100px",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
            ease: "easeOut",
          }}
          className={styles.faqcontainer}
        >
          <div className={styles.headfaq}>Frequently Asked Questions</div>
          <div className={styles.faqBox}>
            {faqs.map((item, index) => (
              <div key={index} className={styles.faqline}>
                <div
                  className={`${styles.qacontainer} ${openIndex === index && index !== 0 ? styles.activefaq : ""
                    }`}
                >
                  <div
                    className={`${styles.quediv} ${openIndex !== index ? styles.closefaq : ""
                      } ${openIndex !== index && index !== 0 ? styles.closeques : ""
                      }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div
                      className={`${styles.question} ${index === 0 && openIndex === index
                        ? styles.firstque
                        : ""
                        }`}
                    >
                      Q. {item.question}
                    </div>
                    <img
                      src={plusicon}
                      alt="toggle"
                      className={`${styles.plussvg} ${openIndex === index ? styles.rotate : ""
                        }`}
                    />
                  </div>
                  <div
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className={`${styles.ansdiv} ${openIndex === index && index === 0 ? styles.open : ""
                      }`}
                    style={{
                      maxHeight:
                        openIndex === index
                          ? refs.current[index]?.scrollHeight + "px"
                          : "0",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
                <div className={`${styles.line} `} />
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className={styles.footer}
          id="features"
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
        >
          <div className={styles.footerLeft}>
            <div className={styles.leftTop}>
              <Image
                src="/images/landing/logo.webp"
                alt="Rocket"
                width={32}
                height={32}
                className={styles.blipLogo}
                priority
              />
              <span className={styles.brandTextFooter}>Blip</span>
            </div>

            <a href="mailto:shree@withblip.com" className={styles.footerEmail}>
              shree@withblip.com
            </a>
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://app.withblip.com/privacy-policy"
              className={styles.footerPolicies}
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="https://app.withblip.com/terms-of-service"
              className={styles.footerPolicies}
              target="_blank"
            >
              Terms of Service
            </a>
            <div className={styles.footerPoliciesNew}>
              Blip use and transfer of information received from Google APIs to
              any other app will adhere to{" "}
              <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy">
                Workspace API User Data and Developer Policy
              </a>
              , including the{" "}
              <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use">
                Limited use of user data.
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
