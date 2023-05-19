import React from "react";
import { Content } from "./ContentComponent";
import { Topic } from "./TopicComponent";
import { Login } from "./LoginComponent";
import { Question } from "./QuestionComponent";
import { Exam } from "./ExamComponent";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

export const Main = () => {
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        CIIT
                        {/* <img src="https://sulcdn.azureedge.net/biz-live/img/-ciit-training-institute--5176421-9de26f53.jpeg" height="28" alt="CoolBrand"> */}
                    </a>
                    <div className="navbar-nav ms-auto">
                        <a href="#" class="nav-item nav-link">Login</a>
                    </div>
                </div>
            </nav>
            <hr />
            <div className="row">
                <div className="col-md-3 bg-dark">
                    <div className="container" style={{height:"100%"}}>
                        <h3 style={{ color: "white", fontFamily: "cursive", fontSize: "20px", marginLeft: "10px" }}>Student Section</h3>
                        <ul className="list-group" style={{ fontSize: "15px", fontFamily: "serif" }}>
                            <li className="list-group-item"><Link to="dashboard">Dashboard</Link></li>
                            <li className="list-group-item"><Link to="studentdetails">StudentDetails</Link></li>
                            <li className="list-group-item"><Link to="allexam">All Exam</Link></li>
                        </ul>
                        <h3 style={{ color: "white", fontFamily: "cursive", fontSize: "20px", marginLeft: "10px" }}>Master Section</h3>
                        <ul className="list-group" style={{ fontSize: "15px", fontFamily: "serif" }}>
                            <li className="list-group-item"><Link to="topic">Topic</Link></li>
                            <li className="list-group-item"><Link to="content">Content</Link></li>
                            <li className="list-group-item"><Link to="question">Content Question</Link></li>
                            <li className="list-group-item"><Link to="exam">Exam</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}