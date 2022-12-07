import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./sign-in.components";
import SignUp from "./sign-up.component";

const Authentication = () => {
    return (
        <Fragment>
            <div className="sign-in">
                <SignIn />
            </div>

            <div className="sign-up">
                <SignUp />
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Authentication;