import { Container, Grid, useMantineTheme } from "@mantine/core";
import { TitleText } from "~/components/wrapperComponents";



export default function HamsterOverview() {
  const theme = useMantineTheme();
  const background = theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.blue[0];
  return (
    <>
      <TitleText>Hamster Overview</TitleText>
    </>
  );
}
