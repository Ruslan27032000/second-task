import {combineReducers} from "redux";
import {EmployeesReducer} from "./employeesReducer";




export const rootReducer = combineReducers({
    // auth:authReducer
    employee:EmployeesReducer
})