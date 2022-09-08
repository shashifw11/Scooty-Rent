import React from 'react'
import {useState , useEffect} from "react" ; 
import axios from "axios" ; 
import { Card } from '../card/cards';
const Product = () => {
    const [data , setData] = useState([]) ; 
    console.log(data) ; 
    useEffect(()=>{
            getData();  
    }, []) ; 

 const getData = ()=>{
      axios.get("http://localhost:8080/product").then((res)=>{
          
         return setData(res.data) ; 
      })
 }

  return (
   <div style = {{display : "flex" , flexWrap : "wrap" , justifyContent : "space-around" , marginTop : "50px"}}>
     {data.map((item , index)=>{
         return <Card id = {item.id} title = {item.title} image = {item.image} price = {item.price} rating = {item.rating}/>
     })}
   </div>
  )
}

export default Product
