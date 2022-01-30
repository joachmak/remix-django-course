import {Link} from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <Link to="/hamsters">Hamster overview</Link><br />
        <Link to="/admin">Admin panel</Link>
    </div>
  );
}
