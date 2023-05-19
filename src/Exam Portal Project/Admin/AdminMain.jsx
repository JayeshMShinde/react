import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHandPointLeft } from 'react-icons/fa';
export const AdminDashBoard = () => {
  const [username, setUserName] = useState();

  useEffect(function () {
    GetUserName();
  }, []);

  const GetUserName = () => {
    setUserName(localStorage.getItem("user"));
  };
  return (
    <>
      <div className="sidebar">
        <div className="inner-sidebar">
          <h2>
            <marquee>{username}</marquee>
          </h2>
          <h3 style={{ marginTop: "2rem" }}>Student Section</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link className="link" to="">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="link" to="">
                All Exams
              </Link>
            </li>
            <li>
              <Link className="link" to="all-student">
                All Student
              </Link>
            </li>
          </ul>
          <h3>Master Section</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link className="link" to="">
                Role
              </Link>
            </li>
            <li>
              <Link className="link" to="topic">
                Topic
              </Link>
            </li>
            <li>
              <Link className="link" to="content">
                Content
              </Link>
            </li>
            <li>
              <Link className="link" to="">
                Question Level
              </Link>
            </li>
            <li>
              <Link className="link" to="content-question">
                Content Question
              </Link>
            </li>
            <li>
              <Link className="link" to="interview-qa">
                Interview Question
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainbox">
        <div className="navbar" id="popup1">
          <h3 style={{ color: "#7a4ce9" }}>Exam Portal</h3>
          <button
            type="button"
            className="btn btn-outline-danger"
            id="btnLogOut">
            <Link style={{ textDecoration: "none", color: "#E6E6FA" }} to="/">
             Log Out <FaHandPointLeft/> 
            </Link>
          </button>
        </div>
        <Outlet></Outlet>
        <div></div>
      </div>
    </>
  );
};
