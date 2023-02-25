import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userName:"",
    token:null,
    isLoading:false
}

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        updateUserName:(state,action)=>{
            state.userName=action.payload;
        },
        updateToken:(state,action)=>{
            state.token=action.payload;
        },
        updateIsLoading:(state,action)=>{
            state.isLoading=action.payload;
        },
    }
})

export const {updateUserName,updateToken,updateIsLoading} = loginSlice.actions

export default loginSlice.reducer