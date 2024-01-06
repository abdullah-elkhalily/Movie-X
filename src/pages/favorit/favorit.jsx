// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux/es';
import { useNavigate } from 'react-router-dom';
import { addfavorit, removfavorit } from '../../store/slices/Addfavorit';
import { decreaseCouter } from '../../store/slices/counter';

const Favorit = () => {
  const navigate=useNavigate()
  const Fav= useSelector((State)=>State.favorit.arr)
  const cont = useSelector((State) => State.counter.counter);

  const dispatch=useDispatch()
 const  removmovi=(m)=>{
var indx=Fav.indexOf(m)
console.log(indx);
dispatch(removfavorit(indx))
dispatch(decreaseCouter())
 
  }


  return (
    <>
     <div className="moviesPapuler"> 
     <Row xs={1} md={5} className="g-4">
      {Fav.map((mov) => (
    <Col key={mov.id}>
    <div className="total">       

     <Card className="content">
   <div
   className="button_movies"
   onClick={()=>{removmovi(mov)}}
   >
     {mov.iffavorit ? (
      <i className=" iD fa-solid fa-heart fa-2xl"></i> 
     ) : (
       <i className="  ic fa-regular fa-heart fa-2xl"></i>
     )}
   </div>



   <Card.Img
   className="imgMovie"
     variant="top"
     src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
   />
   <Card.Body className="BodyMovies"
   
   
   >
     <p className="textName">{mov.original_title}</p>
    
     <div
       className="detielesMovie"
       onClick={() => { navigate(`/details/${mov.id}`);
       }}
     >
      {mov.original_title}
     </div>
     <p className="dateMovie" >{mov.release_date}</p>
   </Card.Body>
 </Card>

 </div>

</Col>
      ))}
    </Row>
  
  </div>  </>
  )
}

export default Favorit
