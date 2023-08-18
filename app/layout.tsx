import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./global.css";
import Footer from "@/components/Footer";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Meteorite catcher",
    description: "Kvartirka test",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={styles.page}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
