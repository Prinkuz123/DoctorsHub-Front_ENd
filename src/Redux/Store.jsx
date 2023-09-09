import {configureStore} from "@reduxjs/toolkit"
import patientSlice from './Slices/patient'
import doctorSlice from "./Slices/doctor"
import medicineSlice from './Slices/medicine'


export const Store=configureStore({
    reducer:{
        patient:patientSlice,
        doctor:doctorSlice,
        medicine:medicineSlice
    }
})