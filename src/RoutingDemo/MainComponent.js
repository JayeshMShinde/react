import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Service from "./ServiceComponent";
import StaffComp from "./StaffComponent";
import AboutComp from "./CompanyComponent";
const MainCom =()=>{


    return(
        <div>
            <Router>
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">Brand</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
                <div className="navbar-nav">
                    
                    <Link to="/home" className="nav-item nav-link active">Home</Link>
                    &nbsp;
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    &nbsp;
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    &nbsp;
                    <Link to="/service" className="nav-item nav-link">Service</Link>
                    
                </div>
            </div>
        </div>
    </nav>

                </div>
                <hr/>
                <div>
                    <Routes>
                        <Route path="home" element={<Home/>}/>
                        <Route path="about" element={<About/>}>
                            <Route path="staff" element={<StaffComp/>}/>
                            <Route path="company" element={<AboutComp/>}/>
                        </Route>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="service" element={<Service/>}/>
                    </Routes>
                </div>
                <hr/>
                <div>
                    FooterSection
                </div>
            </Router>
        </div>
    )
}
export default MainCom;