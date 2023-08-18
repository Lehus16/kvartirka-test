"use client";
import React from "react";
import styles from "../styles/Meteorites.module.css";
import MeteoriteList from "./MeteoriteList";
import { IMeteorite } from "@/types";
import LoadMoreMeteorites from "./LoadMoreMeteorites";

type Props = {
    children?: React.ReactNode;
    meteorites: IMeteorite[];
};

export default function Meteorites({ children, meteorites }: Props) {
    return (
        <div className={styles.meteorites}>
            <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
            <div>{children}</div>
            <MeteoriteList meteorites={meteorites} />
            <LoadMoreMeteorites />
        </div>
    );
}
