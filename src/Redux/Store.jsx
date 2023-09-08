import {configureStore} from "@reduxjs/toolkit"
import patientSlice from './Slices/patient'
import doctorSlice from "./Slices/doctor"


export const Store=configureStore({
    reducer:{
        patient:patientSlice,
        doctor:doctorSlice
    }
})