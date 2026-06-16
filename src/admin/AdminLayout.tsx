import { Outlet } from "react-router-dom"
import { OffcanvasNavbar } from "../shared/OffCanvasNavbar"

export const AdminLayout = ()=>{
    return(
        <>
        <OffcanvasNavbar/>
        
            <Outlet/>
        
        </>
    )
}