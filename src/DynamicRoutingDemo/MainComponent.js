import React from "react";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { Service } from "./ServiceComponent";
import { Contact } from "./ContactCompnent";
import { Login } from "./LoginComponent";
import { BrowserRouter as Router,Route,Routes,Link, Outlet } from "react-router-dom";
export const Main =()=>{
    return(
        <div>
               {/* Header Section  */}
               <div>
                    <Link to="home">Home</Link>
                    &nbsp;
                    <Link to="about-us">About us</Link>
                    &nbsp;
                    <Link to="service">Service</Link>
                    &nbsp;
                    <Link to="contact-us">Contact us</Link>
                    &nbsp;
                    <Link to="/">Log Out</Link>
                    &nbsp;
               </div>
               <hr/>
               <div>
                <Outlet></Outlet>
               </div>
               <hr/>
               <div>
                    @Copywrite 2023 <a href="#">CIIT</a>
               </div>
        </div>
    )
}