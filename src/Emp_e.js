import React, { useState } from "react";

const Emp =()=>{
    const [msg,setmessage] = useState("Welcome");
    //useState : variable declartion
    const display =()=>{
        alert("Clicked");
        setmessage("you clicked on button");
    }
    return(
        <div>
            <input type="button" value="Display" onClick={()=>display()}/>
            <h1>{msg}</h1>
        </div>
    )
}
export default Emp;

