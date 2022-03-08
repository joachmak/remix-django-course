import {
  Button,
  Card,
  Image,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link, useLoaderData } from "remix";
import HeaderText from "~/components/HeaderText";
import { getHamsters, Hamster } from "~/modules/hamster";

export const loader = async () => {
  return await getHamsters();
};

function HamsterCard({
  name,
  id,
  image,
  description,
}: {
  name: string;
  id: number;
  image: string;
  description: string;
}) {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Image src={image} height={160} alt={name} />
      </Card.Section>
      <HeaderText>{name}</HeaderText>
      <Text size="sm" style={{ color: theme.colors.dark[1], lineHeight: 1.5 }}>
        {description}
      </Text>

      <Link to={"/hamsters/" + id} style={{ width: "100%" }}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Se detaljert informasjon
        </Button>
      </Link>
    </Card>
  );
}

export default function Posts() {
  const hamsters: Hamster[] = useLoaderData();
  return (
    <>
      <SimpleGrid style={{ width: "100%" }} cols={3}>
        {hamsters.map((hamster) => (
          <HamsterCard
            key={hamster.id}
            name={hamster.name}
            id={hamster.id}
            image={hamster.image}
            description={hamster.description}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
