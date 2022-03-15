import { Button, NumberInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";
import { SetStateAction, useState } from "react";
import { Form } from "remix";

export default function WeightRegistrationForm({
  hamsterId,
}: {
  hamsterId: number;
}) {
  const form = useForm({
    initialValues: {
      weight_in_grams: 0,
      date: new Date().toDateString(),
    },
    validationRules: {
      weight_in_grams: (value) => value > 0 && value <= 500,
    },
    errorMessages: {
      weight_in_grams: "Vekten må være mellom 0 og 500g",
    },
  });
  return (
    <>
      <Form method="post" action="/weight_records/create">
        <NumberInput
          defaultValue={100}
          placeholder="123"
          label="Vekt (g)"
          name="weight_in_grams"
          required
          hideControls
          onBlur={() => form.validateField("weight_in_grams")}
          {...form.getInputProps("weight_in_grams")}
        />
        <DatePicker
          dropdownType="modal"
          placeholder="Velg veiedato"
          defaultValue={new Date()}
          label="Veiedato"
          name="date"
          required
        />
        <input type="hidden" name="hamster" value={hamsterId} />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
