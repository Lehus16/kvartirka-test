import React from "react";
import Image from "next/image";
import Earth from "../public/images/EarthL.png";
import styles from "../styles/EarthWrapper.module.css";
export default function EarthWrapper() {
    return (
        <Image
            className={styles.earth_wrapper}
            placeholder="blur"
            src={Earth}
            alt="earth"
            priority
        />
    );
}
