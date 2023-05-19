import React from "react";
import "./Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Topic } from "./Admin/Topic";
import { AllStudent } from "./Admin/AllStudent";
import { LoginForm } from "./LoginForm";
import { AdminDashBoard } from "./Admin/AdminMain";
import { StudentDashboard } from "./Student/StudentMain";
import { Content } from "./Admin/Content";
import { ContentQuestion } from "./Admin/ContentQuestion";
import { StudProfile } from "./Student/Profile";
import { Exam } from "./Student/Exam";
import { StudDashboard } from "./Student/Dashboard";
import { LandingPage } from "./Student/LandingPage";
import { Interview } from "./Admin/InterviewQuestion";
export const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="admin-dashboard" element={<AdminDashBoard />}>
            <Route path="topic" element={<Topic />} />
            <Route path="all-student" element={<AllStudent />} />
            <Route path="content" element={<Content />} />
            <Route path="content-question" element={<ContentQuestion />} />
            <Route path="interview-qa" element={<Interview/>}/>
          </Route>
          <Route path="student-section"element={<StudentDashboard />}>
            <Route path="" element={<LandingPage/>}/>
            <Route path="student-profile" element={<StudProfile/>}/>
            <Route path="exam" element={<Exam/>}/>
            <Route path="student-dashboard" element={<StudDashboard/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};
