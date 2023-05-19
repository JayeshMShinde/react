import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, Row } from "react-bootstrap";
export const LoginForm = () => {
  const navigate = useNavigate();

  //Login Form Variables.
  const txtUserName = useRef();
  const txtPassword = useRef();
  const [admin, setAdmin] = useState([]);
  const [student, setStudent] = useState([]);
  //Login Form Variables.

  //Signup Form Variables.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studCode, setStudCode] = useState([]);
  const scode = useRef();
  const sname = useRef();
  const semail = useRef();
  const saddress = useRef();
  const smobile = useRef();
  const [file, setFile] = useState("");
  //Signup Form Variables.

  useEffect(function () {
    GetAllAdmins();
    GetAllStudents();
    GetStudentCode();
  }, []);

  const GetStudentCode = () => {
    axios.get("http://localhost:9090/api/newStudentCode").then((resp) => {
      setStudCode(resp.data);
      // console.log(resp)
    });
  };

  const GetAllAdmins = () => {
    axios.get("http://localhost:9090/api/admin").then((admindata) => {
      setAdmin(admindata.data);
    });
  };

  const GetAllStudents = () => {
    axios
      .get("http://localhost:9090/api/getStudentIdPassword")
      .then((studenData) => {
        setStudent(studenData.data);
      });
  };
  const LogIn = () => {
    var cnt = 0;
    for (let i = 0; i < admin.length; i++) {
      if (
        txtUserName.current.value === admin[i].user_name &&
        txtPassword.current.value === admin[i].password
      ) {
        localStorage.setItem("user", admin[i].user_name);
        alert(`Welcome Mr.${admin[i].user_name}`);
        // toast.success(`Welcome ${admin[i].user_name}`,{"position":"top-center",theme:"dark",autoClose:2000});
        navigate("/admin-dashboard");
        break;
      } else {
        cnt++;
      }
    }
    if (cnt > 0 && cnt === admin.length) {
      LogInStudent();
    }
  };
  console.log(student);
  const LogInStudent = () => {
    var cnt = 0;
    for (let i = 0; i < student.length; i++) {
      if (
        txtUserName.current.value === student[i].student_code &&
        txtPassword.current.value === student[i].password
      ) {
        localStorage.setItem("student_id", student[i].student_id);
        alert(`Welcome ${student[i].student_name}`);
        // toast.success(`Welcome ${student[i].student_name}`,{"position":"top-center","theme":"dark",autoClose:2000})
        navigate("/student-section");
        break;
      } else {
        cnt++;
      }
    }

    if (cnt === student.length) {
      toast.error(`Invalid Info`, {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  const UploadFile = (event) => {
    let e = event.target.files[0];
    console.log(e);
    setFile(e);
  };

  const AddStudent = () => {
    let student_name = sname.current.value;
    let student_code = scode.current.value;
    let mobile_number = smobile.current.value;
    let email_address = semail.current.value;
    let city = saddress.current.value;
    let data = new FormData();
    data.append("file", file);
    data.append("student_name", student_name);
    data.append("student_code", student_code);
    data.append("mobile_number", mobile_number);
    data.append("email_address", email_address);
    data.append("city", city);
    axios.post("http://localhost:9090/api/studentDetail", data).then((resp) => {
      toast.success(`Registered Successfully`, {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    });
  };

  return (
    <>
      <div id="mainDivLogin">
        <div className="shadow-none p-3 mb-5  rounded" id="log-form">
          <h1 style={{ color: "#7a4ce9" }}>Login Form</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              ref={txtUserName}
              id="user"
              className="form-control"
              placeholder="User Name"
            />
            <label for="user">
              <b id="userB">Login Id</b>
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              ref={txtPassword}
              id="user"
              className="form-control"
              placeholder="Password"
            />
            <label for="user">
              <b id="userB">Password</b>
            </label>
          </div>
          <div className="mb-3">
            <button
              type="button"
              onClick={() => LogIn()}
              className="btn btn-outline-info btn-lg"
              id="loginBtn">
              Log In
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() => handleShow()}
              className="btn btn-outline-warning btn-lg"
              id="loginBtn">
              Sign In
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton style={{ backgroundColor: "#7a4ce9" }}>
          <Modal.Title>Register Form</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#7a4ce9" }}>
          <form className="">
            <div className="mb-3">
              <label htmlFor="signupInput">Student Code</label>
              <input
                type="text"
                className="form-control form-control-lg"
                value={studCode.student_code}
                ref={scode}
                id="signupInput"
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signupInput">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                ref={sname}
                id="signupInput"
                placeholder="Type your name here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signupInput">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                ref={semail}
                id="signupInput"
                placeholder="Type your email address here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signupInput">Address</label>
              <input
                type="text"
                className="form-control form-control-lg"
                ref={saddress}
                id="signupInput"
                placeholder="Type your residential address here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signupInput">Mobile</label>
              <input
                type="text"
                className="form-control form-control-lg"
                ref={smobile}
                id="signupInput"
                placeholder="Type your mobile/whatsapp no here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signupInput">Photo</label>
              <input
                type="file"
                className="form-control form-control-lg"
                onChange={UploadFile}
                id="signupInput"
                placeholder="none"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#7a4ce9" }}>
          <Button variant="info" onClick={() => AddStudent()}>
            Register
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
