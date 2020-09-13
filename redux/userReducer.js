import * as axios from "axios";

const GET_USER='GET_USER'
const EDIT_USER = 'EDIT_USER'

const initialState={
    name:'',
    age:'',
    salary:''
}


export const userReducer = (state=initialState,action)=>{
    switch (action.type){

        case GET_USER:
            return{
                ...state,
                name:action.name,
                age:action.age,
                salary: action.salary
            }

        case EDIT_USER:
            return{
                ...state,
                name:action.name,
                age:action.age,
                salary: action.salary
            }
        default:
            return state;
    }
}


export function getUsers(id){
    return dispatch=>{
        axios.get(`${process.env.API_GET_BY_ID}/${id}`).then(response =>{
           let data =  response.data.data
                dispatch({
                    type:GET_USER,
                    name:data.employee_name,
                    age:data.employee_age,
                    salary:data.employee_salary
                })
        }
        )
    }
}