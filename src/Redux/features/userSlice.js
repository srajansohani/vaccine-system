import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: "user",
    initialState :{
            users: [
                {
                    employeeId: '3107',
                    name: "John Doe",
                    email: "kenaa@example.com",
                    password: "123456",
                }
            ],
            user:{
                employeeId: "",
                name: "",
                email: "",
                password: "",
            }
        },
    reducers:{
        getUsers: (state,action)=>{
            if(state.users.find(user=>user.employeeId === action.payload)){
                state.user = state.users.find(user=>user.employeeId === action.payload);
                console.log(action.payload);
            };
        },
        addUsers: (state,action)=>{
            state.users = [...state.users,action.payload];
        }
    }
});
export default userSlice.reducer;
export const {addUsers,getUsers} = userSlice.actions;