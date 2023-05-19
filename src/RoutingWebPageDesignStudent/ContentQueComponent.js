import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Alert } from "bootstrap";

export const ContentQueCom =()=>{
    const txtquestion = useRef();
    const txtoption1 = useRef();
    const txtoption2 = useRef();
    const txtoption3 = useRef();
    const txtoption4 = useRef();
    const txtcorrectoption = useRef();
    const ddcontent = useRef();
    const ddtopic = useRef();
    const [topics, setTopics] = useState([]);
    const [topiccontent, setTopicContent] = useState([]);
    const [contentquestion,setContentQuestion] = useState([]);
    useEffect(function(){
        getTopics();
        getTopicsContent();
        getContentQuestion();
    },[]);

    const AddQuestion=()=>{
        var cont  = ddcontent.current.value;
        var st = {
            "question":txtquestion.current.value,
            "option1":txtoption1.current.value,
            "option2":txtoption2.current.value,
            "option3":txtoption3.current.value,
            "option4":txtoption4.current.value,
            "correctoptionnumber":txtcorrectoption.current.value,
            "content":{"content_id":cont}
        }
        console.log(st);    
        axios({
            url:'http://localhost:9090/api/contentquestion',
            method:'post',
            data:(st)
        }).then((e)=>{
            console.log(e.data);
            alert("Question Added Successfully")
            getContentQuestion();
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
            getTopicsContent(); 
        })
    }

    const TopicswiseContent=()=>{
        var tid = ddtopic.current.value;
        console.log(tid)
        axios({
            url:'http://localhost:9090/api/topicwisecontent/'+tid,
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            setTopicContent(e.data);
            console.log(e.data)
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

    const  getContentQuestion=()=>{
        axios({
            url:'http://localhost:9090/api/contentquestion',
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data)
            setContentQuestion(e.data);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 form-group">
                    <label>
                        Select Topics:
                    </label>
                    &nbsp; 
                    <select ref={ddtopic} className="form-control" onChange={()=>TopicswiseContent()}>
                        <option selected disabled>Select Topic</option>
                        {
                            topics.map((d,k)=>(
                                <option key={k} value={d.topic_id}>{d.topic_name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label>
                        Select Content:
                    </label>
                    &nbsp;
                    <select ref={ddcontent} className="form-control">
                        <option selected disabled> Select Content</option>
                        {
                            topiccontent.map((d,k)=>(
                                <option key={k} value={d.content_id}>{d.content_name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            &nbsp;
            <div className="row">
                    <div className="col-md-10">
                        
                        <textarea className="form-control" placeholder="Question" style={{width:"100%"}} ref={txtquestion}/>
                    </div>
            </div>
            &nbsp;
            <div className="row">
                    <div className="col-md-5">
                        
                        <textarea className="form-control" placeholder="Option 1" style={{width:"100%"}} ref={txtoption1}/>
                    </div>
                    &nbsp;
                    <div className="col-md-5">
                        
                        <textarea className="form-control" placeholder="Option 2" style={{width:"100%"}} ref={txtoption2}/>
                    </div>
            </div>
            &nbsp;
            <div className="row">
                    <div className="col-md-5">
                        
                        <textarea className="form-control" placeholder="Option 3" style={{width:"100%"}} ref={txtoption3}/>
                    </div>
                    &nbsp;
                    <div className="col-md-5">
                        
                        <textarea className="form-control" placeholder="Option 4" style={{width:"100%"}} ref={txtoption4}/>
                    </div>
            </div>
            &nbsp;
            <div className="row">
                    <div className="col-md-5">
                        <input type="text" className="form-control" ref={txtcorrectoption}/>
                    </div>
                    &nbsp;
                    <div className="col-md-3">
                        <input type="button" value="Sumbit" className="form-control btn btn-primary" onClick={()=>AddQuestion()}/>
                    </div>
            </div>
            <hr />
            <div className="col-md-11">
                 <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Content</th>
                                <th>Question</th>
                                <th>Option1</th>
                                <th>Option2</th>
                                <th>Option3</th>
                                <th>Option4</th>
                                <th>CorrectOptionNumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contentquestion.map((d,k)=>(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <th>{d.content.content_name}</th>
                                        <th>{d.question}</th>
                                        <th>{d.option1}</th>
                                        <th>{d.option2}</th>
                                        <th>{d.option3}</th>
                                        <th>{d.option4}</th>
                                        <th>{d.correctoptionnumber}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                 </table>
            </div>
        </div>
    )
}