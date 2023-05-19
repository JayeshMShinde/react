import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Question = () => {

    const content_id = useRef();
    const topic_id = useRef();

    const txtquestion = useRef();
    const txtoption1 = useRef();
    const txtoption2 = useRef();
    const txtoption3 = useRef();
    const txtoption4 = useRef();
    const correctoption = useRef();

    const [topics, setTopic] = useState([]);
    const [content, setContent] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(function () {
        GetTopic();
        GetContent();
        GetContentQuestion();
    }, []);



    const AddQuestion = () => {
        var cont = content_id.current.value;
        var st = {
            "questions":txtquestion.current.value,
            "option1":txtoption1.current.value,
            "option2":txtoption2.current.value,
            "option3":txtoption3.current.value,
            "option4":txtoption4.current.value,
            "correct_answer_no":correctoption.current.value,
            "content":{"content_id":cont}
        }
        console.log(st);
        axios({
            url:'http://localhost:9090/api/content_question',
            method:'post',
            data:(st)
        }).then(e => {
            console.log(e)
            alert("qusetion add successfully");
            // GetContentQuestion();
        })
    }

    const GetTopic = () => {
        axios({
            url: 'http://localhost:9090/api/topic',
            method: 'get',
            contentType: 'application/json'
        }).then(e => {
            setTopic(e.data)
            GetContent();
        })
    }

    const GetContent = () => {
        axios({
            url: 'http://localhost:9090/api/content',
            method: 'get',
            contentType: 'application/json'
        }).then(e => {
            setContent(e.data);
        })
    }

    const GetTopicWiseContent = () => {
        var topic = topic_id.current.value;
        console.log(topic);
        axios({
            url: 'http://localhost:9090/api/topicwisecontents/' + topic,
            method: 'get',
            contentType: 'application/json'
        }).then(e => {
            console.log(e.data)
            setContent(e.data)
        })
    }

    const  GetContentQuestion=()=>{
        axios({
            url:'http://localhost:9090/api/content_question',
            method:'get',
            contentType:'application/json'
        }).then((e)=>{
            console.log(e.data)
            setQuestion(e.data);
        })
    }

    return (
        <div>
            <div className="row">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Select Topic</th>
                                <th>
                                    <select ref={topic_id} onChange={() => GetTopicWiseContent()}>
                                        <option selected disabled>select Topic</option>
                                        {topics.map((d, k) => (
                                            <option key={k} value={d.topic_id}>{d.topic_name}</option>
                                        ))}
                                    </select>
                                </th>
                                <th>Select Content</th>
                                <th>
                                    <select ref={content_id}>
                                        <option selected disabled>select content</option>
                                        {content.map((d, k) => (
                                            <option key={k} value={d.content_id}>{d.content_name}</option>
                                        ))}
                                    </select>
                                </th>
                            </tr>
                            {/* <tr>
                                <th><input type="button" value="submit" onClick={() => AddQuestion()} /></th>
                            </tr> */}
                        </thead>
                    </table>
                </div>
            </div>
            <br />
            <div className="col-md-10">
                <textarea placeholder="write here questions"   ref={txtquestion} style={{ width: "100%" }}></textarea>
            </div>
            <div className="col-md-10">
                <textarea placeholder="option1" ref={txtoption1}  style={{ width: "45%" }}></textarea>
                &nbsp;
                <textarea placeholder="option2" ref={txtoption2}  style={{ width: "45%" }}></textarea>
            </div>
            <div className="col-md-10">
                <textarea placeholder="option3" ref={txtoption3}  style={{ width: "45%" }}></textarea>
                &nbsp;
                <textarea placeholder="option4" ref={txtoption4}  style={{ width: "45%" }}></textarea>
            </div>
            <div className="col-md-10">
                <textarea placeholder="correct answer" ref={correctoption}  style={{ width: "70%" }}></textarea>
            </div>
            <input type="button" value="submit" onClick={() => AddQuestion()} />
           
            <br />
            <div>
                <table className="table table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Content</th>
                            <th>Question</th>
                            <th>option1</th>
                            <th>option2</th>
                            <th>option3</th>
                            <th>option4</th>
                            <th>correct option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {question.map((d, k) => (
                            <tr key={k}>
                                <td>{k + 1}</td>
                                <td>{d.content.content_name}</td>
                                <td>{d.questions}</td>
                                <td>{d.option1}</td>
                                <td>{d.option2}</td>
                                <td>{d.option3}</td>
                                <td>{d.option4}</td>
                                <td>{d.correct_answer_no}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}