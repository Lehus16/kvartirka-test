"use client";

import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { fetchData } from "@/actions/fetchData";
import Spinner from "./Spinner";
import { IMeteorite } from "@/types";
import MeteoriteList from "./MeteoriteList";
import { delay } from "lodash";

export default function LoadMoreMeteorites() {
    const [meteorites, setMeteorites] = useState<IMeteorite[]>([]);
    const [day, setDay] = React.useState<number>(0);

    const { ref, inView } = useInView();

    const LoadMore = async () => {
        const nextDay = day + 1;
        const newMeteorites = await fetchData(nextDay);
        setMeteorites((prev) => [...prev, ...newMeteorites]);
        setDay(nextDay);
    };

    useEffect(() => {
        if (inView) {
            delay(LoadMore, 200);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <>
            <MeteoriteList meteorites={meteorites} />
            <div ref={ref}>
                <Spinner />
            </div>
        </>
    );
}
