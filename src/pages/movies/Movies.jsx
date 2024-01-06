// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosmovies from "../../instance/instance";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es";
import { addfavorit } from "../../store/slices/Addfavorit";
import { increaseCounter } from "../../store/slices/counter";
import"./Movies.css"
import Section from "../../commponents/Section";
const Movie = () => {
  const Fav = useSelector((State) => State.favorit.arr);
  const cont = useSelector((State) => State.counter.counter);

  const dispatch = useDispatch();
  console.log(Fav);

  const navigate = useNavigate();

  const [Movie, setmovie] = useState([]);

  const [page, setpage] = useState("9");

  useEffect(() => {
    axiosmovies
      .get(`/popular?api_key=cab8d296e6a4911e0235e994e3836b6e&page=${page}`)
      .then((res) => {
     

    res.data.results.map((isf) => {
          isf.iffavorit = false;

        });  
         setmovie(res.data.results);
                 console.log(res.data.results);

      })

      .catch((err) => {
        console.log(err);
      });
  }, [page]);


  

  const previousPage = () => {
    setpage(page - 1);
  };
  const nextPage = () => {
    setpage(page + 1);
  };

  const Addfavorit = (m) => {
m.iffavorit=true


    if (!Fav.includes(m)) {
      dispatch(addfavorit(m));
      dispatch(increaseCounter());
            m.iffavorit=false;
    }
 
   console.log(Movie);
     setmovie(Movie);


  };
  
  return (
    <>
    <div className='SectionPart'>    
<Section></Section>
</div>
    <div className="moviesPapuler"> 
       
      <Row xs={3}  md={6} className="g-0 ">
        {Movie.map((mov) => (
          <Col key={mov.id}>
<div className="total">       
  
                <Card className="content">
              <div
              className="button_movies"
                onClick={() => {
                  Addfavorit(mov);
                }}
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
      <div className="pagnetion ">
        {" "}
        <button
          className="btn btn-light "
          onClick={() => {
            previousPage();
          }}
        >
       <i class="fa-solid fa-angle-left"></i>
        </button>
        <div>
        <button
          className="btn btn-light "
         
        >
1       </button>
        <button
          className="btn btn-light "
        
        >
2        </button>

<button
          className="btn btn-light "
       
        >
3        </button>
        </div>
        <button
          className="btn btn-light "
          onClick={() => {
            nextPage();
          }}
        >
         
         <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
 </div>

    </>
  );
};

export default Movie;
