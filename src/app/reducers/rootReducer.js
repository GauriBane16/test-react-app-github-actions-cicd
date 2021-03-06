import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { fileUploadReducer } from "./fileUploadReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { logoutReducer } from "./logoutReducer";

export const rootReducer = combineReducers({ 
    authReducer,
    userReducer,
    fileUploadReducer,
    categoryReducer,
    productReducer,
    cartReducer,
    orderReducer,
    logoutReducer
})