import React from "react";
import { decreasecount, incrementcount } from "../redux/counteraction";
import {connect} from "react-redux"
//import { incrementcount } from "../redux/counteraction";


function Counter (props){
    return(
        <div>
            <h1> COUNNT - {props.num}</h1>
            <button onClick = {props.incrementcount}>Increase Count</button>
            <button onClick ={props.decreasecount} >Decrese Count</button>
        </div>
    )
}
 const mapStatetoProps = state =>{
     return {
         num :state.num
    }
 } 
 const mapDispatchtoProps = dispatch =>{
     return {
         incrementcount : () =>dispatch(incrementcount()),
         decreasecount : () =>dispatch(decreasecount())
     }
 }
 export default connect(mapStatetoProps,mapDispatchtoProps)(Counter)
