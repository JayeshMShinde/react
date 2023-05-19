
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Api = () => {
  const list =[];
  const arrydata = {node: list}
  const [data, setData] = useState([]);
  const stnm = useRef("");
  const [search ,setSearch] = useState([]);

  const SearchList = (event) => {
    var s = event.target.value;
    console.log(s);
    setSearch(s);
  };
  const a = {
    node:list.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()))
  }

  const AddStudent = () => {
    var snm = stnm.current.value;
    var st = { "state_name": snm };
    console.log(st);
    axios({
      url: "https://ciitinstitute.com/api/state",
      method: "post",
      data: (st),
      contentType: "application/json"
    })
      .then((e) => {
        setData(e.data);
        Getstates();
        alert("Data Added Successfully");
      })
  };

  //useEffect
  useEffect(() => {
    Getstates();
  }, []);

  //api calling
  const Getstates = () => {
    axios({
      url: "https://ciitinstitute.com/api/state",
      method: "get",
      contentType: "application/json"
    })
      .then((e) => {
        setData(e.data);
      })
  };

  return (
    <div>
      <div>
        State Name
        <input type="text" ref={stnm} />
        &nbsp;
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary"
          onClick={() => AddStudent()}
        />
        &nbsp;
      </div>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search"  onChange={SearchList}/>
        <button type="button" className="btn btn-primary" onClick={SearchList}><i className="bi-search"></i></button>
      </div>
      <table className="table table-border table-hover table-striped" >
        <thead>
          <tr>
            <th>State Id</th>
            <th>State Name</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(data) &&
            data.map((d, k) => (
              <tr key={k}>
                <td>{d.state_id}</td>
                <td>{d.state_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

