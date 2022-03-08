import { getSpecies, Species } from "~/modules/species";
import { useLoaderData } from "remix";
import { Link } from "@remix-run/react";
import CustomContainer from "~/components/CustomContainer";
import HeaderText from "~/components/HeaderText";
import {
  Button,
  Card,
  Center,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";

export async function loader() {
  return await getSpecies();
}

function SpeciesInfoBox({ species }: { species: Species }) {
  const theme = useMantineTheme();
  const MAX_DESC_LENGTH = 100;
  const shortenedDescription =
    species.description.length > MAX_DESC_LENGTH
      ? species.description.substring(0, MAX_DESC_LENGTH) + "..."
      : species.description;
  return (
    <Card padding="lg">
      <Text weight={500}>
        {species.name} / {species.latin_name}
      </Text>
      <Text size="sm" style={{ color: theme.colors.dark[1], lineHeight: 1.5 }}>
        {shortenedDescription}
      </Text>
      <Link style={{ textDecoration: "none" }} to={"/species/" + species.id}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Les mer om denne arten
        </Button>
      </Link>
    </Card>
  );
}

export default function Species() {
  let species_list: Species[] = useLoaderData();
  return (
    <>
      <CustomContainer>
        <Center>
          <HeaderText>Oversikt over arter</HeaderText>
        </Center>
        <SimpleGrid cols={2}>
          {species_list.map((species: Species) => (
            <SpeciesInfoBox species={species} />
          ))}
        </SimpleGrid>
      </CustomContainer>
    </>
  );
}
