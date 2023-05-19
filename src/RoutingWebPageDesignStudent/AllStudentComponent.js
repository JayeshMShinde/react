import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const AllStudCom = () => {
    const txtstudname = useRef();
    const txtstudecode = useRef();
    const txtcity = useRef();
    const txtemail = useRef();
    const txtmobile = useRef();
    const [students, setStudents] = useState([]);
    const [ file,setFile] = useState();
    useEffect(function () {
        getStudents();
        GetNextCode();
    }, []);


    const uploadFile=(event)=>{
        var e = event.target.files[0];
        console.log(e);
        setFile(e)
    }
    const AddStudents = () => {
        let stnm = txtstudname.current.value;
        let email = txtemail.current.value;
        let mn = txtmobile.current.value;
        let city = txtcity.current.value;
        let code = txtstudecode.current.value;

        let formdata = new FormData();

        formdata.append("profile_photo",file);
        formdata.append("student_name",stnm);
        formdata.append("student_code",code);
        formdata.append("email_address",email);
        formdata.append("mobile_no",mn);
        formdata.append("city",city);
        
        axios({
            url: 'http://localhost:9090/api/student',
            method: 'post',
            data:formdata
        }).then((e) => {
            console.log(e.data);
            getStudents();
            SendMail();
            ClearData();
        })
    }

    const GetNextCode = () => {
        axios
            .get('http://localhost:9090/api/nextcode')
            .then((e) => (txtstudecode.current.value = e.data.student_code));
    }

    const getStudents = () => {
        axios({
            url: 'http://localhost:9090/api/student',
            method: 'get',
            contenttype: 'application/json'
        }).then((e) => {
            console.log(e.data)
            setStudents(e.data);
        })
    }

    const SendMail = () => {
        axios
            .post('http://localhost:9090/api/sendmail',txtemail.current.value)
            .then(function(resp){
                console.log(resp);
            });
    }

    
    const ClearData=()=>{
        txtemail.current.value = "";
        txtcity.current.value = "";
        txtmobile.current.value = "";
        txtstudname.current.value = "";
    }


    return (
        <div>
            {/* 
                student_id
                password
                student_code
                student_name
                email_address
                mobile_no
                profilephoto
                city
                qualification
            */}
            <form onSubmit={() => SendMail()}>
                <table className="form-group">
                    <tr>
                        <th>
                            Student Id:
                        </th>
                        <th>
                            <input className="form-control" type="text" disabled />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Student Name:
                        </th>
                        <th>
                            <input className="form-control" type="text" ref={txtstudname} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Student code:
                        </th>
                        <th>
                            <input className="form-control" type="text" ref={txtstudecode} disabled />
                        </th>
                    </tr>

                    <tr>
                        <th>
                            Email Address:
                        </th>
                        <th>
                            <input className="form-control" type="text" ref={txtemail} />                            
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Mobile No.:
                        </th>
                        <th>
                            <input className="form-control" type="text" ref={txtmobile} />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Profile Photo:
                        </th>
                        <th>
                            <input className="form-control" type="file" onChange={(e)=>uploadFile(e)}/>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            City:
                        </th>
                        <th>
                            <input className="form-control" type="text" ref={txtcity} />
                        </th>
                    </tr>
                    {/* <tr>
                    <th>
                        Qualification:
                    </th>
                    <th>
                        <select ref={ddqual}> 
                            <option>Select Qualification</option>
                            {
                                qualification.map((d,k)=>(
                                    <option key={k} value={d.qualificaton_id}>{d.qualification}</option>
                                ))
                            }
                        </select>
                    </th>
                </tr>   */}
                    <tr>
                        <th>
                            <input className="btn btn-primary" type="button" value="sumbit" onClick={() => AddStudents()} />
                        </th>
                    </tr>
                </table>
            </form>
            <hr />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student Code</th>
                        <th>Password</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                        <th>Profile Photo</th>
                        <th>City</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        students.map((d, k) => (
                            <tr key={k}>
                                <th>{k + 1}</th>
                                <th>{d.student_name}</th>
                                <th>{d.student_code}</th>
                                <th>{d.password}</th>
                                <th>{d.email_address}</th>
                                <th>{d.mobile_no}</th>
                                <th>{d.profile_photo}</th>
                                <th>{d.city}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}