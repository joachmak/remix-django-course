import { Text } from "@mantine/core";
import { ReactNode } from "react";

export default function HeaderText({ children }: { children: ReactNode }) {
  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={900}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      {children}
    </Text>
  );
}
