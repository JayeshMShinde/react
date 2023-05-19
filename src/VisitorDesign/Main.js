import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from "react-router-dom";
import { Visitor } from "./VisitorComponent";
import { useState } from "react";
export const Mainvis = () => {

    const [divstyle] = useState({ "min-height": "450px", "width": "80%" });
    const [divheightStyle] = useState({ "height": "100%" });
    const [divwidthStyle] = useState({ "width": "100%" });
    const [divinputserch] = useState({ "height": "100%", "width": "250px" })
    const [divcolor] = useState({ "color": "white" });
    const [fontsize] = useState({ "font-size": "25px" });
    const [linkcol] = useState({ "color": "#00A0C6", "text-decoration": "none", "cursor": "pointer", "width": "100%" });

    return (
        <div>
            {/* Heaader */}
            <div className="navbar navbar-expand-lg bg-dark">
                <a href="http://localhost:3000/main" >&nbsp;Visitor</a>
            </div>
            {/* Middle */}
            <div className="row">
                <div className="col-md-3 bg-dark">
                    <div className=" container bg-dark" style={divheightStyle}>
                        <ul className="list-group">
                            <li className="list-group-item bg-dark">
                                <Link to="/main/visitor" className="btn btn-primary text-light rounded-pill" style={linkcol}>&nbsp;<b>Add Visitor</b></Link>
                            </li>
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