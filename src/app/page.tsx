"use client";
import AdsSection from "@/components/AdsSection";
import BuildBySection from "@/components/BuildBySection";
import CardSection from "@/components/CardSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import MainHeroSection from "@/components/MainHeroSection";
import MyFaqSection from "@/components/MyFaqSection";
import PriceSection from "@/components/PriceSection";
import TestimonialSection from "@/components/TestimonialSection";
import WideVarietySection from "@/components/WideVarietySection";
import Intercom from "@intercom/messenger-js-sdk";
import { useEffect, useRef, useState } from "react";
import styles from "../customcss/page.module.css";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    const element = landingRef?.current;

    const scrollHandler = () => {
      if (element) {
        setIsScrolled(element.scrollTop > 10);
      }
    };

    element?.addEventListener("scroll", scrollHandler);
    return () => {
      element?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={styles.landing} ref={landingRef}>
      <div className={styles.container}>
        <HeaderSection isScrolled={isScrolled} />
        <MainHeroSection isMobile={isMobile} />
        <TestimonialSection isMobile={isMobile} />
        <CardSection />
        <AdsSection isMobile={isMobile} />
        <WideVarietySection isMobile={isMobile} />
        <BuildBySection isMobile={isMobile} />
        <PriceSection isMobile={isMobile} />
        <MyFaqSection isMobile={isMobile} />
        <FooterSection isMobile={isMobile} />
      </div>
    </div>
  );
}
