"use client";

import React, { useEffect, useState } from "react";
import Meteorite from "./Meteorite";
import { IMeteorite } from "@/types";
import Cart from "@/components/Cart";
import CartPage from "@/app/cart/page";

type Props = {
    meteorites: IMeteorite[];
};

export default function MeteoriteList({ meteorites }: Props) {
    const [cartCount, setCartCount] = useState(0);
    const [meteoritesInCart, setMeteoritesInCart] = useState<IMeteorite[]>([]);
    const [propsMeteorites, setPropsMeteorites] = useState<IMeteorite[]>([]);

    const handleMeteoriteClick = (meteorite: IMeteorite) => {
        setMeteoritesInCart([...meteoritesInCart, meteorite]);
    };

    useEffect(() => {
        setCartCount(meteoritesInCart.length);
    }, [meteoritesInCart]);
    return (
        <div style={{ margin: "0 auto" }}>
            {meteorites ? (
                meteorites.map((meteorite) => (
                    <Meteorite
                        handleMeteoriteClick={handleMeteoriteClick}
                        key={meteorite.id}
                        meteorite={meteorite}
                    />
                ))
            ) : (
                <div>Метеоритов нет получается...</div>
            )}
            <Cart cartCount={cartCount} />
        </div>
    );
}
