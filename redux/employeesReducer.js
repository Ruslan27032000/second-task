import * as axios from "axios";

const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
const GET_EMPLOYEES = 'GET_EMPLOYEES'

const initialState = {
    employees: []
}

export const EmployeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.data
            }
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: action.data
            }
        default:
            return state;
    }
}

export function getEmployees() {
    return dispatch => {
        axios.get(process.env.API_GET).then(response =>
            dispatch({
                type: GET_EMPLOYEES,
                data: response.data.data
            })
        )
    }
}

export function deleteEmployee(id) {
    return (dispatch,getState) => {
        axios.delete(`${process.env.API_DELETE}/${id}`)
            .then(response => {
                    if (response.data.status == "success") {
                        let new_arr = [];
                        let state = getState();
                        let arr = state.employee.employees
                        for(let i in arr){
                            if(arr[i].id != 1){
                                new_arr.push(arr[i])
                            }
                        }
                        dispatch({
                            type:DELETE_EMPLOYEE,
                            data:new_arr
                        })
                    }
                }
            )
    }
}