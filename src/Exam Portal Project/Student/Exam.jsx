import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export const Exam = () => {
  var selectedOption = "option";
  const [topic, setTopic] = useState([]);
  const [question, setQuestion] = useState([]);
  const [mcqArray, setMcqArray] = useState([]);
  const txtTopicId = useRef();

  //Start End Time Function Code Opening.
  const [CTime, setCTime] = useState();
  const txtStartTime = useRef();
  const txtEndTime = useRef();
  const txtDate = useRef();
  const getTime = useRef();
  const date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(UpdateTime, 1000);
  //Start End Time Function Code Closing.

  //Get All Topics Function Code Opening.
  const GetAllTopics = () => {
    axios.get("http://localhost:9090/api/topic").then((topic) => {
      setTopic(topic.data);
    });
  };
  //Get All Topics Function Code Closing.

  //Get All Questions Function Code Opening.
  const GetQuestion = () => {
    let tid=txtTopicId.current.value;
    if(tid!=="Select Topic"){
      txtStartTime.current.value = CTime;
      axios
        .get(
          "http://localhost:9090/api/topicWiseQuestions/" +
            tid
        )
        .then((question) => {
          setQuestion(question.data);
          toast.success(`Exam Started ! Good Luck 👍`, {
            position: "top-center",
            autoClose: 1000,
            theme: "colored",
            hideProgressBar: "true",
          });
        });
    }else{
      toast.error(`Please Select Topic`,{position:"top-center",autoClose:2000,theme:"colored"})
    }
    
  };
  //Get All Questions Function Code Closing.

  //Add MCQ's In Array Function Code Opening.
  const AddMCQ = (id, opt) => {
    let obj = {
      contentQuestion: { question_id: id },
      submited_option_number: opt,
    };
    setMcqArray([...mcqArray, obj]);
  };
  //Add MCQ's In Array Function Code Closing.

  //Submit Exam Function Code Opening.
  const SubmitExam = () => {
    txtEndTime.current.value = CTime;
    axios
      .post("http://localhost:9090/api/examDetail", {
        studentDetail: { student_id: localStorage.getItem("student_id") },
        start_time: txtStartTime.current.value,
        end_time: txtEndTime.current.value,
        exam_date: txtDate.current.value,
        examQuestion: mcqArray,
      })
      .then((resp) => {
        toast.success("Submitedd !!", {
          position: "top-right",
          autoClose: 1000,
          theme: "dark",
        });
      });
  };
  //Submit Exam Function Code Closing.

  //Get All Topics On Load Function Code Opening.
  useEffect(function () {
    GetAllTopics();
  }, []);
  //Get All Topics On Load Function Code Closing.

  return (
    <div>
      <br />
      <br />
      <br />
      <div id="examSideBar">
        <div className="form-floating p-sm-2">
          <input
            id="examTime"
            disabled
            value={CTime}
            ref={getTime}
            className="form-control form-control-lg p-sm-2 m-auto text-center"
          />
          <label htmlFor="examTime">Clock</label>
        </div>
        <div className="form-floating p-sm-2">
          <input
            type="text"
            disabled
            className="form-control form-control-lg"
            ref={txtDate}
            value={date}
            id="examTimeDate"
          />
          <label htmlFor="examTimeDate">Date</label>
        </div>
        <div className="form-floating p-sm-2">
          <input
            type="text"
            disabled
            className="form-control form-control-lg"
            ref={txtStartTime}
            id="examTimeDate"
          />
          <label htmlFor="examTimeDate">Start Time</label>
        </div>
        <div className="form-floating p-sm-2">
          <input
            type="text"
            disabled
            className="form-control form-control-lg"
            ref={txtEndTime}
            id="examTimeDate"
          />
          <label htmlFor="examTimeDate">End Time</label>
        </div>
        <div className=" p-sm-2">
          <select
            id="examTopics"
            className="form-select form-select-lg"
            ref={txtTopicId}>
            <option selected disabled>
              Select Topic
            </option>
            {topic.map((d, k) => (
              <option key={k} value={d.topic_id}>
                {d.topic_name}
              </option>
            ))}
          </select>
        </div>
        <div className="p-sm-2">
          <button
            type="button"
            className="btn btn-lg w-100"
            onClick={() => GetQuestion()}>
            Start Exam
          </button>
        </div>
        <div className="p-sm-2">
          <button
            type="button"
            className="btn btn-lg w-100"
            onClick={() => SubmitExam()}>
            Submit
          </button>
        </div>
      </div>
      <div className="examMainBox">
        <div className="mt-2">
          {question.map((d, k) => (
            <div key={k}>
              <div className="card" id="mcqCard">
                <div className="card-header">
                  <span className="h5 ">
                    {" "}
                    Q.No {k + 1} ) {d.question}
                  </span>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      onChange={() => AddMCQ(d.question_id, 1)}
                      className="form-check-input"
                      type="radio"
                      name={selectedOption + k}
                      id="inlineRadio1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      {d.option1}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={() => AddMCQ(d.question_id, 2)}
                      className="form-check-input"
                      type="radio"
                      name={selectedOption + k}
                      id="inlineRadio2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      {d.option2}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={() => AddMCQ(d.question_id, 3)}
                      className="form-check-input"
                      type="radio"
                      name={selectedOption + k}
                      id="inlineRadio3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      {d.option3}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={() => AddMCQ(d.question_id, 4)}
                      className="form-check-input"
                      type="radio"
                      name={selectedOption + k}
                      id="inlineRadio4"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                      {d.option4}
                    </label>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
        <br />
      </div>
      <ToastContainer />
    </div>
  );
};
