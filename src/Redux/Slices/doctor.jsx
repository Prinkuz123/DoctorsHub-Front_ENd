import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    doctors:[],
    loading:true,
    error:null
 }

 const doctorSlice=createSlice({
    name:"doctor",
    initialState,
    reducers:{
        setDoctors:(state,action)=>{
            state.doctors=action.payload
            state.loading=false
            state.error=null
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        setError:(state,action)=>{
             state.error=action.payload
             state.loading=false
        }
        
    }
 })

 export const{setDoctors,setError,setLoading}=doctorSlice.actions
 export default doctorSlice.reducer