import {createSlice} from '@reduxjs/toolkit';
 import {v4 as uuidv4} from 'uuid'

 export const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState: {
        vaccineData: [
            {
                employeeId: "3107",
                name: "John",
                email: "kenaa@example.com",
                vaccine: "Pfizer",
                firstDose: "taken",
                secondDose: "taken",
                firstDoseDate: "2021-01-01",
                secondDoseDate: "2021-01-01",
                fullyVaccinated: "Yes",
            }
                
        ],
        filters: {
            vaccine: "",
            name: "",
            firstDose: "",
            secondDose: ""
        },
        
    },
    reducers: {
        
        addVaccineData: (state, action) => {
            const newData = {...action.payload}
            state.vaccineData = [...state.vaccineData,newData] 
        },
        deleteVaccineData: (state,action)=>{
            
            state.vaccineData = state.vaccineData.filter((item)=>item.employeeId !== action.payload)
        },
        updateVaccineData: (state, action) => {
            state.vaccineData = state.vaccineData.map((item)=>item.id === action.payload.id? action.payload : item)
        },
        updateFilters: (state, action) => {
            state.filters = action.payload
        }
    }
 })
 export const {addVaccineData,deleteVaccineData,updateVaccineData,updateFilters} = vaccineSlice.actions;
 export default vaccineSlice.reducer;