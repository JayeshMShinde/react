import React from "react";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { Service } from "./ServiceComponent";
import { Contact } from "./ContactCompnent";
import { Login } from "./LoginComponent";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import { Main } from "./MainComponent";
export const Common =()=>{
    return(
        <div>
            <Router>
               <div>
                    <Routes>
                        <Route path="" element={<Login/>}/>
                        <Route path="main" element={<Main/>}>        
                            <Route path="home" element={<Home/>} />
                            <Route path="about-us" element={<About/>} />
                            <Route path="service" element={<Service/>} />
                            <Route path="contact-us" element={<Contact/>} />
                        </Route>
                    </Routes>
               </div>
            </Router>
        </div>
    )
}