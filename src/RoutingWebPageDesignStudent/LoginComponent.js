import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../RoutingWebPageDesignStudent/login.css';

export const Login = () => {
    const user_name = useRef("");
    const password = useRef("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const LoginCheck = () => {
        var u = user_name.current.value;
        var p = password.current.value;
        if (u === "admin" && p === "12345") {
            navigate("/main");
        }
        else {
            var st = { "student_code": u, "password": p };
            console.log(st);
            axios({
                url: 'http://localhost:9090/api/checklogin',
                method: 'post',
                data: st,
                contentType: 'application/json'
            }).then(d => {
                if (d.data !== "") {
                    localStorage.setItem("studwent_id", d.data.student_id);
                    navigate("/dashboard");

                }
                else {
                    setMessage("Invalid Student Code or Password")
                }
                console.log(d.data)
            })
        }
    }
    const ClearData=()=>{
      user_name.current.value=" ";
      password.current.value = " ";
    }
    return (
      <div class="bg">
      <div class="css_login">
      <div class="panel-primary" >
                    <div class="panel-heading" id="panelcss">
                        <h1 class="h1css"><b>Welcome to Login Page</b></h1>
                    </div>
                </div>
                <div class="panel-body" id="panelcss">
                    <table align="center">
                        <tr>
                            <th><input type="text" class="form-control" placeholder="Student Id" ref={user_name} pattern={user_name}/></th>
                            <th> <span id="sid1" class="spancss" style={{"color":"white"}}></span></th>
                        </tr>
                        <tr><th><br /></th></tr>
                        <tr>
                            <th><input type="password" class="form-control" placeholder="Password" ref={password} pattern={password}/></th>
                            <th><span id="sid2" class="spancss" style={{"color":"white"}}></span></th>
                        </tr>
                    </table>
                </div>
                
                <div class="panel-footer panel-css" align="center" id="panelcss">
                    <table>
                        <tr>
                            <th>
                                <input type="button" value="Login" className="btn btn-primary login" onClick={()=>LoginCheck()}/>
                                &nbsp;
                                <input type="reset" value="Reset" class="btn btn-danger reset" onClick={()=>ClearData()}/>
                            </th>
                        </tr>
                    </table>
                </div>
          </div>
        </div>
        // <div className="contaier">
        //     <table>
        //         <thead></thead>
        //         <tbody>
        //             <tr>
        //                 <td>UserName</td>
        //                 <td><input type="text" ref={user_name}/></td>
        //             </tr>

        //             <tr>
        //                 <td>Password</td>
        //                 <td><input type="password" ref={password}/></td>
        //             </tr>

        //             <tr>
        //                 <td><input type="button" value="Login" onClick={()=>LoginCheck()}/></td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     <h2>{message}</h2>
        // </div>
    )
}