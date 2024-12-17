import { Outlet } from "react-router-dom"
import AppBar from "../AppBar/AppBar"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <div>
            <AppBar />
            <Outlet />
            <Footer/>
     </div>
 )
}

export default Layout