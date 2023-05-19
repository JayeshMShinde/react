
import React from "react";
class Add extends React.Component{
    constructor(props){
        super(props)

        this.state={
            msg:""
        }
    }   
    Addititon(){
        var a =Number(this.refs.txt1.value);
        var b = Number(this.refs.txt2.value);
        var c =a+b;
        this.setState({msg:"Addition is  :"+c});
    }
       
    Mul(){
        var a =Number(this.refs.txt1.value);
        var b = Number(this.refs.txt2.value);
        var c =a*b;
        this.setState({msg:"Mul is  :"+c});
    }   
    Div(){
        var a =Number(this.refs.txt1.value);
        var b = Number(this.refs.txt2.value);
        var c =a/b;
        this.setState({msg:"div is  :"+c});
    }   
    Sub(){
        var a =Number(this.refs.txt1.value);
        var b = Number(this.refs.txt2.value);
        var c =a-b;
        this.setState({msg:"Sub is  :"+c});
    }
    render(){
        return(
            <div>
            Number1<input type="text" ref="txt1"/><br/>
            Number2<input type="text" ref="txt2"/><br/>
            <input type="button" value="add" onClick={this.Addititon.bind(this)}/>
            <input type="button" value="Mul" onClick={this.Mul.bind(this)}/>
            <input type="button" value="Div" onClick={this.Div.bind(this)}/>
            <input type="button" value="Sub" onClick={this.Sub.bind(this)}/>
            <h2>{this.state.msg}</h2>
            </div>
        )
    }  
} 
export default Add;