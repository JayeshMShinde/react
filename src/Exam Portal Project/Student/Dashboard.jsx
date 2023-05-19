import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
export const StudDashboard = () => {
  const [examDetails, setExamDetails] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [qd, setQuizData] = useState({});
  const [questions,setQuestions]=useState([]);

  useEffect(function () {
    GetAllExamDetails();
  }, []);

  const GetAllExamDetails = () => {
    axios
      .get(
        "http://localhost:9090/api/getGivenExam/" +
          localStorage.getItem("student_id")
      )
      .then((resp) => {
        setExamDetails(resp.data);
      });
  };

  const GetExamDetails = (d) => {
    ExamResult(d);
    setQuizData(d);
    
    setLgShow(true);
    // console.log(d);
  };

  const ExamResult = (tid) => {
    console.log(tid);
    axios.get("http://localhost:9090/api/topicWiseQuestions/"+tid.topic_id)
    .then((resp)=>{
      setQuestions(resp.data)
    })
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="overflow-auto mt-5" style={{ height: "500px" }}>
          <div className="table-responsive">
            <table
              className="table table-striped
          table-hover	
          table-borderless
          table-primary
          align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Sr.No</th>
                  <th>Topic Name</th>
                  <th>Exam Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {examDetails.map((d, k) => (
                  <tr className="table-dark">
                    <td>{k + 1}</td>
                    <td>{d.topic_name}</td>
                    <td>{d.exam_date}</td>
                    <td>{d.start_time}</td>
                    <td>{d.end_time}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-warning btn-sm w-100"
                        onClick={() => GetExamDetails(d)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
      <Modal
        size="xl"
        show={lgShow}
        backdrop="static"
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton style={{ backgroundColor: "#7a4ce9" }}>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h2 className="text-center text-warning">Quiz Result</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#7a4ce9" }}>
          <Container>
            <Row>
              <Col lg="2">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    id="quizResutlInput"
                    value={qd.topic_name}
                    className="form-control"
                    disabled
                  />
                  <label htmlFor="quizResutlInput">Topic</label>
                </div>
              </Col>
              <Col lg="2">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    id="quizResutlInput"
                    value={qd.exam_date}
                    className="form-control"
                    disabled
                  />
                  <label htmlFor="quizResutlInput">Date</label>
                </div>
              </Col>
              <Col lg="2">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    id="quizResutlInput"
                    value={qd.start_time}
                    className="form-control"
                    disabled
                  />
                  <label htmlFor="quizResutlInput">Start Time</label>
                </div>
              </Col>
              <Col lg="2">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    id="quizResutlInput"
                    value={qd.end_time}
                    className="form-control"
                    disabled
                  />
                  <label htmlFor="quizResutlInput">End Time</label>
                </div>
              </Col>
              <Col lg="2">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    id="quizResutlInput"
                    className="form-control"
                    disabled
                  />
                  <label htmlFor="quizResutlInput">Result</label>
                </div>
              </Col>
              <Col lg="2">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    id="quizResutlInput"
                    className="form-control"
                    disabled
                  />
                  <label htmlFor="quizResutlInput">Grade</label>
                </div>
              </Col>
            </Row>
            <Row>
              <h3 className="m-3 text-center text-warning">
                Solved Questions History
              </h3>
              <div
                className="overflow-auto mt-5"
                style={{ maxHeight: "500px" }}>
                <Col lg="12">
                  {questions.map((d,k)=>(
                    <div className="card" id="solvedMcqCard" key={k}>
                    <div className="card-header">
                      <span className="h5">Q : {d.question}</span>
                    </div>
                    <div className="card-body">
                      <span className="h4"></span>
                    </div>
                    <div className="card-footer"></div>
                  </div>
                  ))}                  
                </Col>
              </div>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#7a4ce9" }}></Modal.Footer>
      </Modal>
    </>
  );
};
