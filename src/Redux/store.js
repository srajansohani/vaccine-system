import {configureStore} from "@reduxjs/toolkit";
import ContactReducer from "./features/vaccineSlice";
import UserReducer from "./features/userSlice"
import VaccineReducer from "./features/vaccineSlice";
export default configureStore({
    reducer: {
        vaccine: VaccineReducer,
        user: UserReducer
    }
})
