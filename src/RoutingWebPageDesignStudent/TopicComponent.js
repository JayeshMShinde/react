import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useEffect } from "react";

export const TopicCom = () => {
    const txttopic = useRef("");
    const [topics, setTopics] = useState([]);


    useEffect(function () {
        getTopics();
    }, []);

    const AddTopics = () => {
        var t = txttopic.current.value;
        var st = { "topic_name": t };
        axios({
            url: 'http://localhost:9090/api/topics',
            method: 'post',
            data: (st)
        }).then((e) => {
            console.log(e.data);
            getTopics();
            ClearData();
        })
    }


    const getTopics = () => {
        axios({
            url: 'http://localhost:9090/api/topics',
            method: 'get',
            contentType: 'application/json'
        }).then((e) => {
            console.log(e.data)
            setTopics(e.data);
        })
    }

    const ClearData=()=>{
        txttopic.current.value = "";
    }

    return (
        <div>
            <label>
                <h2>Topic</h2>
            </label>
            
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
                    <input className="btn btn-success" type="button" value="sumbit" onClick={() => AddTopics()} />
                    </th>
                </tr>
            </table>
               
            <hr />
            <table className=" table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Tpoic _id</th>
                        <th>Topic_name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topics.map((d, k) => (
                            <tr key={k}>
                                <td>{k + 1}</td>
                                <td>{d.topic_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}