import { Container, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

export default function CustomContainer({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  return (
    <Container
      style={{
        backgroundColor: theme.colors.dark[6],
        width: "100%",
        padding: 15,
        boxShadow: "0 3px 7px rgba(0,0,0,0.2)",
        borderRadius: 5,
      }}
    >
      {children}
    </Container>
  );
}
