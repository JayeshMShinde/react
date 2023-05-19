import React from "react";
import {Link , Outlet} from "react-router-dom";
const About =()=>{
    return(
        <div>
            <div>
                <Link to="staff">About Staff</Link>
                &nbsp;
                <Link to="company">About Company</Link>
            </div>
            <hr/>
            <Outlet></Outlet>
        </div>
    )
}
export default About;