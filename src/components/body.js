import Header from "./header";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Body;
