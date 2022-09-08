
import "./card.css"
import {Link} from "react-router-dom"

export const Card = ({id ,rating,image,category,description,price,title})=>{
     //console.log(rating,price)
    return (
        
<div style = {{marginTop : "30px"}}className="card" >
    <div className= "imgdiv">
    <img src={image}  className="card-img-top" alt=""/>
    </div>
  
  <div className="card-body">
     <p className="card-title">{title}</p>
    <p className="card-text"> Price : {price} $</p>
    <p className="card-text">Rating {rating.rate}</p>
   
  </div>
   <div className = "link">
   <Link  to = {`/${id}`} style = {{fontWeight : "bolder" , width : "200px"}} className="btn btn-primary">Book Ride</Link>
   </div>
    </div>
  
    )
       
    
}
// <p className="card-text">{description}</p>