import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login =()=>{
    const user_name=useRef("");
    const password = useRef("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();

    const LoginCheck=()=>{
        var u = user_name.current.value;
        var p = password.current.value;
        if(u=="Jay" && p=="12345"){
            navigate("/main");
        }
        else{
            setMessage("Invalid UserName and Password");
        }
    }

    return(
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>UserName</td>
                        <td><input type="text" ref={user_name}/></td>
                    </tr>
                    
                    <tr>
                        <td>Password</td>
                        <td><input type="password" ref={password}/></td>
                    </tr>
                    
                    <tr>
                        <td><input type="button" value="Login" onClick={()=>LoginCheck()}/></td>
                    </tr>
                </tbody>
            </table>
            <h2>{message}</h2>
        </div>
    )
}