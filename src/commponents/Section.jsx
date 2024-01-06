import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import'./section.css'
const Section = () => {
  return (
    <>  <div className='divSection'>

      
       <Carousel className='cursel'>
      <Carousel.Item>
<img src="https://image.tmdb.org/t/p/w500//gSkfBGdxdialBMM7P02V4hcI6Ij.jpg" alt=""  width={800} height={500}/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://image.tmdb.org/t/p/w500//z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg"  width={800} height={500}alt="" />

        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://image.tmdb.org/t/p/w500//d07phJqCx6z5wILDYqkyraorDPi.jpg" width={800} height={500}  alt="" />

        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<div > 



</div>


   
    </div>
 </> )
}

export default Section;
