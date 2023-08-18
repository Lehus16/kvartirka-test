import React from "react";
import styles from "../styles/Header.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>ARMAGEDDON 2023</h1>
            <p className={styles.header__subtitle}>
                ООО “Команда им. Б. Уиллиса”.
                <br />
                Взрываем астероиды с 1998 года.
            </p>
        </header>
    );
}
