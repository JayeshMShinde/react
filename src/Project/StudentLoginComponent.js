import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const StudentLogin = () => {

    useState[login,setLogin]=("");

    useEffect(function(){
        axios({
            url:'http://localhost:9090/api/studentdeatils',
            method:'get',
            contentType:'application/json'
        }).then((e) => {
            setStudent(e.data);
        })
    },[])

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Student Code</td>
                        <td><input type="text" ref={txtcode} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" ref={txtpassword} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="Login" onClick={() => CheckLogin()} /></td>
                    </tr>
                </tbody>
            </table>
            <h3>{message}</h3>
        </div>
    )
}