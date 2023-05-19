import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Topicscontent=()=>{
    const txtcontentname = useRef();
    const txtcontenttutorial = useRef();
    const topic_id = useRef();
    const [topics,setTopics] = useState([]);
    const [topiccontent,setTopicContent] = useState([]);
    useEffect(function(){
        getTopics();
        getTopicsContent();
    },[]);

    const AddTopicContent=()=>{
        var st = {"content_name":txtcontentname.current.value,"content_tutorial":txtcontenttutorial.current.value,"topics":{"topic_id":topic_id.current.value}};
        console.log(st);    
        axios({
            url:'http://localhost:9090/api/topicscontent',
            method:'post',
            data:(st)
        }).then((e)=>{
            console.log(e.data);
            getTopicsContent();
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
    
    const getTopicsContent=()=>{
        axios({
            url:'http://localhost:9090/api/topicscontent',
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data)
            setTopicContent(e.data);
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <th>
                        Select Topic:
                    </th>
                    <th>
                        <select ref={topic_id}>
                            <option selected disabled> Select Topic</option>
                            {
                                topics.map((d,k)=>(
                                    <option key={k} value={d.topic_id}>{d.topic_name}</option>
                                ))
                                
                            }    
                        </select>
                    </th>
                </tr>  
                
                <tr>
                    <th>
                        Content Name:
                    </th>
                    <th>
                        <input type="text" ref={txtcontentname} />
                    </th>
                </tr>  
                
                <tr>
                    <th>
                        Content Tutorial:
                    </th>
                    <th>
                        <input type="text" ref={txtcontenttutorial} />
                    </th>
                </tr> 
                <tr>
                    <th>
                        <input type="button" value="sumbit" onClick={()=>AddTopicContent()} />
                    </th>
                </tr>  
            </table>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Content_id</th>
                        <th>Content_name</th>
                        <th>Content_tutorial</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topiccontent.map((d,k)=>(
                            <tr key={k}>
                                <td>{k+1}</td>
                                <td>{d.content_name}</td>
                                <td>{d.content_tutorial}</td>
                                <td>{d.topics.topic_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}