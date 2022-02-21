import Navbar from "~/components/Navbar";
import {Outlet} from "react-router-dom";

export default function Index() {

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
