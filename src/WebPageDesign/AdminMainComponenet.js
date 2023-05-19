import React, { useState } from "react";
import { Dashboard } from "./DashboardComponent";
import { Employee } from "./EmployeeComponent";
import { Customer } from "./CostumerComponent";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import { Login } from "./LoginPageComponenet";
export const AdminComp = () => {
    const [divstyle] = useState({"min-height": "500px", "width": "100%" })
    const [divheightStyle] = useState({ "height": "100%" });
    const [divwidthStyle] = useState({ "width": "100%" });
    const [fontstyle] = useState({ "font-family": "cursive" })
    return (
        <div style={fontstyle}>
            {/* Header */}
            <div>
                <nav className="navbar navbar-expand-lg bg-dark ">
                    <div className="container-fluid">
                        <a href="http://localhost:3000/admin" className="text-light"> 
                            CIIT
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse1">
                            <div className="navbar-nav ms-auto">
                                <Link to="/" element={<Login />} className="nav-item nav-link text-light btn btn-danger"><i className="bi-person-plus-fill">&nbsp;</i>Sign Out</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <hr/>
            {/* Middle */}
            <div style={divstyle}>
                <div className="row container " style={divheightStyle}>
                    <div className="col-md-3 bg-light" >
                    <ul className="list-group">
                                <li className="list-group-item bg-light" >
                                    <Link to="dashboard" style={divwidthStyle} className="btn btn-primary text-light rounded-pill">&nbsp;<b>Dashboard</b></Link>
                                </li>
                                <li className="list-group-item bg-light">
                                    <Link to="employee-admin" style={divwidthStyle} className="btn btn-danger text-light rounded-pill" >&nbsp;<b>Employee</b></Link>
                                </li>
                                <li className="list-group-item bg-light">
                                    <Link to="customer" style={divwidthStyle} className="btn btn-danger text-light rounded-pill">&nbsp;<b> Customer</b></Link>
                                </li>
                            </ul>
                    </div>
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <hr />
            {/* Footer */}
            <div className="col-md-12" style={divwidthStyle}>
                <div style={divheightStyle}>
                    <footer className="bg-dark text-center text-lg-start">
                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                            <div>
                                <a href="https://facebook.com" className="me-5 link-light">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://twitter.com" className="me-5 link-light">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://google.com" className="me-5 link-light">
                                    <i className="bi bi-google"></i>
                                </a>
                                <a href="https://instagram.com" className="me-5 link-light">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                            <div className="text-center p-2 text-light" >
                                ©2023 Copyright:
                                <a class="text-light" href="https://github.com/JayeshMShinde"><i>JayeshShidne</i></a>
                                &nbsp;
                                All Rigth Resevered ❤
                            </div>
                        </section>
                    </footer>
                </div>
            </div>

        </div>
    )
}