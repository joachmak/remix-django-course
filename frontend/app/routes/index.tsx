import { Text, Group, useMantineTheme } from "@mantine/core";
import { Outlet } from "react-router-dom";
import CustomContainer from "~/components/CustomContainer";
import HeaderText from "~/components/HeaderText";
import MarginWrapper from "~/components/MarginWrapper";
import Navbar from "~/components/Navbar";

export default function Index() {
  const theme = useMantineTheme();
  return (
    <div style={{ width: "100%", alignSelf: "center" }}>
      <CustomContainer>
        <div style={{ textAlign: "center" }}>
          <HeaderText>Velkommen til kurs for Remix.js!</HeaderText>
        </div>
      </CustomContainer>
      <Text align="center" color={"dimmed"} style={{ width: "100%" }}>
        (Vennligst bruk navigasjonsmenyen øverst på siden)
      </Text>
    </div>
  );
}
