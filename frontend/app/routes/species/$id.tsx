import { Button, Divider, Group, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { Form, LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import CustomContainer from "~/components/CustomContainer";
import HeaderText from "~/components/HeaderText";
import { getSpeciesById, Species } from "~/modules/species";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected an id parameter.");
  return await getSpeciesById(params.id);
};

export default function SpeciesById() {
  const species: Species = useLoaderData();
  const theme = useMantineTheme();
  return (
    <CustomContainer>
      <Group position="apart">
        <div>
          <HeaderText>{species.name}</HeaderText>
          <Text color={theme.colors.dark[1]}>
            Latin: <i>{species.latin_name}</i>
          </Text>
        </div>
        <Link to={"/species"}>
          <Button variant="outline" color={"red"}>
            x
          </Button>
        </Link>
      </Group>

      <Divider style={{ margin: "10px 0" }} variant="dashed" />
      <Text style={{ marginBottom: 10 }}>
        <b>Beskrivelse:</b> "<i>{species.description}</i>"
      </Text>
      <Text>Typisk vekt for denne arten: {species.typical_weight}g</Text>
      <Form method="delete" action="/species/actions/delete">
        <input type="hidden" name="id" value={species.id} />
        <Button
          style={{ marginTop: 15 }}
          type="submit"
          variant="filled"
          color="red"
        >
          Slett
        </Button>
      </Form>
    </CustomContainer>
  );
}
