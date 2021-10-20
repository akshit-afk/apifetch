import React,{useState} from "react";
import './starrating.css';
import { FaStar} from 'react-icons/fa'

const StarRating = () =>{
  const [rating,setRating] = useState(null)
  const[hover,sethover] = useState(null)
  return (
    <div >
       <h1>Rating App</h1>
       {[...Array(5)].map((star,i) =>{
         const ratingvalue = i+1
         return (
           <label>
           <input className ="radio"
            type="radio"
             name="rating"
             value={ratingvalue}
              onClick ={() =>setRating(ratingvalue)}
              />
    
         <FaStar style={{transition:"0.5s"}}size = {65} color={ratingvalue <= (hover||rating) ? "#ffc107":"#e4e5e9"}
              onMouseEnter = {() =>sethover(ratingvalue)}
              onMouseLeave = {() => sethover(null)}/>
         </label>)
       } )}
      
        

      
      
    </div>
  );
}

export default StarRating;