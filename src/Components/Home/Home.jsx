import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom" ; 
import "./Home.css"
import { SingleCarousel } from './carosuel'
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
    <div>
      <SingleCarousel/> 
       <div className = "box"> 
       <div className = "container">
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  style = {{width : "100%" , height : "200px" ,  }}variant="top" src="https://www.talkingtrendo.com/wp-content/uploads/2015/01/honda-dio-drum-bs6-sports-red-179350016-zompv.png" />
      <Card.Body>
        <Card.Title>Bangalore</Card.Title>
        <Card.Text style = {{textOverflow: "ellipsis"}}>
        Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs and paperwork.
        </Card.Text>
        <Link to = "/product"><Button variant="primary">Trip your Ride</Button></Link>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  style = {{width : "100%" ,height : "200px" ,  }} variant="top" src="https://img.indianautosblog.com/2019/04/12/new-tvs-scooty-red-25-years-4bf5.jpg" />
      <Card.Body>
        <Card.Title>Pune</Card.Title>
        <Card.Text>
        Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs and paperwork.
        </Card.Text>
        <Link to = "/product"><Button variant="primary">Trip your Ride</Button></Link>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img  style = {{width : "100%" , height : "200px" ,  }} variant="top" src="https://www.dealerservicecenter.in/assets/bikes/tvs/scooty-pep-plus/tvs-scooty-pep-plus-2178.jpeg" />
      <Card.Body>
        <Card.Title>Chennai</Card.Title>
        <Card.Text>
        Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs and paperwork.
        </Card.Text>
        <Link to = "/product"><Button variant="primary">Trip your Ride</Button></Link>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img   style = {{width : "100%" , height : "200px",  }} variant="top" src="https://assetscdn1.paytm.com/images/catalog/product/S/SC/SCOTVS-JUPITER-RAJP860383CD78AADE/1561973855091_7..jpg" />
      <Card.Body>
        <Card.Title>Haydrabad</Card.Title>
        <Card.Text>
        Enjoy the freedom of owning a two-wheeler without the hefty down-payments, EMIs and paperwork.
        </Card.Text>
        <Link to = "/product"><Button variant="primary">Trip your Ride</Button></Link>
      </Card.Body>
    </Card>
        </div>
      
      
       </div>
     
       </div>
       
    </div>
    <div style = {{marginTop : "100px"}}>
    <Footer/>
    </div>
    
    </div>
  )
}

export default Home
