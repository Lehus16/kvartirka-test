"use client";

import React from "react";
import { IMeteorite } from "../types/index";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import styles from "../styles/Meteorite.module.css";
import Arrow from "../public/images/Arrow.png";
import EggL from "../public/images/eggL.png";
import EggS from "../public/images/eggS.png";
import MyButton from "./MyButton";
import moment from "moment";
import "moment/locale/RU";
import Link from "next/link";

type Props = {
    meteorite: IMeteorite;
    handleMeteoriteClick: (meteorite: IMeteorite) => void;
};
function Meteorite({ meteorite, handleMeteoriteClick }: Props) {
    const date = moment(meteorite.close_approach_data[0].close_approach_date)
        .locale("RU")
        .format("D MMMM YYYY");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const button: HTMLButtonElement = e.target as HTMLButtonElement;
        button.classList.add(styles.active);
        button.textContent = "В КОРЗИНЕ";
        button.disabled = true;
        handleMeteoriteClick(meteorite);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <h3 className={styles.date}>{date}</h3>
                <div className={styles.info}>
                    <div>
                        <p className={styles.distance}>
                            {parseInt(
                                meteorite.close_approach_data[0].miss_distance
                                    .kilometers
                            ).toLocaleString("ru") + " "}
                            км
                        </p>
                        <Image
                            className={styles.meteoriteiteImage}
                            src={Arrow}
                            alt="Стрелка"
                        />
                    </div>
                    <Image
                        src={
                            meteorite.estimated_diameter.meters
                                .estimated_diameter_max > 100
                                ? EggL
                                : EggS
                        }
                        alt="Метеорит"
                        style={{
                            margin: "0 8px",
                        }}
                    />
                    <div>
                        <Link
                            href={"/meteorite/" + meteorite.id}
                            className={styles.name}
                        >
                            {meteorite.name.trim()}
                        </Link>
                        <p className={styles.diameter}>
                            Ø{" "}
                            {(
                                (meteorite.estimated_diameter.meters
                                    .estimated_diameter_min +
                                    meteorite.estimated_diameter.meters
                                        .estimated_diameter_max) /
                                2
                            ).toFixed(0)}
                            м
                        </p>
                    </div>
                </div>
                <div className={styles.footer}>
                    <MyButton
                        onClick={(e) => { 
                            handleClick(e);
                        }}
                    >
                        ЗАКАЗАТЬ
                    </MyButton>
                    {meteorite.is_potentially_hazardous_asteroid ? (
                        <p className={styles.dangerous}>
                            <Image src={Logo} alt="Опасность" /> Опасен
                        </p>
                    ) : (
                        <p className={styles.dangerous}>Не опасен</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Meteorite;
