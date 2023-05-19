import React from "react";
import { Dashboard } from "./DashboardComponent";
import { Employee } from "./EmployeeComponent";
import { Customer } from "./CostumerComponent";
import { Employee_main } from "./EmployeeMainComponenet";
import { AdminComp } from "./AdminMainComponenet";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import { Login } from "./LoginPageComponenet";
import { Profile } from "./ProfileComponent";
import { Salary } from "./SalaryComponent";
import { Experience } from "./ExpComponenet";
export const CommonComp=()=>{

    return(
        <div>
            <Router>
                {/* Middle */}
                <div>
                            <Routes>
                                <Route path="" element={<Login/>}/>
                                <Route path="employee" element={<Employee_main/>}>
                                    <Route path="dashboard" element={<Dashboard/>}/>
                                    <Route path="profile" element={<Profile/>}/>
                                    <Route path="salary" element={<Salary/>}/>
                                    <Route path="experience" element={<Experience/>}/>
                                </Route>
                                <Route path="admin" element={<AdminComp/>}>
                                    <Route path="dashboard" element={<Dashboard/>}/>
                                    <Route path="employee-admin" element={<Employee/>}/>
                                    <Route path="customer" element={<Customer/>}/>
                                </Route>
                            </Routes>
                </div>
            </Router>
        </div>
    )
}