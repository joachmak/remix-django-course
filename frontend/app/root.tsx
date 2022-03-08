import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { Group, MantineProvider } from "@mantine/core";
import MarginWrapper from "./components/MarginWrapper";
import Navbar from "./components/Navbar";

export const meta: MetaFunction = () => {
  return { title: "Django Remix Course" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider
          theme={{ colorScheme: "dark" }}
          withNormalizeCSS
          withGlobalStyles
        >
          <MarginWrapper>
            <Group style={{ width: "100%" }}>
              <Navbar />
              <Outlet />
            </Group>
          </MarginWrapper>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
