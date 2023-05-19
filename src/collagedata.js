import React, { useRef, useState } from "react";


export const Collage = () => {
    const [data] = useState([{ "rno": 1, "name": "ajay" }, { "rno": 2, "name": "jay" }, { "rno": 3, "name": "suresh" }, { "rno": 4, "name": "amay" }]);
    return (
        <div>
          <Studrec record={data} />
        </div>
      );
}

export const Studrec = ({ record }) => {
    const [borderstyle] = useState({ "border": "1px solid black", "padding": "5px" })
    const [tblborder] = useState({ "border": "2px solid black" })
    return (
    <div> 
        &nbsp;
        <table style={tblborder}>
      <thead>
        <tr>
          <th style={borderstyle}>Roll No</th>
          <th style={borderstyle}>Name</th>
        </tr>
      </thead>
      <tbody>
        {record.map((item) => (
          <tr key={item.rno}>
            <td style={borderstyle}>{item.rno}</td>
            <td style={borderstyle}>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
  };

  
