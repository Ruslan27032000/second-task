import {RootLayout} from "../../layouts/RootLayout";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addEmployee} from "../../redux/employeesReducer";
import Router from "next/router";
import * as axios from "axios";

export default function Create() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [salary, setSalary] = useState();

    const updateName = e => {
        setName(e.target.value)
    }
    const updateAge = e => {
        setAge(e.target.value)
    }
    const updateSalary = e => {
        setSalary(e.target.value)
    }


    const createEmployee = (e) => {
        e.preventDefault()
        dispatch(addEmployee(name,age,salary));

    }

    return (
        <RootLayout>
            <div className="container mt-5 w-25 ">
                <form className="form-signin" onSubmit={createEmployee}>
                    <h1 className="h3 mb-3 font-weight-normal">New employee</h1>
                    <label htmlFor="inputEmail" className="sr-only">Name</label>
                    <input className="form-control" placeholder="Name" required value={name} onChange={updateName}
                           autoFocus/>
                    <label htmlFor="inputEmail" className="sr-only">Age</label>
                    <input type="number" className="form-control mt-2" placeholder="Age" required value={age}
                           onChange={updateAge}
                           autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Salary</label>
                    <input type="number" className="form-control mt-2" required value={salary} onChange={updateSalary}
                           placeholder="Salary" required/>
                    <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Add</button>
                </form>
            </div>
        </RootLayout>
    )
}