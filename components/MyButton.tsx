"use client";

import React from "react";
import styles from "../styles/MyButton.module.css";

type Props = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function MyButton({ children, onClick }: Props) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
