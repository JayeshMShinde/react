import React, { useRef, useState } from "react";

export const Parent=()=>{
    const [name,setName] = useState("");
    const call=(e)=>{
        setName(e);
    }
    return(
        <div>
            <Child onClick={call}/>
            <h1>{name}</h1>
        </div>
    )
}
const Child =(props)=>{
    const empName=useRef("");
    const Display=()=>{
        var e = empName.current.value;
        props.onClick(e);
    }
    return(
        <div>
            Name <input type="text" ref={empName}/>&nbsp;
            <input type="button" value="Display" onClick={()=>Display()}/>
            <h1>{props.msg}</h1>
        </div>
    )
}