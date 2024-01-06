import React, { useEffect, useState } from 'react';
import './Autocomplete.css';
import axiosmovies from '../instance/instance';
import { useNavigate } from 'react-router-dom';


const SearchMovies = ({setSrchDsBlock}) => {
    const [filterValue, setFilterValue] = useState('');
    const [filterResult, setFilterResult] = useState([])
    // const [filterResultCat, setFilterResultCat] = useState([])
    const navigate = useNavigate();
    const [Movie, setmovie] = useState([]);

    const [page, setpage] = useState(["1","2","3"]);
  
    useEffect(() => {
      axiosmovies
        .get(`/popular?api_key=cab8d296e6a4911e0235e994e3836b6e&page=${1}`)
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
    



    useEffect(() => {
       
        let srchResult = Movie.filter(mov => filterValue.length > 0 && mov.original_title .toLowerCase().startsWith(filterValue.toLocaleLowerCase()))
        // let srchResultCat = allprd.filter(prd => filterValue.length > 0 && prd.category.toLowerCase().startsWith(filterValue.toLocaleLowerCase()))
        setFilterResult(srchResult)
        // setFilterResultCat(srchResultCat)

    }, [filterValue])


    useEffect(() => {
        setFilterResult('');
        // setFilterResultCat('');
    }, [])



    return (
        <div className='autocomplet position-relative '>


            <div className="srchinput-container">
                
                {/* <i className="fa-solid fa-xmark d-lg-none position-absolute pt-3 ms-3 fs-4 opacity-75" */}
               

                <input type='text'  className='searchMovies'  placeholder='search of Movies' 
                onChange={(e) => setFilterValue(e.target.value)} />
                       <i className="fa-solid fa-magnifying-glass searchIcon" 
                onClick={()=> {setSrchDsBlock(false)}}/>

            </div>
          
            <div className='result-srch mt-2 ms-2 position-absolute '  style={{ 'zIndex': 9, 'right': 0, "top": "45px", width: '100%' }}>
                <div className="items me-2">

                    {filterResult.length > 0 && filterResult.map((prd, index) =>

                        <>

                            <div
                                key={index}
                                className='d-flex my-1 flex-row me-2'
                                onMouseOver={(e) => e.target.style = 'cursor : pointer'}
                                onClick={() => {
                                    
                                    navigate(`details/${prd.id}`);
                                    setFilterValue('');
                                }}
                            >

                                <div className="result-img ">
                                    <img  src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`} alt={prd.original_title} width={60} height={60} className='ms-2' />
                                </div>


                                <div className="result-info">
                                    <span className='d-block'>{prd.original_title}</span>
                                    <div
                  className="detielesMovi"
           
                >
                 {prd.overview}
                </div>
                                </div>

                            </div>
                        </>


                    )}



                </div>

            </div>

        </div>
    );
};

export default SearchMovies;
