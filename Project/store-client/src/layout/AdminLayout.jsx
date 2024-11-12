import { Outlet } from "react-router-dom"
import AdminLeftBar from "../components/Admin/AdminLeftBar"
import AdminTopBar from "../components/Admin/AdminTopBar"

const AdminLayout = () => {
    return (
        <>
            <div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden">
                <div className="w-[18vw] h-screen ">
                    <AdminLeftBar />
                </div>
                <div className=" w-[82vw] h-full flex flex-col justify-start items-start">
                    <div className="h-[3rem] w-full flex justify-center items-center">
                        <AdminTopBar />
                    </div>
                    <div className="w-full h-full flex justify-start items-start p-3 overflow-y-auto overflow-x-hidden">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout