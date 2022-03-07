import {ReactNode} from "react";
import {AppShell, Grid, Header, Text, useMantineTheme} from "@mantine/core";
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
            <div style={{minHeight: "calc(100vh - 92px)", display: "flex", flexDirection: "column"}}>
                {props.children}
            </div>
        </AppShell>
    )
}

export function ColWrapper(props: {children: ReactNode; span: number;}) {
    const theme = useMantineTheme();
    const background = theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.blue[0];
  
    return (
      <Grid.Col
        span={props.span}
        style={{ background, padding: theme.spacing.md, marginBottom: 7 }}
      >
        {props.children}
      </Grid.Col>
    );
  }

export function TitleText(props: {children: ReactNode}) {
    return (
        <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            size="xl"
            weight={800}
            style={{ fontFamily: 'Greycliff CF, sans-serif' }}
        >
            {props.children}
        </Text>
    )
}
