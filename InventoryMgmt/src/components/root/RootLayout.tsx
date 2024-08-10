import { Outlet } from "react-router-dom";
import MainNavigation from "../mainNavigation/MainNavigation";
import classes from './root.module.css';
import Footer from "../footer/Footer";

export function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
            <div>
                <Footer />
            </div>
        </>
    )
}