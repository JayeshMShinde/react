import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Studdetals=()=>{
    const txtstudname = useRef();
    const txtstudecode = useRef();
    const txtcity = useRef();
    const txtemail = useRef();
    const txtmobile = useRef();
    const txtprofile = useRef();
    const ddqual = useRef();
    const [qualification,setQualification] = useState([]);
    const [students ,setStudents] = useState([]);
    useEffect(function(){
        GetQualification();
        getStudents();
        GetNextCode();
    },[]);

    const AddStudents=()=>{
        var stnm=txtstudname.current.value;
        var email = txtemail.current.value;
        var mn = txtmobile.current.value;
        var city=txtcity.current.value;
        var profilephoto = txtprofile.current.value;
        var code = txtstudecode.current.value;
        var st={"student_name":stnm,"student_code":code,"email_address":email,"mobile_no":mn,"profile_photo":profilephoto,"city":city};
        axios({
            url:'http://localhost:9090/api/student',
            method:'post',
            data:(st)
        }).then((e)=>{
            console.log(e.data);
            getStudents();
        })
    }

    const GetNextCode=()=>{
        axios
        .get('http://localhost:9090/api/nextcode')
        .then((e)=>(txtstudecode.current.value = e.data.student_code));  
    }

    const getStudents=()=>{
        axios({
            url:'http://localhost:9090/api/student',
            method:'get',
            contenttype:'application/json'
        }).then((e)=>{
            console.log(e.data)
            setStudents(e.data);
        })
    }

    const GetQualification=()=>{
        axios({
            url:'http://localhost:9090/api/student/qualfication',
            method:'get',
            contenttype:'application/json'
        }).then((e)=>{
            console.log(e.data.student_code)
            setQualification(e.data);
        })
    }

    // const getQualification=()=>{
    //     axios({
    //         url:'http://localhost:9090/api/student',
    //         method:'get',
    //         contenttype:'application/json'
    //     }).then((e)=>{
    //         console.log(e.data)
    //         setStudents(e.data);
    //     })
    // }
    return(
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
            <table>
                <tr>
                    <th>
                        Student Id:
                    </th>
                    <th>
                        <input type="text" disabled/>
                    </th>
                </tr>  
                <tr>
                    <th>
                        Student Name:
                    </th>
                    <th>
                        <input type="text" ref={txtstudname}/>
                    </th>
                </tr>  
                <tr>
                    <th>
                        Student code:
                    </th>
                    <th>
                        <input type="text" ref={txtstudecode} disabled/>
                    </th>
                </tr>  
                 
                <tr>
                    <th>
                        Email Address:
                    </th>
                    <th>
                        <input type="text" ref={txtemail}/>
                    </th>
                </tr>  
                <tr>
                    <th>
                        Mobile No.:
                    </th>
                    <th>
                        <input type="text" ref={txtmobile}/>
                    </th>
                </tr>  
                <tr>
                    <th>
                        Profile Photo:
                    </th>
                    <th>
                        <input type="text" ref={txtprofile}/>
                    </th>
                </tr>  
                <tr>
                    <th>
                        City:
                    </th>
                    <th>
                        <input type="text" ref={txtcity}/>
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
                        <input type="button" value="sumbit"  onClick={()=>AddStudents()} />
                    </th>
                </tr>  
            </table>
            <hr/>
            <table className="table table-bordered">
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
                        students.map((d,k)=>(
                    <tr key={k}>
                        <th>{k+1}</th>
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