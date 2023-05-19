import axios from "axios";
import {
  FaUserEdit,
  FaFileExport,
  FaRegTrashAlt,
  FaUserPlus,
  FaRegTimesCircle,
} from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
export const ContentQuestion = () => {
  const txtTopicName = useRef();
  const txtContenName = useRef();
  const txtQuestion = useRef();
  const txtCorrectOpt = useRef();
  const txtOpt1 = useRef();
  const txtOpt2 = useRef();
  const txtOpt3 = useRef();
  const txtOpt4 = useRef();
  const [contentName, setContentName] = useState([]);
  const [question, setQuestion] = useState([]);
  const [topics, setTopics] = useState([]);

  // Get data onloading function code opening.
  useEffect(function () {
    GetAllTopics();
    GetAllQuestion();
  }, []);
  // Get data onloading function code closing.

  // Get all topics function code opening.
  const GetAllTopics = () => {
    axios.get("http://localhost:9090/api/topic").then((topic) => {
      setTopics(topic.data);
    });
  };
  // Get all topics function code Closing.

  // Get all content names function code opening.
  const GetAllContentNames = () => {
    axios
      .get(
        "http://localhost:9090/api/topicContentByTopicId/" +
          txtTopicName.current.value
      )
      .then((content) => setContentName(content.data));
  };
  // Get all content names function code closing.

  // Add question function code opening.
  const AddQuestion = () => {
    axios
      .post("http://localhost:9090/api/contentQuestion", {
        question: txtQuestion.current.value,
        correct_option_number: txtCorrectOpt.current.value,
        option1: txtOpt1.current.value,
        option2: txtOpt2.current.value,
        option3: txtOpt3.current.value,
        option4: txtOpt4.current.value,
        topicContent: { content_id: txtContenName.current.value },
      })
      .then(resp=>{
        toast.success(`Question Addedd Successfully`,{position:"top-right",autoClose:2000,theme:"dark"});
        GetAllQuestion();
        ClearInput();
      });
  };
  // Add question function code closing.

  // Clear Input Box Function Code Opening.
  const ClearInput = () => {
    txtQuestion.current.value = "";
    txtCorrectOpt.current.value = "";
    txtOpt1.current.value = "";
    txtOpt2.current.value = "";
    txtOpt3.current.value = "";
    txtOpt4.current.value = "";
  };
  // Clear Input Box Function Code Closing.

  // Get all question code function opening.
  const GetAllQuestion = () => {
    axios
      .get("http://localhost:9090/api/contentQuestion")
      .then((que) => setQuestion(que.data));
  };
  // Get all question code function closing.
  
  return (
    <>
      <div className="shadow-none p-3 mb-5 rounded" id="popupTopicForm">
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-3">
              <label>Topic Name</label>
              <select
                onChange={() => GetAllContentNames()}
                id="inputDropDown"
                className="form-select"
                ref={txtTopicName}>
                <option selected disabled>
                  Select Topic Here
                </option>
                {topics.map((d, k) => (
                  <option key={k} value={d.topic_id}>
                    {d.topic_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label>Content Name</label>
              <select
                id="inputDropDown"
                className="form-select"
                ref={txtContenName}>
                <option selected disabled>
                  Select Content Here
                </option>
                {contentName.map((d, k) => (
                  <option key={k} value={d.content_id}>
                    {d.content_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label>Correct Option</label>
              <select
                id="inputDropDown"
                ref={txtCorrectOpt}
                className="form-select">
                <option selected disabled>
                  Select Correct Option
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3" id="popupTopicInput">
            <div className="mb-3">
              <label>Option 1</label>
              <input
                ref={txtOpt1}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Option 1 Here"
              />
            </div>
          </div>
          <div className="col-lg-3" id="popupTopicInput">
            <div className="mb-3">
              <label>Option 2</label>
              <input
                ref={txtOpt2}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Option 2 Here"
              />
            </div>
          </div>
          <div className="col-lg-3" id="popupTopicInput">
            <div className="mb-3">
              <label>Option 3</label>
              <input
                ref={txtOpt3}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Option 3 Here"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label>Option 4</label>
              <input
                ref={txtOpt4}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Option 4 Here"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" id="popupTopicInput">
            <div className="mb-3">
              <label>Question</label>
              <textarea
                ref={txtQuestion}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Question Here"></textarea>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mx-auto">
          <div className="mb-3">
            <br />
            <button
              onClick={() => AddQuestion()}
              id="btnCommon"
              type="button"
              className="btn btn-outline-info w-100">
              Add Question
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-none p-3 mb-5 rounded" id="topicTable">
        <div className="overflow-auto" style={{ maxHeight: "350px" }}>
          <div className="table-responsive">
            <table
              className="table table-striped
            table-hover	
            table-borderles
            align-middle">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Content Name</th>
                  <th>Question</th>
                  <th>Correct Option</th>
                  <th>Option 1</th>
                  <th>Option 2</th>
                  <th>Option 3</th>
                  <th>Option 4</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {question.map((d, k) => (
                  <tr key={k}>
                    <td>{k + 1}</td>
                    <td>{d.topicContent.content_name}</td>
                    <td>{d.question}</td>
                    <td>{d.correct_option_number}</td>
                    <td>{d.option1}</td>
                    <td>{d.option2}</td>
                    <td>{d.option3}</td>
                    <td>{d.option4}</td>
                    <td>
                      <button type="button" className="btn btn-info btn-sm mb-1"><FaFileExport/></button>&nbsp;
                      <button type="button" className="btn btn-danger btn-sm"><FaRegTrashAlt/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
