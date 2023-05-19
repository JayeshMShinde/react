import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const StateCity=()=>{
    const [states,setStates] = useState([]);
    const [cities,setCities] = useState([]);
    const [location,setLocation] = useState([]);
    const ddstate = useRef();
    const ddCities = useRef();
    const ddlocation = useRef();
    const txtStateFiletr = useRef();

    useEffect(function(){
        GetStates();
        GetCities();
    },[]);
    const GetStates=()=>{
        axios({
            url:'https://ciitinstitute.com/api/state',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            console.log(e.data)
            setStates(e.data);
        })
    } 

    const GetCities=()=>{
        axios({
            url:'https://ciitinstitute.com/api/city',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            console.log(e.data);
            setCities(e.data);
        })
    }

    const GetStateFilter=()=>{
        var st=txtStateFiletr.current.value;
        if(st!==""){
            var data=[];
            cities.forEach(function(d,k){
                if((d.state_name+"").includes(st)){
                    data.push(d);
                }
            })
            setCities(data);
        }
        else{
            GetCities();
        }
    }
    const GetCitiesbyState=()=>{
        var sid = ddstate.current.value;
        alert(sid);
        axios({
            url:'https://ciitinstitute.com/api/stateidwisecities/'+sid,
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            setCities(e.data);
        })
    }

    const GetLocaionbyCities=()=>{
        var cid = ddCities.current.value;
        alert(cid);
        axios({
            url:'https://ciitinstitute.com/api/location/'+cid,
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            console.log(e.data);
            setLocation(e.data);
        })
    }
    return(
        <div>
            <h2>State City Operation</h2>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>State Name:</td>
                        <td>
                            <select ref={ddstate} onChange={()=>GetCitiesbyState()}>
                                <option selected disabled>Select State</option>
                                {
                                    states.map((d,k)=>(
                                        <option key={k} value={d.state_id}>{d.state_name}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>City Name:</td>
                        <td>
                            <select ref={ddCities} onChange={()=>GetLocaionbyCities()}>
                                <option selected disabled>Select City</option>
                                {
                                    cities.map((d,k)=>(
                                        <option key={k} value={d.city_id}>{d.city_name}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>Location:</td>
                        <td>
                            <select ref={ddlocation}>
                                <option selected disabled>Select Location</option>
                                {
                                    location.map((d,k)=>(
                                        <option key={k} value={d.location_id}>{d.location_name}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-bordered"> 
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>City Name</th>
                        <th>
                            State Name
                            <br/>
                            <input type="text" ref={txtStateFiletr} onKeyUp={()=>GetStateFilter()}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cities.map((d,k)=>(
                            <tr key={k}>
                                <td>{k+1}</td>
                                <td>{d.city_name}</td>
                                <td>{d.state_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}