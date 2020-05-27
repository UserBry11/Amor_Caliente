import React from "react";
import logo from '../images/silhouette.jpg';
import '../styles/profile.scss';


function Profile(){

    return (
        <React.Fragment>
            <div className="Profile">

                <h1>Your Profile Page!</h1>
                <section>
                    <table>
                        <tr>
                            <td></td>
                            <td>
                                <button>Edit Your Profile</button>
                            </td>
                            <td></td>
                        </tr>
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
                    </table>
                </section>

                <section>
                    <h2>About Me</h2>
                    <textarea></textarea>
                </section>

                <section>
                    <h2>Contact Info</h2>
                    <textarea></textarea>
                </section>

            </div>
        </React.Fragment>
    )
}

export default Profile;
