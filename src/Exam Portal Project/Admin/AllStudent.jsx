import axios from "axios";
import { FaUserEdit,FaFileExport,FaRegTrashAlt,FaUserPlus } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export const AllStudent = () => {
  const txtScode = useRef();
  const txtSname = useRef();
  const txtSemail = useRef();
  const txtSmobile = useRef();
  const txtSphoto = useRef();
  const txtSaddress = useRef();
  const [studData, setStudData] = useState([]);
  const [file, setFile] = useState("");
  const [showAddBtn,setShowAddBtn]=useState(true);
  const [showUpdateBtn,setShowUpdateBtn]=useState(false);

  // Get data onloading function code opening.
  useEffect(function () {
    GetAllStudentDetails();
    GetStudentCode();
  }, []);
  // Get data onloading function code opening.

  // Upload File Function Code Opening.
  const UploadFile = (event) => {
    let e = event.target.files[0];
    console.log(e);
    setFile(e);
  };
  // Add Stuudent Function Code Opening.
  const AddStudent = () => {
    let student_name = txtSname.current.value;
    let student_code = txtScode.current.value;
    let mobile_number = txtSmobile.current.value;
    let email_address = txtSemail.current.value;
    let city = txtSaddress.current.value;
    let data = new FormData();
    data.append("file", file);
    data.append("student_name", student_name);
    data.append("student_code", student_code);
    data.append("mobile_number", mobile_number);
    data.append("email_address", email_address);
    data.append("city", city);
    axios.post("http://localhost:9090/api/studentDetail", data).then((resp) => {
      GetAllStudentDetails();
      toast.success(`Student Addedd !`, {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      ClearInput();
      GetStudentCode();
    });
  };
  // Add Student Code Closing.

  //Input Box Clear Function Code Opening.
  const ClearInput = () => {
    txtSname.current.value = "";
    txtSemail.current.value = "";
    txtSaddress.current.value = "";
    txtSmobile.current.value = "";
    txtSphoto.current.value = "";
  };
  //Input Box Clear Function Code Closing.

  // Get All Student Code Opening.
  const GetAllStudentDetails = () => {
    axios
      .get("http://localhost:9090/api/studentDetail")
      .then((dt) => setStudData(dt.data));
  };
  // Get All Student Code Closing.

  // Get System Generated Functtion Code Opening.
  const GetStudentCode = () => {
    axios
      .get("http://localhost:9090/api/newStudentCode")
      .then((e) => (txtScode.current.value = e.data.student_code));
  };
  // Get System Generated Code Closing.

  // View Student Data By Id Function Code Opening.
  const View=(id)=>{
    axios.get("http://localhost:9090/api/studentDetailById/"+id)
    .then((resp)=>{
      console.log(resp)
      // setViewedData(resp.data);
      const {city,email_address,examDetail,flag,mobile_number,password,profile_photo,studentQualification,student_code,student_id,student_name}=resp.data;
      txtScode.current.value=student_code;
      txtSaddress.current.value=city;
      txtSname.current.value=student_name;
      txtSemail.current.value=email_address;
      txtSmobile.current.value=mobile_number;
      txtSphoto.current.value=profile_photo;
    })
  }
  // View Student Data By Id Function Code Closoing.

  // Update Student Data Function Code Opening.
  const Delete=()=>{

  }
  // Update Student Data Function Code Opening.


  return (
    <>
      <div className="shadow-none p-3 mb-5 rounded" id="popupStudForm">
        <form encType="multipart/form-data">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3" id="popupStudInput">
                <label>Student Code</label>
                <input
                  id="inputStud"
                  ref={txtScode}
                  disabled
                  type="text"
                  className="form-control border-info"
                  placeholder="Student Code"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3" id="popupStudInput">
                <label>Student Name</label>
                <input
                  id="inputStud"
                  ref={txtSname}
                  type="text"
                  className="form-control border-info"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3" id="popupStudInput">
                <label>Email Address</label>
                <input
                  id="inputStud"
                  ref={txtSemail}
                  type="email"
                  className="form-control border-info"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3" id="popupStudInput">
                <label>Address</label>
                <input
                  id="inputStud"
                  ref={txtSaddress}
                  type="text"
                  placeholder="Students Permanent Address"
                  className="form-control border-info"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3" id="popupStudInput">
                <label>Mobile No</label>
                <input
                  id="inputStud"
                  ref={txtSmobile}
                  type="text"
                  placeholder="Mobile / Whatsapp Number"
                  className="form-control border-info"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3" id="popupStudInput">
                <label>Upload Photo</label>
                <input
                  id="inputStud"
                  ref={txtSphoto}
                  onChange={UploadFile}
                  type="file"
                  placeholder="Students Permanent Address"
                  className="form-control border-info"
                />
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6">
              <div className="mb-3 p-lg-2">
                <button
                  id="buttonStudComp"
                  type="button"
                  onClick={() => AddStudent()}
                  className="btn btn-outline-info w-50">
                 <FaUserPlus/> Add Student
                </button>
                </div>
              </div>
              <div className="col-lg-6">
                  <div className="mb-3 p-lg-2">
                  <button
                  id="buttonStudComp"
                  type="button"
                  onClick={() => AddStudent()}
                  className="btn btn-outline-warning w-50 ">
                <FaUserEdit/> Update
                </button>
                  </div>
                </div>
          </div>
        </form>
      </div>
      <div className="shadow-none p-3 mb-5 rounded" id="popupStudTable">
        <div className="overflow-auto" style={{ maxHeight: "285px" }}>
          <div className="table-responsive">
            <table
              className="table table-striped
                table-hover	
                table-borderles
                align-middle">
              <thead className="" id="theadStudComp">
                <tr>
                  <th>Sr No</th>
                  <th>Student Name</th>
                  <th>Email Address</th>
                  <th>Mobile Number</th>
                  <th>Student Code</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {studData.map((d, k) => (
                  <tr key={k}>
                    <td>{k + 1}</td>
                    <td>{d.student_name}</td>
                    <td>{d.email_address}</td>
                    <td>{d.mobile_number}</td>
                    <td>{d.student_code}</td>
                    <td>{d.city}</td>
                    <td>
                      <button type="button" className="btn btn-info btn-sm" onClick={()=>View(d.student_id)}><FaFileExport/></button>&nbsp;
                      <button type="button" className="btn btn-danger btn-sm" onClick={()=>Delete(d.student_id)}><FaRegTrashAlt/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        {studData.map((d, k) => (
          <div className="col-lg-4"  key={k}>
            <div className="card mb-3"style={{maxWidth:"540px"}} id="studDetailCard">
              <div className="row g-0"> 
              <div className="col-md-4">
              <img
                src={d.profile_photo}
                className="img-fluid rounded-start"
                alt="..."
              />
              </div>     
              <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{d.student_name}</h5>
                <p className="card-text">Code : {d.student_code}</p>
              </div>
              {/* <div className="card-footer">
                <button
                  id="btnStudCard"
                  type="button"
                  className="btn btn-info btn-sm">
                  Edit
                </button>
                &nbsp;
                <button
                  id="btnStudCard"
                  type="button"
                  className="btn btn-danger btn-sm">
                  Delete
                </button>
              </div> */}
              </div>          
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
