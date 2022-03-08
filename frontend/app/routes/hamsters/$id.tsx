import { Button, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import CustomContainer from "~/components/CustomContainer";
import HeaderText from "~/components/HeaderText";
import { getHamster, Hamster } from "~/modules/hamster";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected an id parameter.");
  return await getHamster(params.id);
};

function WeightGraph() {
  return <>{/* TODO: Add weight graph */}</>;
}

export default function HamsterWithId() {
  const hamster: Hamster = useLoaderData();
  return (
    <CustomContainer>
      <Group position="apart">
        <div></div>
        <Link to={"/hamsters"}>
          <Button color="red" variant="outline">
            x
          </Button>
        </Link>
      </Group>
      <Group style={{ marginTop: 10 }} position="apart">
        <Card shadow="sm" padding="lg">
          <Card.Section>
            <Image
              src={hamster.image}
              height={150}
              alt={"Bilde av " + hamster.name}
            />
          </Card.Section>
          <HeaderText>{hamster.name}</HeaderText>
          <Text size="sm" style={{ lineHeight: 1.5 }}>
            {hamster.description}
          </Text>
        </Card>
      </Group>
    </CustomContainer>
  );
}
