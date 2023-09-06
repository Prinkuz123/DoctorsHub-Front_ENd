import { createSlice } from "@reduxjs/toolkit";


const initialState={
    patients:[],
    loading :true,
    error:null
}

const patientSlice=createSlice({
    name:"patient",
    initialState,
    reducers:{
        setPatients:(state,action)=>{
            state.patients=action.payload
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


export const{setPatients,setError,setLoading}=patientSlice.actions
export default patientSlice.reducer