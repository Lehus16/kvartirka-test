"use client";

import { IMeteorite } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getData(id: number) {
    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=zngUzOkvaxaDG0zKbGoIjlczX93L0WBaRvL2y0F3`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    return response.json();
}

type Props = {
    meteorites: IMeteorite[];
};

export default function CartPage({ meteorites }: Props) {
    // const meteorites = ids.map((id) => getData(id));
    const [meteoritesSended, setMeteoritesSended] = useState<IMeteorite[]>([]);

    useEffect(() => {
        setMeteoritesSended(meteorites);
    }, [meteorites]);

    return (
        <div className="cart">
            <h1 className="cart__title">Заказ отправлен</h1>
            <button
                onClick={() => {
                    console.log(meteorites, meteoritesSended);
                }}
            >
                АЛО
            </button>
            {/* {meteorites.map((meteorite) => (
                <div key={meteorite.id} className={styles.wrapper}>
                    <h3 className={styles.date}>{date}</h3>
                    <div className={styles.info}>
                        <div>
                            <p className={styles.distance}>
                                {parseInt(
                                    meteorite.close_approach_data[0]
                                        .miss_distance.kilometers
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
                        {meteorite.is_potentially_hazardous_asteroid ? (
                            <p className={styles.dangerous}>
                                <Image src={Logo} alt="Опасность" /> Опасен
                            </p>
                        ) : (
                            <p className={styles.dangerous}>Не опасен</p>
                        )}
                    </div>
                </div>
            ))} */}
        </div>
    );
}
