import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Topicsadd=()=>{
    const txttopic = useRef("");
    const [topics,setTopics] = useState([]);
    useEffect(function(){
        getTopics();
    },[]);

    const AddTopics=()=>{
        var t = txttopic.current.value;
        var st = {"topic_name":t};
        axios({
            url:'http://localhost:9090/api/topics',
            method:'post',
            data:(st)
        }).then((e)=>{
            console.log(e.data);
            getTopics();
        })
    }

    
    const getTopics=()=>{
        axios({
            url:'http://localhost:9090/api/topics',
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data)
            setTopics(e.data);
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <th>
                        Topic Name:
                    </th>
                    <th>
                        <input type="text" ref={txttopic} />
                    </th>
                </tr>  
                
                <tr>
                    <th>
                        <input type="button" value="sumbit" onClick={()=>AddTopics()} />
                    </th>
                </tr>  
            </table>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Tpoic _id</th>
                        <th>Topic_name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topics.map((d,k)=>(
                            <tr key={k}>
                                <td>{k+1}</td>
                                <td>{d.topic_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}