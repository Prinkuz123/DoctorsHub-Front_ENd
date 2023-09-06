import {configureStore} from "@reduxjs/toolkit"
import patientSlice from './Slices/reducer'


export const Store=configureStore({
    reducer:{
        patient:patientSlice
    }
})