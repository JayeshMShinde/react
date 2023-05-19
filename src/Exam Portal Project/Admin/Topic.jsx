import axios from "axios";
import {
  FaUserEdit,
  FaFileExport,
  FaRegTrashAlt,
  FaUserPlus,
  FaRegTimesCircle,
} from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export const Topic = () => {
  const txtTopic = useRef();
  const [topicdata, setTopicData] = useState([]);
  const [topicId, setTopicId] = useState({});
  const [showBtnAdd, setShowBtnAdd] = useState(true);
  const [showBtnUpdate, setShowBtnUpdate] = useState(false);

  //Get All Topics FUnction Code Opening.
  useEffect(function () {
    GetTopics();
  }, []);
  //Get All Topics Function Code Closing.

  //Add Topic Function Code Opening.
  const AddTopic = () => {
    let topic = txtTopic.current.value;
    if (topic !== "") {
      axios
        .post("http://localhost:9090/api/topic", {
          topic_name: topic,
        })
        .then((resp) => {
          toast.success(`Topic Addedd !`, {
            position: "top-right",
            theme: "colored",
            autoClose: 1000,
          });
          GetTopics();
          ClearInput();
        });
    } else {
      toast.error(`Topic Should Not Be Blank`, {
        autoClose: 1000,
        theme: "colored",
        position: "top-right",
      });
    }
  };
  //Add Topic Function Code Closing.

  //Get Topics Function Code Opening.
  const GetTopics = () => {
    axios.get("http://localhost:9090/api/topic").then((dt) => {
      setTopicData(dt.data);
    });
  };
  //Get Topics Function Code Opening.

  //View Topic Function Code Opening.
  const ViewTopic = (id) => {
    setShowBtnAdd(false);
    setShowBtnUpdate(true);
    axios.get("http://localhost:9090/api/topic/" + id).then((resp) => {
      setTopicId(resp.data);
      txtTopic.current.value = resp.data.topic_name;
    });
  };
  //View Topic Function Code Closing.

  //Update Topic Function Code Opening.
  const UpdateTopic = () => {
    let topic = txtTopic.current.value;
    if (topic !== "") {
      axios
        .put("http://localhost:9090/api/topic", {
          topic_id: topicId.topic_id,
          topic_name: txtTopic.current.value,
        })
        .then((resp) => {
          toast.warning(`Topic Updated`, {
            autoClose: 1000,
            theme: "colored",
            position: "top-right",
          });
          setShowBtnAdd(true);
          setShowBtnUpdate(false);
          ClearInput();
          GetTopics();
        });
    } else {
      toast.error(`Topic Should Not Be Blank`, {
        autoClose: 1000,
        position: "top-right",
        theme: "colored",
      });
    }
  };
  //Update Topic Function Code Closing.

  //Cancel Update Function Code Opening.
  const CancelUpdate = () => {
    setShowBtnAdd(true);
    setShowBtnUpdate(false);
    ClearInput();
  };
  //Cancel Update Function Code Closing.

  //Delete Topic Function Code Opening.
  const DeleteTopic = (d) => {
    axios
      .delete("http://localhost:9090/api/topic/" + d.topic_id)
      .then((resp) => {
        toast.error(`${d.topic_name} Topic Deleted`, {
          autoClose: 1000,
          position: "top-right",
          theme: "colored",
        });
        GetTopics();
      });
  };
  //Delete Topic Function Code Opening.

  //Clear Input Box Function Code Opening.
  const ClearInput = () => {
    txtTopic.current.value = "";
  };
  //Clear Input Box Function Code Closing.

  return (
    <>
      <div className="shadow-none p-3 mb-5 rounded " id="popupTopicForm">
        <div className="row">
          <div className="col-lg-9">
            <div className="mb-3" id="popupTopicInput">
              <label>Topic Name</label>
              <input
                id="inputStud"
                type="text"
                className="form-control border-danger"
                ref={txtTopic}
                placeholder="Enter Topic Name Here"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <br />
            {showBtnAdd ? (
              <button
                id="btnCommon"
                type="button"
                className="btn btn-outline-info w-100"
                onClick={() => AddTopic()}>
                <FaUserPlus /> Add Topic
              </button>
            ) : null}
            {showBtnUpdate ? (
              <button
                id="btnCommon"
                type="button"
                className="btn btn-outline-warning"
                onClick={() => UpdateTopic()}>
                <FaUserEdit /> Update Topic
              </button>
            ) : null}
            &nbsp;
            {showBtnUpdate ? (
              <button
                id="btnCommon"
                type="button"
                className="btn btn-outline-danger"
                onClick={() => CancelUpdate()}>
                <FaRegTimesCircle />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="shadow-none p-3 mb-5 rounded" id="topicTable">
        <div className="overflow-auto" style={{ maxHeight: "350px" }}>
          <div className="table-responsive">
            <table
              className="table table-striped
            table-hover 
            table-bordereless
            align-middle">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Topic Name</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {topicdata.map((d, k) => (
                  <tr key={k} id="trStudBody">
                    <td>{k + 1}</td>
                    <td>{d.topic_name}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => ViewTopic(d.topic_id)}
                        className="btn btn-info btn-sm">
                        <FaFileExport />
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        onClick={() => DeleteTopic(d)}
                        className="btn btn-danger btn-sm">
                        <FaRegTrashAlt />
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
      <ToastContainer />
    </>
  );
};
