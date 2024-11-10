import { Outlet } from "react-router-dom"
import AdminLeftBar from "../components/Admin/AdminLeftBar"
import AdminTopBar from "../components/Admin/AdminTopBar"

const AdminLayout = () => {
    return (
        <>
            <div className="w-screen h-full flex flex-row justify-center items-center">
                <div className="w-[18vw] h-screen left-0 top-0">
                    <AdminLeftBar />
                </div>
                <div className=" relative w-[82vw] h-full flex flex-col justify-start items-start">
                    <div className="h-[3rem] w-full flex justify-center items-center">
                        <AdminTopBar />
                    </div>
                    <div className="w-full h-full min-h-[92vh] flex justify-start items-start p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout