import {RootLayout} from "../../layouts/RootLayout";
import * as axios from "axios";
import Link from "next/link";
import Router from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteEmployee, getEmployees} from "../../redux/employeesReducer";
import {resetUser} from "../../redux/userReducer";


export default function Employee() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.employee.employees)
    useEffect(() => {
        if (data.length == 0) {
            dispatch(getEmployees());
        }
        dispatch(resetUser())
    }, [])


    return (
        <RootLayout>
            <div className="row mt-5">
                <button type="button" className="btn btn-success"
                        onClick={() => Router.push('/employee/create')}>Добавить
                </button>
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(employee => (
                                <tr key={employee.id}>
                                    <th scope="row">{employee.id}</th>
                                    <Link href={`/employee/${employee.id}`}>
                                        <a>
                                            <td>{employee.employee_name}</td>
                                        </a>
                                    </Link>
                                    <td>{employee.employee_salary}</td>
                                    <td>{employee.employee_age}</td>
                                    <button className="btn btn-danger"
                                            onClick={() => dispatch(deleteEmployee(employee.id))}>
                                        Удалить
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </RootLayout>
    )
}

Employee.getInitialProps = async ({store, req}) => {
    if (!store.employees) {
        if (!req) {
            return {employees: null}
        }
        await store.dispatch(getEmployees());
        await store.dispatch(resetUser())
        return {}
    }
}