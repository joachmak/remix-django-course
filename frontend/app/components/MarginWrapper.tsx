import { Center, Grid } from "@mantine/core";
import { ReactNode } from "react";

export default function MarginWrapper({ children }: { children: ReactNode }) {
  return (
    <Grid style={{ width: "100%" }} columns={24}>
      <Grid.Col lg={6} />
      <Grid.Col span={24} lg={12}>
        <Center style={{ width: "100%" }}>{children}</Center>
      </Grid.Col>
      <Grid.Col lg={6} />
    </Grid>
  );
}
