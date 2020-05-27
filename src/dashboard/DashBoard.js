import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/dashboard.scss";
import logo from "../images/dashboard_pic.jpg"



export default function DashBoard({signin, setSignIn}){
    let history = useHistory();

    function handleButton(e){
        e.preventDefault()
        setSignIn(!signin);
        history.push("/")
    }

    return (
        <React.Fragment>
            <div className="DashBoard">
                <div>
                    <button onClick={handleButton}>Go to Home</button>
                </div>
                <h1>Dashboard!</h1>
                <section className="Gallery">
                    <table>
                        <tr></tr>
                        <tr>
                            <td> 
                                <button>
                                    &lt;== More Pictures 
                                </button>

                            </td>
                            <td><img src={logo} alt="default"/></td>
                            <td>
                                <button>
                                    More Pictures ==&gt; 
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>
                                    &lt; Swipe Left
                                </button>
                            </td>
                            <td>
                                <button>
                                    Message
                                </button>
                            </td>
                            <td>
                                <button>
                                    Swipe Right &gt;
                                </button>
                            </td>
                        </tr>
                    </table>

                </section>

                <section className="Info">
                    About Me
                    <textarea></textarea>
                    <p></p>
                    More Stuff
                    <textarea></textarea>
                </section>
            </div>
        </React.Fragment>
    )
}