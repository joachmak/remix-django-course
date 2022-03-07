import { Link, Outlet, useLoaderData } from "remix";
import HamsterForm from "~/components/HamsterForm";
import { getSpecies } from "~/modules/species";
import SpeciesForm from "~/components/SpeciesForm";

export async function loader() {
  let data = {
    species: {},
  };
  data.species = await getSpecies();
  return data;
}

export default function AdminPanel() {
  let loaderData = useLoaderData();
  return (
    <>
      <Outlet />
      <h1>Admin panel</h1>
      <HamsterForm species={loaderData.species} />
      <SpeciesForm />
      <br />
      <Link to={"../"}>Home</Link>
    </>
  );
}
