import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    responseData:"",
    isLoading:false,
}

export const homeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{
        updateResponseData:(state,action)=>{
            state.responseData=action.payload;
        },
        updateIsLoading:(state,action)=>{
            state.isLoading=action.payload;
        },
    }
})

export const {updateResponseData,updateIsLoading} = homeSlice.actions

export default homeSlice.reducer