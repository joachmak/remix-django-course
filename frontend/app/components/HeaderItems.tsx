import {faHouse, faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Center} from "@mantine/core";
import {useState} from "react";

export default function HeaderItems() {
    let [page, setPage] = useState(0)
    return (
        <>
            <Center>
                <Button leftIcon={<FontAwesomeIcon icon={faHouse}/>} mx="sm" variant={page == 0 ? "filled" : "outline"}
                        onClick={() => setPage(0)}>
                    Hjem
                </Button>
                <Button leftIcon={<FontAwesomeIcon icon={faLock}/>} mx="sm" variant={page == 1 ? "filled" : "outline"}
                        onClick={() => setPage(1)}>
                    Admin
                </Button>
            </Center>

        </>
    )
}
