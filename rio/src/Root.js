import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import '../src/components/Apartament.css'
import Footer from "./Footer";


function Root(){
    const location=useLocation();
    return(
        <>
        <div className={location.pathname==='/'?'background':location.pathname==='/Our%20Apartament'?'background2':location.pathname==='/Rio'?'backgroundrio':location.pathname==='/Contact'?'backgroundcont':'background2'}>
        <Header heading={location.pathname==='/'?'Welcome to Rio':location.pathname==='/Our%20Apartament'?'Our Apartament':location.pathname==='/Rio'?'Rio De Janeiro':location.pathname==='/Contact'?'Contact Us':'Our Apartament'}/>
        <Outlet/>
        <Footer footer={location.pathname==='/'?'footer-extra':'footer'}/>
        </div>
        </>
    )
}
export default Root