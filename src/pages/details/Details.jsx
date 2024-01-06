import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosmovies from '../../instance/instance'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
const {id}=useParams()
const [movDetils,setMovDetiels]=useState({})

 useEffect( ()=>{
axiosmovies.get(`/ ${id} ?api_key=cab8d296e6a4911e0235e994e3836b6e`).then ((res)=>
{
  console.log(res);
  setMovDetiels(res.data)
}).catch((err)=>{
  console.log(err);
})

 },[])

  return (
    <>
      <Card style={{ width: '25rem' ,margin:"30px"}}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movDetils.poster_path}`}/>
      <Card.Body>
        <Card.Title>{movDetils.original_title
}</Card.Title>
        <Card.Text>
        {movDetils.overview}
        </Card.Text>
       
      </Card.Body>
    </Card>
    </>
  )
}

export default Details
