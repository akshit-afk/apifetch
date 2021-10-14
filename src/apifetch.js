import React,{Component} from "react";

class ApiFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
         error:null,
            items :[],
            isLoading :false,
            
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')
        .then(res=>res.json())
        .then(result => {
            this.setState({
                isLoading : true,
                items:result,

            
                
            },
            )
        },
        error => {
            this.setState({
                error:error,
                isLoading :true
            })
        })

    }
    
    render(){
        const {items,isLoading,error,count} = this.state;
        if(error){
                   return<div>Error :{error.message}</div>
        }
        if(!isLoading){
            return<div>Loading...</div>
        }
        return(
            <ul>
                {items.map(item=>(
                    <li key = {item.id}>
                        <h1>{item.title}</h1>
                        <img src={item.url}></img>
                        
                        
                    </li>
                ))}
            </ul>
        )
            
        
    }
}
export default ApiFetch;