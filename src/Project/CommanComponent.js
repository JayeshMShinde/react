import React from "react";
import { Topic } from "./TopicComponent";
import { Content } from "./ContentComponent";
import { Main } from "./MainComponent";
import { Login } from "./LoginComponent";
import { Exam } from "./ExamComponent";
import { Question } from "./QuestionComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StudentDetails } from "./StudentDetails";
import { Dashboard } from "./DashboardComponent";
import { AllExam } from "./AllExamComponent";


export const Common = () => {

    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="" element={<Login />} />
                        <Route path="main" element={<Main />}>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="studentdetails" element={<StudentDetails />} />
                            <Route path="allexam" element={<AllExam />} />
                            <Route path="topic" element={<Topic />} />
                            <Route path="content" element={<Content />} />
                            <Route path="question" element={<Question />} />
                            <Route path="exam" element={<Exam />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}