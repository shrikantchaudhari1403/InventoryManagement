import { Link, Outlet } from "react-router-dom";
import MainNavigation from "../mainNavigation/MainNavigation";
import classes from './root.module.css';
import Footer from "../footer/Footer";
import { stringToBoolean } from "../protectedRoute/ProtectedRoutes";

export function RootLayout() {

    const isAuthenticated = stringToBoolean(window.localStorage.getItem('isAuthenticated'))
    // return (
    //     <>
    {/* <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
            <div>
                <Footer />
            </div> */}

    const logout = () => {
        alert("Great Shot!");
        window.localStorage.removeItem("isAuthenticated");
    }
    return (
        <>
            <div className="layout">
                <nav className="left-nav">
                    <ul>
                        {!isAuthenticated && (<>
                            {/* <li><Link to="/LoginFinal">Login</Link> </li> */}
                            <MainNavigation />
                        </>)}
                        {isAuthenticated && (
                            <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
                                <li><button onClick={logout}>Logout</button></li>
                            </>
                        )}
                    </ul>
                </nav>
                <div className="main-content">
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}