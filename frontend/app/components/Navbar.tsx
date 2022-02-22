import {Menu} from "antd";
import {useState} from "react";
import history from 'history/browser'

export default function Navbar() {
    const [current, setCurrent] = useState([""])
    const changePage = (page: string) => {
        setCurrent([page]);
        history.push("/" + page);
    }
    return (
        <>
            <Menu mode="horizontal" selectedKeys={current}>
                <Menu.Item key="" onClick={() => changePage("")}>
                    Home
                </Menu.Item>
                <Menu.Item key="hamsters" onClick={() => changePage("hamsters")}>
                    Hamster Overview
                </Menu.Item>
                <Menu.Item key="species" onClick={() => changePage("species")}>
                    Species overview
                </Menu.Item>
                <Menu.Item key="admin" onClick={() => changePage("admin")}>
                    Admin panel
                </Menu.Item>
            </Menu>
        </>
    )
}
