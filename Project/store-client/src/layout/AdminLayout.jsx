import { Outlet, useNavigate } from "react-router-dom"
import AdminLeftBar from "../components/Admin/AdminLeftBar"
import AdminTopBar from "../components/Admin/AdminTopBar"
import { useEffect, useState } from "react"
import { getRole, isLoginValid } from "../service/auth"
import { Loader, Loader2 } from "lucide-react"

const AdminLayout = () => {
    const Navigate = useNavigate()
    const [renderAdmin, setRenderAdmin] = useState(false)
    const role = getRole()
    const checkNavigation = () => {
        if (!isLoginValid || role !== "ADMIN") {
            Navigate('/')
        }
        else {
            setRenderAdmin(true)
        }
    }

    useEffect(() => {
        checkNavigation()
    }, [Navigate])
    return (
        <>
            {
                renderAdmin ? (
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
                ) : (
                    < div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden">
                        <Loader2 className="h-14 w-14 animate-spin text-purple-500" />
                    </div >
                )
            }
        </>
    )
}

export default AdminLayout