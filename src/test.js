import React, { useEffect } from "react";
import '../FormDesgn/stud.css';
export const teststud_form=()=>{
        useEffect(() => {
            addTabFunctionality();
        }, []);

        function addTabFunctionality() {
            const tabButtons = document.querySelectorAll('.tab__button');
        
            tabButtons.forEach((e) => {
                e.addEventListener("click", (e) => {
                    if (!e.target.classList.contains('tab__button-active')) {
                        e.target.classList.add("tab__button-active");
                        e.target.nextElementSibling.style.height = e.target.nextElementSibling.firstElementChild.clientHeight + 60 + "px";
                        e.target.nextElementSibling.classList.add("tab__panel-active");
                    } else {
                        e.target.classList.remove("tab__button-active");
                        e.target.nextElementSibling.style.height = "0px";
                        e.target.nextElementSibling.classList.remove('tab__panel-active');
                    }
                });
            });
        }
    return(
        <div class="container">
        <div class="accordion">
            <div class="tab">
                <button class="tab__button"><i className="bi bi-person-fill">&nbsp;</i>Student Profile</button>
                <div class="tab__panel">
                <div className="row  ">
                                <div className="col-md-4">
                                    <input className="form-control" type="text" placeholder="First Name" />&nbsp;
                                    <input className="form-control" type="text" placeholder="Middle Name" />&nbsp;
                                    <input className="form-control" type="text" placeholder="Last Name" />&nbsp;<br />
                                    <label>Date Of Birth:</label>
                                    &nbsp;
                                    <input className="form-control" type="date" placeholder="Birth Date" />
                                </div>
                                &nbsp;
                                <div className="col-md-4">
                                    <input className="form-control" type="email" placeholder="Email ID" />&nbsp;
                                    <input className="form-control" type="text" placeholder="Mobile No." />&nbsp;
                                    <input className="form-control" type="text" placeholder="Alternate Mobile No." />&nbsp;
                                    <select className="form-control">
                                        <option selected disabled>Select State</option>
                                    </select>
                                    &nbsp;
                                </div>

                                <div className="col-md-3">
                                    <select className="form-control">
                                        <option selected disabled>Select City</option>
                                    </select>
                                    &nbsp;
                                    <select className="form-control">
                                        <option selected disabled>Select Location</option>
                                    </select>
                                    &nbsp;
                                    <textarea className="form-control" name="Permanent Address" placeholder="Permanent Address"></textarea>
                                    &nbsp;
                                    <textarea className="form-control" name="Local Address" placeholder="Local Address"></textarea>
                                </div>
                            </div>

                </div>
            </div>
            <div class="tab">
                <button class="tab__button">Accordion Two</button>
                <div class="tab__panel">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt iure pariatur vitae
                        molestiae eaque repudiandae iste nostrum suscipit iusto.</p>
                </div>
            </div>
            <div class="tab">
                <button class="tab__button">Accordion Three</button>
                <div class="tab__panel">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt iure pariatur vitae
                        molestiae eaque repudiandae iste nostrum suscipit iusto. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Impedit, nostrum?</p>
                </div>
            </div>
        </div>
    </div>
    )
}