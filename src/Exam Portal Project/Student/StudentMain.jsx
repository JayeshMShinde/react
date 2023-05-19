import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
export const StudentDashboard = () => {
  useEffect(function () {
    GetStudentDetails();
  }, []);
  const [student, setStudent] = useState({});
  
  const GetStudentDetails = () => {
    axios
      .get(
        "http://localhost:9090/api/studentDetailById/" +
          localStorage.getItem("student_id")
      )
      .then((sd) => {
        setStudent(sd.data);
      });
  };

  return (
    <div id="parentDiv">
      <nav id="studNavbar" className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand fs-5">
            <Link to="" className="nav-link fs-5">
              Exam Portal
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="student-dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="student-profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="exam">
                  Exam
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "auto" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
