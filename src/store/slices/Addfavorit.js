import { createSlice } from '@reduxjs/toolkit'

export const favoritSlice = createSlice(

    {
  name:"favorit",
initialState:{
  
    arr:[]
},
reducers:{

     addfavorit:function(state,action){
        state.arr.push(action.payload)  
      },

      removfavorit:function(state,action){
        state.arr.splice(action.payload,1)  
      }
}

})
export const {addfavorit,removfavorit}=favoritSlice.actions
export default favoritSlice.reducer