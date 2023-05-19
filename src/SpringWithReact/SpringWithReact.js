import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Student=()=>{
    const [StudData,setStudentdata] = useState([]);
    const textrno =useRef("");
    const textname =useRef("");
    const textenglish =useRef("");
    const textmaths =useRef("");
    const textscience =useRef("");

    useEffect(function(){
        GetStudent();
    },[]);

    const GetStudent=()=>{
        axios({
            url:'http://localhost:9090/api/student',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            setStudentdata(e.data);
        })
    }

    const AddStudent=()=>{
        var n = textname.current.value;
        var e = textenglish.current.value;
        var m = textmaths.current.value;
        var s = textscience.current.value;
        var st ={"name":n,"english":e,"maths":m,"science":s};
        axios({
            url:'http://localhost:9090/api/student',
            method:'post',
            data:(st),
        }).then(e=>{
            console.log(e.data);
            alert("Data Added Successfully")
            GetStudent();
            ClearData();
        })
    }    

    
    const UpdateStudent=()=>{
        var r = textrno.current.value;
        var n = textname.current.value;
        var e = textenglish.current.value;
        var m = textmaths.current.value;
        var s = textscience.current.value;
        var st ={"rno":r,"name":n,"english":e,"maths":m,"science":s};
        axios({
            url:'http://localhost:9090/api/student',
            method:'put',
            data:(st),
        }).then(e=>{
            console.log(e.data);
            alert("Data Updated Successfully")
            GetStudent();
            ClearData();
        })
    }    


    const ClearData=()=>{
        textrno.current.value="";
        textname.current.value="";
        textenglish.current.value="";
        textmaths.current.value="";
        textscience.current.value="";
    }
    const ViewStudent=(p)=>{
        textrno.current.value=p.rno;
        textname.current.value=p.name;
        textenglish.current.value=p.english;
        textmaths.current.value=p.maths;
        textscience.current.value=p.science;
    }
    const DeleteStudent=(rno)=>{
        axios({
            url:'http://localhost:9090/api/student/'+rno,
            method:'delete',
            
        }).then(e=>{
            console.log(e.data);
            alert("Data Deleted Successfully")
            GetStudent();
            ClearData();
        })
    }
    return(

<div>
            <h2>
                Student Operation 
            </h2>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Roll NO :</td>
                        <td>
                            <input type="text" disabled="true" ref={textrno} />
                        </td>
                    </tr>
                    <tr>
                        <td>Student Name :</td>
                        <td>
                            <input type="text" ref={textname} />
                        </td>
                    </tr>
                    <tr>
                        <td>English :</td>
                        <td>
                            <input type="text" ref={textenglish} />
                        </td>
                    </tr>
                    <tr>
                        <td>Maths :</td>
                        <td>
                            <input type="text" ref={textmaths} />
                        </td>
                    </tr>
                    <tr>
                        <td>Science :</td>
                        <td>
                            <input type="text" ref={textscience} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Sumbit" onClick={()=>AddStudent()} />
                            &nbsp;
                            <input type="button" value="Update" onClick={()=>UpdateStudent()} />
                            &nbsp;
                            <input type="button" value="ClearData" onClick={()=>ClearData()} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Student Name</th>
                            <th>English</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            StudData.map((d,k)=>(
                                <tr key={k}>
                                    <td>{d.rno}</td>
                                    <td>{d.name}</td>
                                    <td>{d.english}</td>
                                    <td>{d.maths}</td>
                                    <td>{d.science}</td>
                                    <td>
                                    <input type="button" value="View" onClick={()=>ViewStudent(d)} />
                                    &nbsp;
                                        <input type="button" value="Delete" onClick={()=>DeleteStudent(d.rno)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}   