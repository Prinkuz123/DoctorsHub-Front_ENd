import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    medicine:[],
    loading:"true",
    error:"null"
 }

 const medicineSlice=createSlice({
    name:"Medicine",
    initialState,
    reducers:{
        setMedicines:(state,action)=>{
            state.medicines=action.payload
            state.loading=false
            state.error=null
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        setError:(state,action)=>{
            state.loading="false"
            state.error=action.payload

        }
    }
 })

 export const{setMedicines,setLoading,setError}=medicineSlice.actions
 export default medicineSlice.reducer

