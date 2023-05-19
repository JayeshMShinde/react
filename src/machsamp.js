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
    const txtstudecode = useRef();
    const [students, setStudent] = useState([]);

    useEffect(function () {
        GetStudent();
        GetNextCode();
    }, [])


    const AddStudent = () => {
        try {
            var st = {
                "student_name": txtname.current.value,
                "student_code":txtstudecode.current.value,
                "email_address": txtemail.current.value,
                "mobile_number": txtmobile.current.value,
                "profile_photo": txtprofilephoto.current.value,
                "city": txtcity.current.value
            };
            console.log(st);
            axios({
                url: 'http://localhost:9090/api/studentdeatils',
                method: 'post',
                data: (st)
            }).then((e) => {
                console.log(e)
                alert("student add successfully");
                GetStudent();
                SendMail();
                alert("email send successfully");
                Clear();
            })
        }
        catch (ero) {
            console.error(ero);
        }
    }

    const GetStudent = () => {
        axios({
            url: 'http://localhost:9090/api/studentdeatils',
            method: 'get',
            contentType: 'application/json'
        }).then(e => {
            setStudent(e.data);

        })
    }

    const Clear = () => {
        txtname.current.value = "";
        txtemail.current.value = "";
        txtmobile.current.value = "";
        txtprofilephoto.current.value = "";
        txtcity.current.value = "";
    }

    const GetNextCode = () => {
        axios
            .get('http://localhost:9090/api/nextcode')
            .then((e) => (txtstudecode.current.value = e.data.student_code));
    }

    const SendMail = () => {
        axios
            .post('http://localhost:9090/api/sendemail', txtemail.current.value)
            .then(function (resp) {
                console.log(resp);
            });
    }

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>student name</th>
                        <th><input type="text" ref={txtname} /></th>
                    </tr>
                    <tr>
                        <th>Student Code</th>
                        <th><input type="text" ref={txtstudecode} /></th>
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
                        <th><input type="text" ref={txtprofilephoto} /></th>
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
                    <tr>
                        <input type="button" value="submit" onClick={() => AddStudent()} />
                    </tr>
                </thead>
            </table>
            <hr />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Student name</th>
                        <th>student code</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>profile photo</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((d, k) => (
                        <tr key={k}>
                            <td>{d.student_name}</td>
                            <td>{d.student_code}</td>
                            <td>{d.email_address}</td>
                            <td>{d.mobile_number}</td>
                            <td>{d.profile_photo}</td>
                            <td>{d.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}