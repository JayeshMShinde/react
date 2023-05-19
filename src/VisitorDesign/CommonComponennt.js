import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Visitor } from "./VisitorComponent";
import { Mainvis } from "./Main";
export const Commoncomp_vis = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="main" element={<Mainvis/>}>
                        <Route path="visitor" element={<Visitor />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}