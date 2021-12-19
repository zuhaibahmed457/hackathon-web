import react from "react";
import '../App.css';
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

// Config Import
import { auth, signInWithEmailAndPassword } from "../firebase/firebaseConfig";
function Login() {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(() => {
                console.log(userEmail)
                console.log(userPassword)
                history.push("./Dashboard")
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        // <div>
        //     <input type="email" placeholder="email" onChange={(e) => setUserEmail(e.target.value)} />
        //     <input type="password" placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
        //     <button onClick={handleSubmit}>Register</button>
        // </div>
        <div>
            <div className="container">
                <div className="form-box">
                    <div className="header-form">
                    <img src={} />
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="Email" className="form-control" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block" onClick={handleSubmit}>LOGIN</button>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="#">Forgot your password</a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;