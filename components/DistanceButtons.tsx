"use client";

import React, { useState } from "react";
import styles from "../styles/DistanceButtons.module.css";
import { get } from "http";
function DistanceButtons() {
    const [distanceKm, setDistanceKm] = useState<boolean>(true);
    const [distanceMoon, setDistanceMoon] = useState<boolean>(false);

    const handleClick = () => {
        setDistanceKm(!distanceKm);
        setDistanceMoon(!distanceMoon);
    };
    return (
        <div className={styles.wrapper}>
            <button
                className={distanceKm ? styles.isActive : styles.button}
                onClick={handleClick}
            >
                в километрах
            </button>
            |
            <button
                className={distanceMoon ? styles.isActive : styles.button}
                onClick={handleClick}
            >
                в лунных орбитах
            </button>
        </div>
    );
}

export default DistanceButtons;
