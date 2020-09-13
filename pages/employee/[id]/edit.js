import {RootLayout} from "../../../layouts/RootLayout";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addEmployee} from "../../../redux/employeesReducer";
import {editUser} from "../../../redux/userReducer";

export default function EmployeeEdit(){


    const router = useRouter()
    let id = router.query.id;
    const data = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const [name, setName] = useState(data.name);
    const [age, setAge] = useState(data.age);
    const [salary, setSalary] = useState(data.salary);

    const updateName = e => {
        setName(e.target.value)
    }
    const updateAge = e => {
        setAge(e.target.value)
    }
    const updateSalary = e => {
        setSalary(e.target.value)
    }


    const editEmployee = (e) => {
        e.preventDefault()
        dispatch(editUser(id,name,salary,age))
    }
    return(
        <RootLayout>
            <div className="container mt-5 w-25 ">
                <form className="form-signin" onSubmit={editEmployee}>
                    <h1 className="h3 mb-3 font-weight-normal">Edit employee</h1>
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