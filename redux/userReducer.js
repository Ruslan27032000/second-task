import * as axios from "axios";
import Router from "next/router";

const GET_USER='GET_USER'
const EDIT_USER = 'EDIT_USER'
const RESET_USER = 'RESET_USER'

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
        case RESET_USER:
            return {
                ...state,
                name:'',
                age:'',
                salary:''
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

export function resetUser(){
    return{
        type:RESET_USER
    }
}

export function editUser(id,name,salary,age){
    return dispatch=>{
        axios({
            method:'put',
            headers:{ 'Content-Type': 'application/x-www-form-urlencoded' },
            url:`${process.env.API_UPDATE}/${id}`,
            data:{
                name: name,
                salary: salary,
                age: age
            }
        }).then(response =>{
            /*Не знаю, стоит ли менять старый айдишник на новый*/
           if(response.data.status == "success"){
               dispatch({
                   type:EDIT_USER,
                   name,
                   salary,
                   age
               })
               Router.push(`/employee/${id}`);
           }
        })
    }
}