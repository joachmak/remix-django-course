import { Button, Card, Group, Image, Table, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Form, LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import CustomContainer from "~/components/CustomContainer";
import HeaderText from "~/components/HeaderText";
import WeightRegistrationForm from "~/components/WeightRegistrationForm";
import { getHamster, Hamster } from "~/modules/hamster";
import {
  getWeightRecordsOfHamsterWithId,
  WeightRecord,
} from "~/modules/weightRecord";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected an id parameter.");
  const hamster = await getHamster(params.id);
  const weightRecords: WeightRecord[] = await getWeightRecordsOfHamsterWithId(
    parseInt(params.id)
  );
  return { hamster: hamster, weight_records: weightRecords };
};

function WeightRecordTable({
  weightRecords,
}: {
  weightRecords: WeightRecord[];
}) {
  if (weightRecords.length === 0) {
    return <Text size="sm">--Ingen vekt registrert--</Text>;
  }
  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Dato</th>
          <th>Vekt (g)</th>
          <th>BMI</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {weightRecords.map((record) => (
          <tr key={record.id}>
            <td>{record.date}</td>
            <td>{record.weight_in_grams}</td>
            <td>{record.hamster_bmi}</td>
            <td>
              <Form method="delete" action="/weight_records/delete">
                <input type="hidden" name="record_id" value={record.id} />
                <input type="hidden" name="hamster_id" value={record.hamster} />
                <Button type="submit" variant="subtle" color="red">
                  Slett
                </Button>
              </Form>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default function HamsterWithId() {
  const hamsterData = useLoaderData();
  console.log(hamsterData);
  const hamster: Hamster = hamsterData.hamster;
  const weightRecords: WeightRecord[] = hamsterData.weight_records;

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
      <Group grow spacing="sm">
        <div>
          <Image
            src={hamster.image}
            width={"100%"}
            alt={"Bilde av " + hamster.name}
          />
        </div>
        <div style={{}}>
          <HeaderText>{hamster.name}</HeaderText>
          <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 15 }}>
            {hamster.description}
          </Text>
          <HeaderText>Registrert vekt</HeaderText>
          <WeightRecordTable weightRecords={weightRecords} />
        </div>
      </Group>
      <WeightRegistrationForm hamsterId={hamster.id} />
    </CustomContainer>
  );
}
