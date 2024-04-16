import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

 const Root = () => {
    return (
        <div className="font-robotoMono p-5 min-h-screen">
            <div className="flex flex-col md:flex-row gap-6 items-center h-[610px]">
            <Navbar/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Root;