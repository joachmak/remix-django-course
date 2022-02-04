import {Link} from "@remix-run/react";

export default function Index() {
  return (
    <div>
        <h1>Welcome to Remix</h1>
        <Link to="/hamsters">Hamster overview</Link><br />
        <Link to="/species">Species overview</Link><br />
        <Link to="/admin">Admin panel</Link>
    </div>
  );
}
