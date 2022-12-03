import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./sign-in.components";

const Authentication = () => {
    return (
        <Fragment>
            <div className="sign-in">

            <SignIn />
            </div>

            <div className="sign-up">

            </div>

            
            
            <Outlet />

        </Fragment>
    )
}


export default Authentication;