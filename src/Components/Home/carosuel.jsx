import "./carosule.css" ; 
import Slider from "react-slick" ; 
import 'slick-carousel/slick/slick.css' ;
import "slick-carousel/slick/slick-theme.css" ;
import {useState} from "react" ; 
import {product} from "./productImg"
<productImg></productImg>

export const SingleCarousel = ()=>{ 
    const [data , setData]  = useState(product) ;
     //console.log(data);

 
    return(
        <div style = {{margin : "30px" }}> 
         
           <Slider autoplay={true} autoplaySpeed = {2000} dots = {true} initialSlide = {3} infinite={true}>
                  {
                    data.map(item=>(
                        <div>
                        <img src = {item.image}  alt = "alter" style = {{width : "100%"  ,  height : "75vh"}}/>
                    </div> 
                    ))
                }
           </Slider>
        </div>
    )
}