import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/signin.scss";

function SignIn({signin, setSignIn}){
    let history = useHistory();

    function handleButton(e){
        e.preventDefault()
        setSignIn(!signin);
        history.push("/")
    }


    return (
        <React.Fragment>
            <section className="SignIn">

            <h1>Sign In Page!</h1>
                Push Button to Sign In!
                <p></p>

                <button onClick={handleButton}>SIGN IN
                </button>
            </section>
        </React.Fragment>
    )
}

export default SignIn;