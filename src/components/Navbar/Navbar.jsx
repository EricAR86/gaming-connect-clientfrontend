import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
//import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
    return (
        <nav>
            <Link to={PATHS.HOMEPAGE} className="nav__projectName">
                Home
            </Link>

            <div className="nav__authLinks">
                {props.user ? (
                    <>
                        <Link to={PATHS.USERPAGE} className="authLink">
                            {props.user?.username}
                        </Link>
                        <button className="nav-logoutbtn" onClick={props.handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={PATHS.SIGNUPPAGE} className="authLink">
                            Signup
                        </Link>
                        <Link to={PATHS.LOGINPAGE} className="authLink">
                            Log In
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

