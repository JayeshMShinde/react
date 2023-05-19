import axios from "axios";
import React, { useEffect, useState } from "react";
export const StudProfile = () => {
  
  const [studInfo, setStudInfo] = useState([]);
  const {
    student_id,
    student_name,
    student_code,
    email_address,
    mobile_number,
    profile_photo,
    city,
    password,
    flag,
    examDetail,
    studentQualification,
  } = studInfo;

  //Get Profile Info Function Code Closing.
  const GetProfileInfo = () => {
    axios
      .get(
        "http://localhost:9090/api/studentDetailById/" +
          localStorage.getItem("student_id")
      )
      .then((studInfo) => {
        setStudInfo(studInfo.data);
      });
  };
  //Get Profile Info Function Code Closing.

  //Get Profile Info On Load Fucntion Opening.
  useEffect(function () {
    GetProfileInfo();
  }, []);
  //Get Profile Info On Load Fucntion Closing.

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="col-md-12">
          <div className="card mb-3" id="mainCardProfile">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={profile_photo}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8" id="profileCardBody">
                <div className="card-body">
                  <span className="card-text fs-2">{student_name}</span>
                  <div className="row">
                    <div className="col-md-12" id="profileInfoSection">
                      <span className="card-text fs-5">
                        Student Code : {student_code}
                      </span>
                      <hr />
                      <span className="card-text fs-5">
                        Email : {email_address}
                      </span>
                      <hr />
                      <span className="card-text fs-5">
                        Mobile No : {mobile_number}
                      </span>
                      <hr />
                      <span className="card-text fs-5">City : {city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
