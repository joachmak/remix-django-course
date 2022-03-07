import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction
} from "remix";
import type { MetaFunction } from "remix";
import {MantineProvider} from "@mantine/core";
import rootStyles from "./root.css"
import {AppShellWrapper} from "~/components/wrapperComponents";


export const meta: MetaFunction = () => {
  return { title: "Django Remix Course" };
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: rootStyles }];

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
          <MantineProvider theme={{colorScheme: 'dark'}} withGlobalStyles withNormalizeCSS>
            <AppShellWrapper>
              <Outlet />
            </AppShellWrapper>
          </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
