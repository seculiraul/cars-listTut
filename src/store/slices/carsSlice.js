import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlices = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {

            // ass action.payload === {name: , cost: }
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid() 
            });
        },
        removeCar(state, action) {
            // assumpiton action.payload === id of the car we want to remove
            const updated = state.data.filter(car => car.id !== action.payload);
            state.data = updated
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlices.actions;
export const carsReducer = carsSlices.reducer;