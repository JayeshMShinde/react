import React from "react";

class Stud_tbl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stud:[],
        }
    }
    AddStud(){
        var r = this.refs.rno.value;
        var n = this.refs.name.value;
        var st={"rno":r,"name":n};
        this.state.stud.push(st);
        this.setState({stud:this.state.stud})
    }
render(){
    return(
        <div>
            Roll No:<input type="text" ref="rno" /><br></br>
            Name <input type="text" ref="name"/><br></br>
            <input type="button" value="Submit" onClick={this.AddStud.bind(this)}/><br></br>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Roll NO</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.stud.map((d,k)=>
                    <tr key={k}>
                        <td>{d.rno}</td>
                        <td>{d.name}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
}
export default Stud_tbl;