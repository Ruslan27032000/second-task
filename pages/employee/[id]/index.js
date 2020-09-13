import {RootLayout} from "../../../layouts/RootLayout";
import {useRouter} from 'next/router'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/userReducer";
import Link from "next/link";

export default function EmployeeId() {
    const router = useRouter()
    const dispatch = useDispatch();
    const data = useSelector(state=>state.user)
    let id = router.query.id;
    useEffect(()=>{
        if(data.name==""){
            dispatch(getUsers(id))
        }
    },[])
    return (
        <RootLayout>
            <div className="card mt-5">
                <h5 className="card-header">{data.name}</h5>
                <div className="card-body">
                    <h5 className="card-title">Age: {data.age}</h5>
                    <p className="card-text">Salary: {data.salary}</p>
                    <Link href={`/employee/${id}/edit`}><a className="btn btn-primary">Edit</a></Link>
                </div>
            </div>
        </RootLayout>
    )
}