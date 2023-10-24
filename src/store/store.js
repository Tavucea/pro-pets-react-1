import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./"
export default configureStore ({
    reducer: {
        counter: counterReducer
    }
})