import { Button, NumberInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";
import { Form } from "remix";

export default function WeightRegistrationForm({
  hamsterId,
}: {
  hamsterId: number;
}) {
  const form = useForm({
    initialValues: {
      date: new Date().toDateString(),
    },
  });
  return (
    <>
      <Form method="post" action="/weight_records/actions/create">
        <NumberInput
          defaultValue={100}
          max={500}
          min={0}
          placeholder="123"
          label="Vekt (g)"
          name="weight_in_grams"
          required
        />
        <DatePicker
          dropdownType="modal"
          placeholder="Velg veiedato"
          defaultValue={new Date()}
          label="Veiedato"
          name="date"
          maxDate={new Date()}
          required
        />
        <input type="hidden" name="hamster" value={hamsterId} />
        <Button style={{ marginTop: 15 }} type="submit">
          Registrer vekt
        </Button>
      </Form>
    </>
  );
}
