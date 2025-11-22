"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../customcss/Header.module.css";

const HeaderSection = ({ isScrolled }: any) => {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
          className={`${styles.navLinks} ${isScrolled ? styles.scrolled : ""}`}
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
          <a
            href="https://app.withblip.com/signup"
            className={styles.FreeTrial}
          >
            Start Free Trial
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderSection;
