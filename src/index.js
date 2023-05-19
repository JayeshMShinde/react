import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Add from './add_react';
// import Stud_tbl from './Student';
// import Employee from './Employeecomponent';
// import Emp from './Emp_e';
// import Sqr from './square';
//import MainCom from './RoutingDemo/MainComponent';
import { CommonCom } from './RoutingWebPageDesignStudent/CombineComponent';
// import { Collage } from './collagedata';
// import { Api } from './ApiComponent';
// import QuizAppCom from './Quizapp';
// import { Parent } from './NestedComponent';
// import { Common } from './DynamicRoutingDemo/CommanComponent';
// import { CommonComp } from './WebPageDesign/CommonComponent';
// import { Student } from './SpringWithReact/SpringWithReact';
// import { StateCity } from './StateCities';
// import { StudForm } from './FormDesgn/StudentForm';
// import { Topicsadd } from './test/Topicsadd';
// import { Topicscontent } from './test/topicscontent';
// import { ContentQuestion } from './test/ContentQuestion';
// import { Studdetals } from './test/StudentDetails';
// import { Employee } from './SpringBootFileUpload/EmployeeComponent';
// import { Commoncomp_vis } from './VisitorDesign/CommonComponennt';
// import MyComponent from './test/login';
// import App from './test/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommonCom/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
