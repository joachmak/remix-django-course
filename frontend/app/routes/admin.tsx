import { Link, Outlet, useLoaderData } from "remix";
import HamsterForm from "~/components/HamsterForm";
import { getSpecies } from "~/modules/species";
import SpeciesForm from "~/components/SpeciesForm";
import { Grid } from "@mantine/core";

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
      <Grid justify="center" align="center">
        <Grid.Col>
          <HamsterForm species={loaderData.species} />
        </Grid.Col>
        <Grid.Col>
          <SpeciesForm />
        </Grid.Col>
      </Grid>
    </>
  );
}
