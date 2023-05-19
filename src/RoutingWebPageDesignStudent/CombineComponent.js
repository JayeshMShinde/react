/**
 * It renders a navbar, a sidebar, and a main content area88777777
 * @returns A React component.
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { DashboardCom } from "./DashboardComponent";
import { AllExamCom } from "./AllExamComponent";
import { AllStudCom } from "./AllStudentComponent";
import { ContentCom } from "./ContentComponent";
import { ContentQueCom } from "./ContentQueComponent";
import { InterviewQueCom } from "./InterviewQueComponent";
import { QuelvlCom } from "./QuestionLvlComponent";
import { RoleCom } from "./ExamComponent";
import { TopicCom } from "./TopicComponent";
import { Login } from "./LoginComponent";
import { MainComWebDes } from "./MainComponent";

export const CommonCom = () => {
    const [divstyle] = useState({ "min-height": "500px", "width": "100%" });
    const [divheightStyle] = useState({ "height": "100%" });
    const [divwidthStyle] = useState({ "width": "100%" });
    const [divinputserch] = useState({ "height": "100%", "width": "250px" })
    const [divcolor] = useState({ "color": "white" });
    const [fontsize] = useState({ "font-size": "25px" });
    const [linkcol] = useState({ "color": "#00A0C6", "text-decoration": "none", "cursor": "pointer", "width": "100%" });
    const [fontstyle] = useState({ "font-family": "cursive" })
    return (
        <div style={fontstyle}>
            <Router>
                <div style={divstyle}>
                    <Routes>
                        <Route path="" element={<Login />} />
                        <Route path="main" element={<MainComWebDes />}>
                            {/* student */}
                            <Route path="dashboard" element={<DashboardCom />} />
                            <Route path="all-student" element={<AllStudCom />} />
                            <Route path="all-exam" element={<AllExamCom />} />
                            {/* Master */}
                            <Route path="topic" element={<TopicCom />} />
                            <Route path="content" element={<ContentCom />} />
                            <Route path="content-question" element={<ContentQueCom />} />
                            <Route path="interview-question" element={<InterviewQueCom />} />
                            <Route path="question-level" element={<QuelvlCom />} />
                            <Route path="exam" element={<RoleCom />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}