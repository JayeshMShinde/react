import React, { useState } from "react";

const Employee =()=>{
    const [msg,setmessage] = useState("welcome");

    return(
        <div>
            <h2>{msg}</h2>
        </div>
    )
}
export default Employee;