import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


export const Exam = () => {

    const examdate = useRef();
    const txtstarttime = useRef();
    const txtendtime = useRef();
    const txtTopicId = useRef();

    const [exam, setExam] = useState([]);
    const [topic, setTopic] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(function () {
        GetAllTopics();
    }, []);

    const GetAllTopics = () => {
        axios({
            url: 'http://localhost:9090/api/topic',
            method: 'get',
            contentType: 'application/json'
        }).then((e) => {
            setTopic(e.data);
        })
    }

    const GetQuestions = () => {
        let tid = txtTopicId.current.value;
        if (tid !== "select topic") {
            axios({
                url: 'http://localhost:9090/api/examquestion/' + tid,
                method: 'get',
                contentType: 'application/json'
            }).then((question) => {
                setQuestion(question.data);
            })
        }
    }



    return (
        <div className="container">
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td> <label>Date</label></td>
                        <td> <input type="date" ref={examdate} /></td>
                    </tr>
                    <tr>
                        <td> <label>Start Time</label></td>
                        <td> <input type="text" ref={txtstarttime} /></td>
                    </tr>
                    <tr>
                        <td> <label>End Time</label></td>
                        <td> <input type="text" ref={txtendtime} /></td>
                    </tr>
                    <tr>
                        <td> <label>Select Topic</label></td>
                        <td>
                            <select ref={txtTopicId}>
                                <option selected disabled>select Topic</option>
                                {topic.map((d, k) => (
                                    <option key={k} value={d.topic_id}>{d.topic_name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="start exam" onClick={() => GetQuestions()} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}