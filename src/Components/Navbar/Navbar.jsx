import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {useState , useEffect} from "react" ; 
import "./Navbar.css"

export const Navbar = ({user}) => {

  const [timer,setTimer] = useState(300) ; 
  const [show,setShow] = useState(true); 
  
      useEffect(()=>{ 
        
       const id =  setInterval(()=>{

          setTimer((prevValue)=>{ 
             if(timer <= 0){
                 clearInterval(id)
                 return 0
             }
             return prevValue-1 
          });
         },1000); 
        return (()=>{
          clearInterval(id);
        })
      },[])

      
  return (
       <div style={{ background: "#1f80e0", padding: "10px", }} className="container-fluid">
         
          <Link to="/" style={{color : "white" , fontWeight: "bold" }} className="navbar-brand" >
            <img src="https://th.bing.com/th/id/OIP.6Mo10X1GTVfp0daDJErzPgAAAA?pid=ImgDet&w=236&h=188&rs=1" style={{height: "50px" , borderRadius : "50%" }} />
            MakeRide</Link>
            
           {timer===0 ? <p  style = {{color : "white" , fontSize : "20px"}}>Offer finished</p> : <p style = {{color : "white"  , fontSize : "20px"}}>Limeted Time {timer} sec</p> }
           
            <Link style = {{textDecoration : "none"}} to="/login"><Button id = "login_button"style={{ }} variant="outlined" >
              {user ? "Sign out" : "Login"}
           </Button></Link>
          
  
        </div>
    
      
    

  )
}