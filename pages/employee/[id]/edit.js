import {RootLayout} from "../../../layouts/RootLayout";
import {useRouter} from "next/router";

export default function EmployeeEdit(){
    const router = useRouter()
    let id = router.query.id;

    return(
        <RootLayout>
            <p>EmployeeEdit</p>
        </RootLayout>
    )
}