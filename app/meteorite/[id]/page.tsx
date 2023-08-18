import Link from "next/link";
import { Metadata } from "next/types";
import moment from "moment";
import "moment/locale/ru";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import EarthWrapper from "@/components/EarthWrapper";

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
    params: {
        id: number;
    };
};

export async function generateMetadata({
    params: { id },
}: Props): Promise<Metadata> {
    const meteorite = await getData(id);
    return {
        title: meteorite.name,
    };
}

export default async function meteorite({ params: { id } }: Props) {
    const meteorite = await getData(id);

    return (
        <div className="meteorite">
            <Link className="meteorite__back" href={"/"}>
                ← Назад к выбору
            </Link>
            <h1 className="meteorite__title">Название: {meteorite.name}</h1>
            {meteorite.is_potentially_hazardous_asteroid ? (
                <p className="meteorite__hazard meteorite__hazard_danger_true">
                    <Image src={Logo} alt="опасность" /> Опасный
                </p>
            ) : (
                <p className="meteorite__hazard">Не опасный</p>
            )}
            <div className="meteorite__diameter-wrapper">
                <h3 className="meteorite__diameter-title">Диаметр: </h3>
                <p className="meteorite__diameter-text">
                    мин:{" "}
                    {meteorite.estimated_diameter.meters.estimated_diameter_min.toFixed(
                        2
                    )}{" "}
                    м
                </p>
                <p className="meteorite__diameter-text">
                    макс:{" "}
                    {meteorite.estimated_diameter.meters.estimated_diameter_max.toFixed(
                        2
                    )}{" "}
                    м
                </p>
            </div>

            <h3 className="meteorite__dates-title"> Даты сближений с землей</h3>
            <div className="meteorite__dates">
                {meteorite.close_approach_data.map((data: any) => {
                    return (
                        <p
                            className="meteorite__date"
                            key={data.close_approach_date}
                        >
                            {moment(data.close_approach_date)
                                .locale("RU")
                                .format("D MMMM YYYY")}
                        </p>
                    );
                })}
            </div>
            <EarthWrapper />
        </div>
    );
}
