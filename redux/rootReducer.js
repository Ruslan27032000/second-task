import {combineReducers} from "redux";
import {EmployeesReducer} from "./employeesReducer";
import {userReducer} from "./userReducer";




export const rootReducer = combineReducers({
    // auth:authReducer
    employee:EmployeesReducer,
    user:userReducer
})