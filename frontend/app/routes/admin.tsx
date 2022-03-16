import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { getSpecies } from "~/modules/species";
import SpeciesForm from "~/components/forms/SpeciesForm";
import { Grid } from "@mantine/core";

export const loader: LoaderFunction = async ({ params }) => {
  if (params.error) {
    throw new Response(params.error);
  }
  let data = {
    species: {},
  };
  data.species = await getSpecies();
  return data;
};

export default function AdminPanel() {
  let loaderData = useLoaderData();
  return (
    <>
      <SpeciesForm />
    </>
  );
}
