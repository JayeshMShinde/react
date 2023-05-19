import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";

export const Content = () => {

    const content_id = useRef();
    const content_name = useRef();
    const topic_id = useRef();

    const [topics, setTopic] = useState([]);
    const [content, setContent] = useState([]);
    
    useEffect(function(){
        GetTopic();
        GetContent();
    },[]);

    const AddContent = () => {
        var st = { "content_name": content_name.current.value, "topic": { "topic_id": topic_id.current.value } };
        console.log(st);
        axios({
            url: 'http://localhost:9090/api/content',
            method: 'post',
            data: (st)
        }).then(e => {
            // console.log(e)
            alert("content add successfully");
            GetContent();
        })
    }

    
    const GetTopic=()=>{
        axios({
            url: 'http://localhost:9090/api/topic',
            method: 'get',
            contentType: 'application/json'
        }).then(e => {
            // console.log(e)
            setTopic(e.data)
        })
    }

    const GetContent=()=>{
        axios({
            url:'http://localhost:9090/api/content',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            setContent(e.data);
        })
    }
   
    return (
        <div>
            <div>
                <div>
                    <table>
                        <thead>
                            {/* <tr>
                                <th>Content Id</th>
                                <th><input type="text" ref={content_id} /></th>
                            </tr> */}
                            <tr>
                                <th>Topic Name</th>
                                <th>
                                    <select ref={topic_id}>
                                        <option selected disabled>select Topic</option>
                                        {topics.map((d, k) => (
                                            <option key={k} value={d.topic_id}>{d.topic_name}</option>
                                        ))}
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <th>Content Name</th>
                                <th><input type="text" ref={content_name} /></th>
                            </tr>
                            <tr>
                                <th><input type="button" value="submit" onClick={() => AddContent()} /></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <br/>
                <div>
                    <table className="table table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Content Name</th>
                                <th>Topic Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map((d, k) => (
                                <tr key={k}>
                                    <td>{k + 1}</td>
                                    <td>{d.content_name}</td>
                                    <td>{d.topic.topic_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}