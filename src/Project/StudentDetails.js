import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const StudentDetails = () => {
    const txtname = useRef();
    const txtemail = useRef();
    const txtmobile = useRef();
    const txtprofilephoto = useRef();
    const txtcity = useRef();
    const txtstudcode = useRef();

    const [students, setStudent] = useState([]);
    const [file, setFile] = useState();



    useEffect(function () {
        GetStudent();
        GetNextCode()
    }, []);

    const UploadFile = (event) => {
       var e = event.target.files[0];
       console.log(e);
       setFile(e);
    }

    const AddStudent = () => {
        let student_name = txtname.current.value;
        let student_code = txtstudcode.current.value;
        let email_address = txtemail.current.value;
        let mobile_number = txtmobile.current.value;
        let city = txtcity.current.value
        let formdata = new FormData();

        formdata.append("file", file);
        formdata.append("student_name", student_name);
        formdata.append("student_code", student_code);
        formdata.append("email_address", email_address);
        formdata.append("mobile_number", mobile_number);
        formdata.append("city", city);

        console.log(formdata);
        axios({
            url:'http://localhost:9090/api/studentdeatils',
            method:'post',
            data:formdata
        }).then((resp) => {
            console.log(resp)
            alert("student add successfully");
            GetStudent();
            SendMail();
            Clear();
        })
    }

    const GetStudent = () => {
        axios({
            url:'http://localhost:9090/api/studentdeatils',
            method:'get',
            contentType:'application/json'
        }).then((e) => {
            setStudent(e.data);
        })
    }

    const Clear = () => {
        txtname.current.value = "";
        txtemail.current.value = "";
        txtmobile.current.value = "";
        txtcity.current.value = "";
        file.current.value="";
    }

    const GetNextCode = () => {
        axios
            .get("http://localhost:9090/api/nextcode")
            .then((e) => (txtstudcode.current.value = e.data.student_code));
    }

    const SendMail = () => {
        axios
            .post('http://localhost:9090/api/sendemail', txtemail.current.value)
            .then(function (resp) {
                console.log(resp);
            });
    }

    const View = (sid) => {
        axios
            .get("http://localhost:9090/api/studentdeatils/" + sid)
            .then((resp) => {
                console.log(resp);
                const { student_code, student_name, email_address, mobile_number, profile_photo, city } = resp.data
                txtname.current.value = student_name;
                txtstudcode.current.value = student_code;
                txtemail.current.value = email_address;
                txtmobile.current.value = mobile_number;
                txtcity.current.value = city;
                txtprofilephoto.current.value=profile_photo;
            })
    }

    // const UpdateStudent = () => {
    //     var st = {
    //         "student_name": txtname.current.value,
    //         "email_address": txtemail.current.value,
    //         "mobile_number": txtmobile.current.value,
    //         "profile_photo": txtprofilephoto.current.value,
    //         "city": txtcity.current.value
    //     };
    //     console.log(st);
    //     axios
    //         .put("http://localhost:9090/api/studentdeatils", st)
    //         .then((resp) => {
    //             setStudent(resp.data);
    //             alert("student update successfully");
    //         })
    // }

    return (
        <div>
            <form method="post" encType="multipart/from-data">
                <table>
                    <thead>
                        <tr>
                            <th>student name</th>
                            <th><input type="text" ref={txtname} /></th>
                        </tr>
                        <tr>
                            <th>Student Code</th>
                            <th><input type="text" ref={txtstudcode} disabled /></th>
                        </tr>
                        <tr>
                            <th>Email Address</th>
                            <th><input type="text" ref={txtemail} /></th>
                        </tr>
                        <tr>
                            <th>mobile number</th>
                            <th><input type="text" ref={txtmobile} /></th>
                        </tr>
                        <tr>
                            <th>profile photo</th>
                            <th><input type="file" onChange={(e)=>UploadFile(e)} /></th>
                        </tr>
                        <tr>
                            <th>city</th>
                            <th><input type="text" ref={txtcity} /></th>
                        </tr>
                        {/* <tr>
                        <th>qualification</th>
                        <th>
                            <select ref={ddqual}>
                                <option>select qualification</option>
                            </select>
                        </th>
                    </tr> */}

                    <br/>
                        <tr>
                            <input type="button" value="submit" className="btn btn-primary" onClick={() => AddStudent()} />
                            &nbsp;&nbsp;&nbsp;
                            {/* <input type="button" value="update" className="btn btn-danger" onClick={() => UpdateStudent()}/> */}
                        </tr>
                    </thead>
                </table>
            </form>
            <hr />
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Student name</th>
                        <th>student code</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>profile photo</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((d, k) => (
                        <tr key={k}>
                            <td>{k + 1}</td>
                            <td>{d.student_name}</td>
                            <td>{d.student_code}</td>
                            <td>{d.email_address}</td>
                            <td>{d.mobile_number}</td>
                            <td>{d.profile_photo}</td>
                            <td>{d.city}</td>
                            <td>
                                <button onClick={() => View(d.student_id)}>view</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}