import {configureStore} from "@reduxjs/toolkit";
import ContactReducer from "./features/contactSlice";
import UserReducer from "./features/userSlice"
export default configureStore({
    reducer: {
        contact: ContactReducer,
        user: UserReducer
    }
})
