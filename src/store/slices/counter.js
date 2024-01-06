import { createSlice } from "@reduxjs/toolkit";

 const counterSlice= createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{

increaseCounter:function(state,action){
state.counter=state.counter+1

},
decreaseCouter:function(state,action){
    state.counter=state.counter-1
    
    }
}
})

export const {increaseCounter,decreaseCouter}=counterSlice.actions
export default counterSlice.reducer