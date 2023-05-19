import axios from "axios";
import React, { useState } from "react";
export const Employee=()=>{

    const [ename,setName]=useState("");
    const [file,setFile]=useState();

    const AddEmployee=()=>{

        var formdata=new FormData();
        formdata.append("employee_name",ename);
        formdata.append("file",file);
        axios({
            url:'http://localhost:9090/addemployee',
            method:'post',
            data:formdata,
            headers: {
                'content-type': 'multipart/form-data',
              }
        }).then(e=>{
            console.log(e);
        })

    }
    const UploadFile=(e)=>{
        console.log(e.target.files[0])
        setFile(e.target.files[0]);
    }

    const  getName=(e)=>{
        console.log(e.target.value)
        setName(e.target.value);
    }
    return(
        <div>
            {/* <form  encType="multipart/form-data" onSubmit={()=>AddEmployee()}> */}
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Employee Name</td>
                            <td><input type="text" onChange={getName}/></td>
                        </tr>
                        <tr>
                            <td>Upload Image</td>
                            <td><input type="file" onChange={UploadFile}/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="Submit" onClick={()=>AddEmployee()}/></td>
                        </tr>
                    </tbody>
                </table>
            {/* </form> */}

            
        </div>
    )
}