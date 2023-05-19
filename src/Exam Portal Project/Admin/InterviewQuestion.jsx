import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFileExport,
  FaRegTrashAlt,
  FaListUl,
  FaRegTimesCircle,
  FaRegEdit,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
export const Interview = () => {
  const [topics, setTopics] = useState([]);
  const [qa, setQa] = useState([]);
  const topic = useRef();
  const quest = useRef();
  const ans = useRef();
  useEffect(function () {
    GetAllTopics();
    GetAllQA();
  }, []);

  //Get All Topic Function Code Opening.
  const GetAllTopics = () => {
    axios.get("http://localhost:9090/api/topic").then((resp) => {
      setTopics(resp.data);
    });
  };
  //Get All Topic Function Code Closing.

  //Add Question Answer Function Code Opening.
  const AddQA = () => {
    let t = topic.current.value;
    let q = quest.current.value;
    let a = ans.current.value;
    if (t !== "Select a Topic" && t !== "") {
      if (q !== "" && a !== "") {
        axios
          .post("http://localhost:9090/api/interview", {
            topic: { topic_id: t },
            interview_question: q,
            interview_answer: a,
          })
          .then((resp) => {
            toast.success(`Addedd Successfully`, {
              autoClose: 1000,
              position: "top-right",
              theme: "dark",
            });
            GetAllQA();
          });
      } else {
        toast.warning(`Please Enter Valid Data`, {
          autoClose: 1000,
          theme: "dark",
          position: "top-right",
        });
      }
    } else {
      toast.warning(`Please Select Topic`, {
        autoClose: 1000,
        position: "top-right",
        theme: "dark",
      });
    }
  };
  //Add Question Answer Function Code Closing.

  //Get All QA Function Code Opening.
  const GetAllQA = () => {
    axios.get("http://localhost:9090/api/interview").then((resp) => {
      setQa(resp.data);
    });
  };
  //Get All QA Function Code Closing.

  return (
    <>
      <div className="shadow-none p-3 mb-5 bg-info rounded" id="ivForm">
        <span className="h4" style={{ color: "#E6E6FA" }}>
          Interview Question Answers
        </span>
        <hr style={{ border: "1px solid #E6E6FA" }} />
        <div className="row mb-3">
          <div className="col-lg-9">
            <label>Select Topic</label>
            <select className="form-select" id="ivInput" ref={topic}>
              <option selected disabled>
                Select a Topic
              </option>
              {topics.map((d, k) => (
                <option key={k} value={d.topic_id}>
                  {d.topic_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-3">
            <br />
            <button
              id="ivButton"
              type="button"
              className="btn btn-outline-info btn-md w-100"
              onClick={() => AddQA()}>
              Add Question
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12">
            <label>Question</label>
            <textarea
              ref={quest}
              id="ivInput"
              className="form-control"
              placeholder="Enter a Question Here"></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12">
            <label>Answer</label>
            <textarea
              ref={ans}
              id="ivInput"
              className="form-control"
              placeholder="Enter a Answer Here"></textarea>
          </div>
        </div>
      </div>
      <div className="shadow-none p-3 mb-5 rounded" id="ivForm">
        <div className="overflow-auto" style={{maxHeight:"400px"}}>
          <div className="table-responsive">
          <table
            className="table 
            table-striped
            table-hover	
            table-borderless
            align-middle">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Topic</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {qa.map((d, k) => (
                <tr key={k} >
                  <td>{k + 1}</td>
                  <td>{d.topic.topic_name}</td>
                  <td>{d.interview_question}</td>
                  <td>{d.interview_answer}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info btn-sm mb-1"><FaFileExport/></button>&nbsp;
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"><FaRegTrashAlt/></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
