import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const user_name = useRef("");
    const password = useRef("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [fontstyle] = useState({ "font-family": "cursive" })

    const LoginCheck = () => {
        var u = user_name.current.value;
        var p = password.current.value;
        if (u == "Jay" && p == "12345") {
            navigate("/employee");
        }
        else if (u == "admin" && p == "admin") {
            navigate("/admin")
        }
        else {
            setMessage("Invalid UserName and Password");
        }
    }

    return (
        <div className="container" style={fontstyle}>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-50">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{"border-radius": "1rem"}}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        &nbsp;
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" placeholder="UserName" className="form-control form-control-lg" ref={user_name}/>
                                            
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" placeholder="Password" className="form-control form-control-lg" ref={password} />
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <button className="btn btn-primary btn-lg px-5" type="submit" onClick={()=>LoginCheck()}>Login</button>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="bi-facebook"></i></a>
                                            <a href="#!" className="text-white"><i className="bi-twitter px-4"></i></a>
                                            <a href="#!" className="text-white"><i className="bi-google"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}