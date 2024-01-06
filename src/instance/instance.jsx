import axios from "axios";


const axiosmovies=axios.create({

baseURL:"https://api.themoviedb.org/3/movie",


params:{
    api_key:'cab8d296e6a4911e0235e994e3836b6e'
}


})
export default axiosmovies