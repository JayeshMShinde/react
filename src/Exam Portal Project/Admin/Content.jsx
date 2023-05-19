import axios from "axios";
import {
  FaFileExport,
  FaRegTrashAlt,
  FaListUl,
  FaRegTimesCircle,
  FaRegEdit,
} from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { toast,ToastContainer } from "react-toastify";
export const Content = () => {
  const [topicData, setTopicData] = useState([]);
  const [contentData, setContentData] = useState([]);
  const txtTopic = useRef();
  const txtContent_Name = useRef();
  const txtContent_Tutorial = useRef();
  const [tid, setTid] = useState();
  const [cid,setCid]=useState();

  const [showBtnAdd, setShowBtnAdd] = useState(true);
  const [showBtnUpdate, setShowBtnUpdate] = useState(false);

  // Get data onloading function code opening.
  useEffect(function () {
    GetAlltopics();
    GetAllTopicContents();
  }, []);
  // Get data onloading function code closing.

  //Add All Topics In Drop Down Function Code Opening.
  const GetAlltopics = () => {
    axios.get("http://localhost:9090/api/topic").then((topcidata) => {
      setTopicData(topcidata.data);
    });
  };
  //Add All Topics In Drop Down Function Code Closing.

  //Add Topic Contents In Data Base Function Code Opening.
  const AddTopicContents = () => {
    let tid=txtTopic.current.value;
    let content_name= txtContent_Name.current.value;
    let tblcontent_tutorial= txtContent_Tutorial.current.value;
    if(tid==="Select Topic"||tid===""){
      toast.error(`Please Select Topic`,{autoClose:1000,position:"top-right",theme:"colored"});
    }else{
      if(content_name!==""&&tblcontent_tutorial!==""){
        axios
        .post("http://localhost:9090/api/topicContent", {
          content_name: txtContent_Name.current.value,
          tblcontent_tutorial: txtContent_Tutorial.current.value,
          topic: { topic_id: txtTopic.current.value },
        })
        .then((resp) => {
          toast.success(`Topic Content Addedd Successfully`,{autoClose:1000,theme:"colored",position:"top-right"});
          GetAllTopicContents();
          ClearInput();
        });
      }else{
        toast.error(`Insert Valid Data`,{autoClose:1000,position:"top-right",theme:"colored"});
      }
    }
    
  };
  //Add Topic Contents In Data Base Function Code Closing.

  //Input Box Clear Function Code Opening.
  const ClearInput = () => {
    txtContent_Name.current.value = "";
    txtContent_Tutorial.current.value = "";
  };
  //Input Box Clear Function Code Closing.

  //Get All Topic Contents Function Code Opening.
  const GetAllTopicContents = () => {
    axios.get("http://localhost:9090/api/topicContent").then((content) => {
      setContentData(content.data);
    });
  };
  //Get All Topic Contents Function Code Closing.

  //View Topic Function Code Opening.
  const View = (d) => {
    setTid(d.topic.topic_id);
    setCid(d.content_id);
    console.log(tid);
    txtContent_Name.current.value = d.content_name;
    txtContent_Tutorial.current.value = d.tblcontent_tutorial;
    setShowBtnAdd(false);
    setShowBtnUpdate(true);
  };
  //View Topic Function Code Closing.

  //Update Topic Content Function Code Opening.
  const Update = () => {
    let topic_id=tid;
    let cname=txtContent_Name.current.value;
    let ctutorial=txtContent_Tutorial.current.value;
    let c_id=cid;
    if(topic_id!==""&&cname!==""&&ctutorial!==""){
      axios.put("http://localhost:9090/api/topicContent",{topic:{topic_id:topic_id},content_name:cname,tblcontent_tutorial:ctutorial,content_id:c_id})
      .then((resp)=>{
        toast.warning(`Topic Content Updated`,{position:"top-right",autoClose:1000,theme:"colored"});
        ClearInput();
        setShowBtnUpdate(false);
        setShowBtnAdd(true);
      })
    }else{
    toast.error(`Invalid Data`,{autoClose:1000,position:"top-right",theme:"colored"});
    }
  };
  //Update Topic Content Function Code Closing.

  //Delete Topic Content Function Code Opening.
  const Delete = (id) => {
    axios.delete("http://localhost:9090/api/topicContent/"+id)
    .then((resp)=>{
      toast.error(`Topic Content Deleted Successfully`,{autoClose:1000,position:"top-right",theme:"colored"});
      GetAllTopicContents();
    })
  };
  //Delete Topic Content Function Code Closing.

  //Cancel Update Process Code Opening.
  const CacnelUpdate=()=>{
    setShowBtnAdd(true);
    setShowBtnUpdate(false);
    ClearInput();
  }
  //Cancel Update Process Code Closing.

  return (
    <>
      <div className="shadow-none p-3 mb-5 rounded" id="popupTopicForm">
        <div className="row">
          <div className="col-lg-2" id="popupTopicInput">
            <div className="mb-3">
              <label>Select Topic</label>
              <select id="inputDropDown" ref={txtTopic} className="form-select">
                <option selected disabled>
                  Select Topic
                </option>
                {topicData.map((d, k) => (
                  <option key={k} value={d.topic_id}>
                    {d.topic_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-4" id="popupTopicInput">
            <div className="mb-3">
              <label>Topic Content Name</label>
              <input
                ref={txtContent_Name}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Topic Content Name"
              />
            </div>
          </div>
          <div className="col-lg-4" id="popupTopicInput">
            <div className="mb-3">
              <label>Content Tutorial</label>
              <input
                ref={txtContent_Tutorial}
                id="inputStud"
                type="text"
                className="form-control"
                placeholder="Add Content Tutorial Here"
              />
            </div>
          </div>
          <div className="col-lg-2" id="popupTopicInput">
            <div className="mb-3">
              <br />
              {showBtnAdd ? (
                <button
                  onClick={() => AddTopicContents()}
                  id="btnCommon"
                  type="button"
                  className="btn btn-outline-info">
                 <FaListUl/> Add Content
                </button>
              ) : null}
              {showBtnUpdate?(
                 <button
                 onClick={() => Update()}
                 id="btnCommon"
                 type="button"
                 className="btn btn-outline-warning">
                <FaRegEdit/> Update
               </button>
              ):null}
              &nbsp;
              {showBtnUpdate?(
                  <button
                  onClick={() => CacnelUpdate()}
                  id="btnCommon"
                  type="button"
                  className="btn btn-outline-danger">
                  <FaRegTimesCircle/>
                </button>
              ):null}
            </div>
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
                  <th>Topic</th>
                  <th>Content</th>
                  <th>Tutorial</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {contentData.map((d, k) => (
                  <tr id="trStudBody" key={k}>
                    <td>{k + 1}</td>
                    <td>{d.topic.topic_name}</td>
                    <td>{d.content_name}</td>
                    <td>{d.tblcontent_tutorial}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        onClick={() => View(d)}>
                        <FaFileExport />
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => Delete(d.content_id)}>
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
      <ToastContainer/>
    </>
  );
};
