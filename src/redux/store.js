import { configureStore } from "@reduxjs/toolkit";
import  formReducer from "./formReducer";
import modeReducer from "./modeReducer"

 const store =  configureStore({
    reducer : {
       form: formReducer,
       mode : modeReducer
    }

})

export default store