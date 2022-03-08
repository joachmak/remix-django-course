import { Button, SimpleGrid } from "@mantine/core";
import { ReactNode, useState } from "react";
import { Link } from "remix";

function CustomMenuButton({
  id,
  navState,
  children,
}: {
  id: number;
  navState: number;
  children: ReactNode;
}) {
  const isActive = id === navState;
  return (
    <Button
      variant={isActive ? "filled" : "outline"}
      style={{ width: "100%", height: 50, margin: "10px 0", fontSize: 16 }}
    >
      {children}
    </Button>
  );
}

export default function Navbar() {
  const [navState, setNavState] = useState(0);
  return (
    <SimpleGrid style={{ width: "100%" }} cols={3}>
      <Link to={"/"} onClick={() => setNavState(0)}>
        <CustomMenuButton id={0} navState={navState}>
          Hjem
        </CustomMenuButton>
      </Link>
      <Link to={"/hamsters"} onClick={() => setNavState(1)}>
        <CustomMenuButton id={1} navState={navState}>
          Hamstere
        </CustomMenuButton>
      </Link>
      <Link to={"/species"} onClick={() => setNavState(2)}>
        <CustomMenuButton id={2} navState={navState}>
          Hamster-arter
        </CustomMenuButton>
      </Link>
    </SimpleGrid>
  );
}
