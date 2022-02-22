import {ReactNode} from "react";
import {AppShell, Header} from "@mantine/core";
import HeaderItems from "~/components/HeaderItems";

export function AppShellWrapper(props: {children: ReactNode}) {
    /* Application wrapper providing a header for the application */
    return (
        <AppShell
            padding="md"
            header={<Header height={60} padding="xs">{
                <HeaderItems />
            }</Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <div style={{minHeight: "calc(100vh - 92px)"}}>
                {props.children}
            </div>
        </AppShell>
    )
}
