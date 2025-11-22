"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "../customcss/PricingSection.module.css";

const PriceSection = ({ isMobile }: { isMobile: boolean }) => {
  const prefersReducedMotion = useReducedMotion();
  const brand = "/images/landing/shop.webp";
  const bulb = "/images/landing/bulb.webp";
  const check = "/images/landing/check-circle.svg";
  const agency = "/images/landing/agency.webp";

  return (
    <>
      <div className={styles.pricingHeader} id="pricing">
        <h2 className={styles.pricingTitle}>
          Money cant buy you happiness.<br></br> But it can save you from Ads
          Manager.<br></br> Which is like the same thing.
        </h2>
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
            <Image
              src={brand}
              alt="description"
              width={125}
              height={125}
              style={{
                marginTop: "24px",
                marginBottom: "26px",
                filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))",
              }}
            />
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
            <a
              href="https://app.withblip.com/signup"
              className={styles.ctaBtnStart}
              style={{ color: "#7B68EE" }}
            >
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
            <Image
              src={bulb}
              alt="description"
              width={125}
              height={125}
              style={{
                marginTop: "24px",
                marginBottom: "26px",
                filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))",
              }}
            />
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

            <a
              href="https://app.withblip.com/signup"
              className={styles.ctaBtnStart}
              style={{ color: "#EB8339" }}
            >
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
            <Image
              src={agency}
              alt="description"
              width={125}
              height={125}
              style={{
                marginTop: "24px",
                marginBottom: "26px",
                filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))",
              }}
            />
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

            <a
              href="https://app.withblip.com/signup"
              className={styles.ctaBtnStart}
            >
              Start Posting Ads
            </a>
            <div className={styles.descriptionStart}>
              7 Day Free Trial. No CC required
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PriceSection;
