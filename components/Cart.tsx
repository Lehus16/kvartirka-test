"use client";

import React from "react";
import styles from "../styles/Cart.module.css";
import Link from "next/link";
type Props = {
    cartCount: number;
};
function Cart({ cartCount }: Props) {
    return (
        <div className={styles.cart}>
            <div>
                <h3 className={styles.title}>Корзина</h3>
                <p className={styles.subtitle}>{cartCount + " астеоридов"}</p>
            </div>
            <Link href={"/cart"} className={styles.button}>
                Отправить
            </Link>
        </div>
    );
}

export default Cart;
