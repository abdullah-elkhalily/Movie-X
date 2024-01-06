import { configureStore } from "@reduxjs/toolkit";
import  favorReducer from "./slices/Addfavorit";
import counterReducer from "./slices/counter";

const Store= configureStore({

reducer:{

    favorit:favorReducer,
    counter:counterReducer
}

})

export default Store