import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Visitor = () => {

    const txtid = useRef("");
    const txtemail = useRef("");
    const txtentry = useRef("");
    const txtname = useRef("");
    const txtleave = useRef("");
    const txtmeet = useRef("");
    const txtphone = useRef("");
    const [visitor,setVisitor] = useState([]);

    useEffect(function(){
        getVisitor();

    },[]);


    const AddVisitor=()=>{
        var st ={
            "visitor_name":txtname.current.value,
            "visitor_email":txtemail.current.value,
            "mobile_no":txtphone.current.value,
            "entry_time":txtentry.current.value,
            "leave_time":txtleave.current.value,
            "meet_reason":txtmeet.current.value
        }
        axios({
            url:'http://localhost:9090/api/visitor',
            method:'post',
            data:(st)
        }).then((e)=>{
            console.log(e.data);
            getVisitor();
            cleareData();

        })
    }

    const UpdateVisitor=()=>{
        var st ={
            "id":txtid.current.value,
            "visitor_name":txtname.current.value,
            "visitor_email":txtemail.current.value,
            "mobile_no":txtphone.current.value,
            "entry_time":txtentry.current.value,
            "leave_time":txtleave.current.value,
            "meet_reason":txtmeet.current.value
        }
        axios({
            url:'http://localhost:9090/api/visitor',
            method:'put',
            data:(st)
        }).then((e)=>{
            console.log(e.data);
            getVisitor();
            cleareData();

        })
        
    }

    const ViewVisitor=(p)=>{
        txtid.current.value = p.id;
        txtname.current.value = p.visitor_name;
        txtemail.current.value = p.visitor_email;
        txtphone.current.value = p.mobile_no;
        txtentry.current.value = p.entry_time;
        txtleave.current.value = p.leave_time;
        txtmeet.current.value = p.meet_reason;
    }
    const DeleteVisitor=(id)=>{
        axios({
            url:'http://localhost:9090/api/visitor/'+id,
            method:'delete'
        }).then((e)=>{
            console.log(e.data);
            getVisitor();
        })
    }

    const getVisitor=()=>{
        axios({
            url:'http://localhost:9090/api/visitor',
            method:'get',
            contenttype:'application/json'
        }).then((e)=>{
            console.log(e.data);
            setVisitor(e.data);
        })
    }

    const cleareData=()=>{
        txtid.current.value = " ";
        txtname.current.value = " ";
        txtemail.current.value = " ";
        txtphone.current.value = " ";
        txtentry.current.value = " ";
        txtleave.current.value = " ";
        txtmeet.current.value = " ";
    }
    return (
        <div>
            <form className="form-group">
                <div className="row">
                    <div className="col-md-4">
                    <label>Visitor Id</label>
                        <input className="form-control" type="text" ref={txtid}  disabled/>
                        &nbsp;
                        <label>Visitor Name</label>
                        <input className="form-control" type="text" ref={txtname} />
                        &nbsp;
                        <label>Email Id</label>
                        <input className="form-control" type="text" ref={txtemail} />
                        &nbsp;
                        <label>Mobile Number</label>
                        <input className="form-control" type="text" ref={txtphone} />
                    </div>
                    <div className="col-md-4">
                        &nbsp;
                        <label>Entry Time</label>
                        <input className="form-control" type="text" ref={txtentry} />
                        &nbsp;
                        <label>Leave Time</label>
                        <input className="form-control" type="text" ref={txtleave} />
                        &nbsp;
                        <label>Reason to Meet</label>
                        <textarea className="form-control" ref={txtmeet} />
                    </div>
                    <div className="col-md-2">
                    &nbsp;
                    <input className="form-control btn btn-primary" type="button" value="Sumbit" onClick={()=>AddVisitor()} />
                    &nbsp;
                    <input className="form-control btn btn-primary" type="button" value="Update" onClick={()=>UpdateVisitor()} />
                </div>
                </div>
            </form>
        &nbsp;
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Visitor Name</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                    <th>Entry Time</th>
                    <th>Leave Time</th>
                    <th>Meet Reason</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    visitor.map((d,k)=>(
                        <tr key={k}>
                            <th>{d.id}</th>
                            <th>{d.visitor_name}</th>
                            <th>{d.visitor_email}</th>
                            <th>{d.mobile_no}</th>
                            <th>{d.entry_time}</th>
                            <th>{d.leave_time}</th>
                            <th>{d.meet_reason}</th>
                            <th>
                                <input type="button" value="View" onClick={()=>ViewVisitor(d)} />
                                &nbsp;
                                <input type="button" value="Delete" onClick={()=>DeleteVisitor(d.id)} />
                            </th>
                        </tr>
                    ))
                }
            </tbody>

        </table>

        </div>
    )
}