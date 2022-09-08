import React from 'react'
import {useParams} from "react-router-dom"
import {useState , useEffect} from "react" ; 
import axios from "axios" ; 
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductID = () => {
 const {id} = useParams() ; 
  const [data , setData] = useState([]) ; 
     console.log(data) ; 
  useEffect(()=>{
             getData()
  }, []) ; 

  const getData =()=>{
     axios.get(`http://localhost:8080/product/${id}`).then((res)=>{
         return  setData(res.data) ; 
     })
  }

  return (
    <div>
        <div style = {{width : "300px" , margin : "auto" , marginTop : "100px"}}>
  <Card>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Text>
             {data.title}
          </Card.Text>
        </Card.Body>
        <Button>Block Vehicle</Button>
      </Card> 
     
      </div>
    </div>
  )
}

export default ProductID
