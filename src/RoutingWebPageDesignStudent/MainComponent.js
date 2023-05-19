/**
 * It renders a navbar, a sidebar, and a main content area88777777
 * @returns A React component.
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from "react-router-dom";
import { DashboardCom } from "./DashboardComponent";
import { AllExamCom } from "./AllExamComponent";
import { AllStudCom } from "./AllStudentComponent";
import { ContentCom } from "./ContentComponent";
import { ContentQueCom } from "./ContentQueComponent";
import { InterviewQueCom } from "./InterviewQueComponent";
import { QuelvlCom } from "./QuestionLvlComponent";
import { RoleCom } from "./ExamComponent";
import { TopicCom } from "./TopicComponent";

export const MainComWebDes = () => {
    const [divstyle] = useState({ "min-height": "450px", "width": "80%" });
    const [divheightStyle] = useState({ "height": "100%" });
    const [divwidthStyle] = useState({ "width": "100%" });
    const [divinputserch] = useState({ "height": "100%", "width": "250px" })
    const [divcolor] = useState({ "color": "white" });
    const [fontsize] = useState({ "font-size": "25px" });
    const [linkcol] = useState({ "color": "#00A0C6", "text-decoration": "none", "cursor": "pointer", "width": "100%" });
    const [fontstyle] = useState({ "font-family": "cursive" })
    return (
        <div style={fontstyle}>
            {/* Header Section  */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="http://localhost:3000" className="navbar-brand" style={divheightStyle}>
                            &nbsp;
                            <b>CIIT</b>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse1">
                            <div className="navbar-nav ms-auto">
                                <div className="input-group" style={divinputserch}>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <button type="button" className="btn btn-primary"><i className="bi-search"></i></button>
                                </div>
                                &nbsp;
                                <Link to="/" className="nav-item nav-link"><i className="bi-person-plus-fill">&nbsp;</i>Sign Out</Link>
                                &nbsp;
                                <Link to="/" className="nav-item nav-link"><i className="bi bi-person-fill">&nbsp;</i>Sign In</Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
            {/* Middle Section */}
            <div style={divstyle}>
                <div className="row">
                    <div className="col-md-3">
                        <div className=" container bg-dark" style={divheightStyle}>

                            <p style={divcolor}>
                                &nbsp;
                                <hr />
                                <b style={fontsize}>Student Section</b>
                                <hr />
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/dashboard" className="btn btn-primary text-light rounded-pill" style={linkcol}><i className="bi bi-house-door-fill"></i>&nbsp;<b>Dashboard</b></Link>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/all-student" className="btn btn-danger text-light rounded-pill" style={linkcol}><i className="bi bi-person-fill"></i>&nbsp;<b>All Student</b></Link>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/all-exam" className="btn btn-danger text-light rounded-pill" style={linkcol}><i className="bi bi-clipboard2-fill"></i>&nbsp;<b> All Exam</b></Link>
                                </li>
                            </ul>
                            <p style={divcolor}>
                                <hr />
                                <b style={fontsize}>Master Section</b>
                                <hr />
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/topic" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-textarea-t"></i>&nbsp;<b>Topic</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/content" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-text-left"></i>&nbsp;<b>Content</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/content-question" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-file-earmark-text-fill"></i>&nbsp;<b>Content Question</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/interview-question" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-journal-richtext"></i>&nbsp;<b>Interview Question</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/question-level" className="btn btn-warning text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-journal-text"></i>&nbsp;<b>Question Level</b></Link></li>
                                <li className="list-group-item bg-dark">
                                    <Link to="/main/role" className="btn btn-info text-dark rounded-pill" style={linkcol}>
                                        <i className="bi bi-people-fill"></i>&nbsp;<b>Role</b></Link></li>
                            </ul>
                            <p style={divcolor}>
                                <hr />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
            {/* Footer Section */}
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
        </div >
    )
}