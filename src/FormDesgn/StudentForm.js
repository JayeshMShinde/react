import React, { useEffect } from "react";
import '../FormDesgn/stud.css';
export const StudForm = () => {
    useEffect(function () {
        adTabFunctionality();
    }, []);
    function adTabFunctionality() {
        const tabButtons = document.querySelectorAll('.tab__button');

        tabButtons.forEach((e) => {
            e.addEventListener("click", (e) => {
                if (!e.target.classList.contains("tab__button-active")) {
                    e.target.classList.add("tab__button-active");
                    e.target.nextElementSibling.style.height = e.target.nextElementSibling.firstElementChild.clientHeight + 60 + "px";
                    e.target.nextElementSibling.classList.add("tab__panel-active");
                } else {
                    e.target.classList.remove("tab__button-active");
                    e.target.nextElementSibling.style.height = "1px";
                    e.target.nextElementSibling.classList.remove('tab__panel-active');
                }
            });
        });
    }
    return (
        <div className="container">
            &nbsp;
            <div className="accordion" >
                {/* Student Section */}
                <div className="tab">
                    <button className="tab__button">
                        <i className="bi bi-person-fill"></i>&nbsp;
                        Student Profile    
                    </button>
                    <div className="tab__panel">
                        <div className="row">
                            <div className="col-md-4 text-light">
                                <input className="form-control text-light" type="text" placeholder="First Name" />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="Middle Name" />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="Last Name" />&nbsp;<br />
                                <label>Date Of Birth:</label>
                                &nbsp;
                                <input className="form-control text-light" type="date" placeholder="Birth Date" />
                                &nbsp;
                                <input className="form-control text-light" type="file" placeholder="" />
                                &nbsp;
                            </div>
                            &nbsp;
                            <div className="col-md-4 text-light">
                                <input className="form-control text-light" type="email" placeholder="Email ID" />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="Mobile No." />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="Alternate Mobile No." />&nbsp;
                                <select className="form-control text-light">
                                    <option selected disabled>Select State</option>
                                </select>
                                &nbsp;
                            </div>

                            <div className="col-md-3 text-light">
                                <select className="form-control text-light">
                                    <option selected disabled>Select City</option>
                                </select>
                                &nbsp;
                                <select className="form-control text-light">
                                    <option selected disabled>Select Location</option>
                                </select>
                                &nbsp;
                                <textarea className="form-control text-light" name="Permanent Address" placeholder="Permanent Address"></textarea>
                                &nbsp;
                                <textarea className="form-control text-light" name="Local Address" placeholder="Local Address"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Education Information */}
                <div className="tab">
                    <button className="tab__button">
                        <i className="bi bi-file-text-fill"></i>&nbsp;
                        Education Details
                    </button>
                    <div className="tab__panel">
                        <div className="row">
                            <div className="col-md-3 text-light">
                                <select className="form-control text-light">
                                    <option selected disabled>Select Qualification</option>
                                </select>
                                &nbsp;
                                <select className="form-control text-light">
                                    <option selected disabled>Select Specialization</option>
                                </select>
                                &nbsp;
                            </div>
                            <div className="col-md-3 text-light">
                                <input className="form-control text-light" type="text" placeholder="Medium" />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="University" />&nbsp;
                            </div>

                            <div className="col-md-3 text-light">
                                <input className="form-control text-light" type="text" placeholder="Year" />&nbsp;
                                <input className="form-control text-light" type="Number" placeholder="Percentage/CGPA" />&nbsp;
                            </div>
                            <div className="col-md-2 text-light">
                                <button className="form-control btn btn-success"><i className="bi bi-plus-lg"></i>&nbsp; Add</button>
                            </div>
                            <div className="co-md-11 text-light">
                                &nbsp;
                                <table className="table table-bordered table-hover text-light">
                                    <thead>
                                        <tr>
                                            <th>Qualification</th>
                                            <th>Specialization</th>
                                            <th>Medium</th>
                                            <th>University</th>
                                            <th>Year</th>
                                            <th>Percentage</th>

                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Registration Detials */}
                <div className="tab">
                    <button className="tab__button">   
                        <i className="bi bi-person-plus-fill"></i>&nbsp;
                        Registration Details     
                    </button>
                    <div className="tab__panel">
                        <div className="row">
                            <div className="col-md-3 text-light">
                                {/* <label>Center Name</label> */}
                                <select className="form-control text-light">
                                    <option selected disabled>Select Center</option>
                                </select>
                                &nbsp;
                                <br />
                                <label>
                                    Registration Date:
                                </label>
                                <input className="form-control text-light" type="date" />&nbsp;
                                <select className="form-control text-light">
                                    <option selected disabled>Select Training</option>
                                </select>
                                &nbsp;
                            </div>

                            <div className="col-md-3 text-light">
                                <select className="form-control text-light">
                                    <option selected disabled>Fee Mode</option>
                                </select>
                                &nbsp;
                                <input className="form-control text-light" type="text" placeholder="Course" />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="Discount" />&nbsp;
                                
                            </div>

                            <div className="col-md-3 text-light">
                                <input className="form-control text-light" type="text" placeholder="Final Amount" />&nbsp;
                                <textarea className="form-control text-light" name="discountreson" placeholder="Discount Resaon"></textarea>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
                {/* Payment Details */}
                <div className="tab">
                    <button className="tab__button">  
                        <i className="bi bi-currency-rupee"></i>&nbsp;
                        Payments Details
                    </button>
                    <div className="tab__panel">
                        <div className="row">
                            <div className="col-md-4 text-light">
                                <select className="form-control text-light">
                                    <option selected disabled>Payment Recived By</option>
                                </select>
                                &nbsp;
                                <br />
                                <label>Payment Date:</label>&nbsp;
                                <input className="form-control text-light" type="date" placeholder="Payment Date" />&nbsp;
                                <input className="form-control text-light" type="text" placeholder="Payment Amount" />&nbsp;
                            </div>
                            &nbsp;
                            <div className="col-md-4 text-light">
                                <input className="form-control text-light" type="text" placeholder="Payment Mode" />&nbsp;
                                <textarea className="form-control text-light" name="" placeholder="Payment Description"></textarea>
                                &nbsp;
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-footer">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" style={{ "width": "100%" }}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    )
}