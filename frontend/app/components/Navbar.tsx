import { Button, SimpleGrid } from "@mantine/core";
import { ReactNode } from "react";
import { useLocation } from "react-router";
import { Link } from "remix";

function CustomMenuButton({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Button
      variant={
        path === "/"
          ? currentPath === path
            ? "filled"
            : "outline"
          : currentPath.startsWith(path)
          ? "filled"
          : "outline"
      }
      style={{ width: "100%", height: 50, margin: "10px 0", fontSize: 16 }}
    >
      {children}
    </Button>
  );
}

function CustomLink({ path, text }: { path: string; text: string }) {
  return (
    <Link to={path}>
      <CustomMenuButton path={path}>{text}</CustomMenuButton>
    </Link>
  );
}

export default function Navbar() {
  return (
    <SimpleGrid style={{ width: "100%" }} cols={4}>
      <CustomLink path={"/"} text={"Hjem"} />
      <CustomLink path={"/hamsters"} text={"Hamstere"} />
      <CustomLink path={"/species"} text={"Arter"} />
      <CustomLink path={"/admin"} text={"Admin"} />
    </SimpleGrid>
  );
}
