import React, { useRef, useState } from "react";

const Sqr =()=>{
    const [msg,setmessage] = useState("Welcome");
    //useState : variable declartion
    const num1 = useRef();
    const num2 = useRef();
    //useState : variable declartion
    const display =()=>{
        var n = Number(num1.current.value);
        var n2 = Number(num2.current.value);
        var b = n*n2;
        setmessage("Mul is:"+b);
    }
    return(
        <div>
            Number 1<input type="text" ref={num1}/><br/>
            Number 2<input type="text" ref={num2}/><br/>
            <input type="button" value="Display" onClick={()=>display()}/>
            <h1>{msg}</h1>
        </div>
    )
}
export default Sqr;

