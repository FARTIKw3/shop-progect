"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

export const ContactInfo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <h2 className={styles.titleFirst}>Наши контакты для связи:</h2>
        <div>
          <h2 className={styles.title}>Телефон:</h2>
          <div className={styles.blockContact}>
            <span className={styles.span}>+996 (703) 82-08-25</span>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>E-mail:</h2>
          <div className={styles.blockContact}>
            <span className={styles.span}>akloom.shop@gmail.com</span>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Социальные сети:</h2>
          <div className={styles.icons}>
            <div className={styles.ico}>
              <Image
                src="/svg/facebook.svg"
                width={40}
                height={40}
                alt="social"
              />
            </div>
            <div className={styles.ico}>
              <Image
                src="/svg/instagram.svg"
                width={40}
                height={40}
                alt="social"
              />
            </div>
            <div className={styles.ico}>
              <Image
                src="/svg/twetter.svg"
                width={40}
                height={40}
                alt="social"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapBlok}>
        <iframe
          width="100%"
          height="423"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">buy drones</a>
        </iframe>
      </div>
    </div>
  );
};
