import axios from "axios";
import React, { useEffect, useState } from "react";

const QuizAppCom =()=>{
 
    const [quesans,setQuiz] = useState([]);
    
    useEffect(()=>{
        ShowQues();
    },[]);


    const ShowQues =()=>{
        axios({
            url:"https://the-trivia-api.com/api/questions?limit=10",
            method:"get",
            contentType:"application/json"
        }).then((e)=>{
            setQuiz(e.quesans)

        })
    }
    return(
        <div className="container">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Opt1</th>
                        <th>Opt2</th>
                        <th>correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        quesans.map((d,k)=>(
                        <tr key={k.id}>
                            <td>{d.question}</td>
                            <td>{d.correctAnswer}</td>
                            <td>{d.incorrectAnswers}</td>
                            <td>{d.correctAnswer}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default QuizAppCom;