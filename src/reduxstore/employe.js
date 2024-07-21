import { createSlice } from "@reduxjs/toolkit";

let id=0
const employeSlice=createSlice({
    name:"employe",
    initialState:[],
    reducers:{
        addEmployee:(state,action)=>{
            state.push({
                id:++id,
                name:action.payload.name
            })
        }
    }
})
export const {addEmployee}=employeSlice.actions
export default employeSlice.reducer