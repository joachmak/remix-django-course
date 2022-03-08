import { Button, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";

export default function SpeciesForm() {
  const form = useForm({
    initialValues: {
      name: "",
      latin_name: "",
      description: "",
      typical_weight: 0,
    },

    validationRules: {
      name: (value) => value.trim().length >= 3 && value.trim().length <= 50,
      latin_name: (value) =>
        value.trim().length >= 3 && value.trim().length <= 50,
      description: (value) =>
        value.trim().length >= 3 && value.trim().length <= 300,
      typical_weight: (value) => value > 0 && value <= 350,
    },
    errorMessages: {
      name: "Name must include at least 3 characters and not be longer than 50 characters",
      latin_name:
        "Latin name must include at least 3 characters and not be longer than 50 characters",
      description:
        "Description must be longer than 10 characters and not be longer than 300 characters",
      typical_weight: "Typical weight must be higher than 0 and lower than 350",
    },
  });
  return (
    <>
      <h2>Add species</h2>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          form.reset;
        })}
      >
        <TextInput
          required
          label="Name"
          placeholder="Bolle bollesen"
          onBlur={() => form.validateField("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          required
          label="Latin name"
          placeholder="Bolle"
          onBlur={() => form.validateField("latin_name")}
          {...form.getInputProps("latin_name")}
        />
        <Textarea
          placeholder="Description of the specie"
          label="Description"
          required
          onBlur={() => form.validateField("description")}
          {...form.getInputProps("description")}
        />
        <NumberInput
          defaultValue={18}
          placeholder="123"
          label="Typical weight"
          required
          hideControls
          onBlur={() => form.validateField("typical_weight")}
          {...form.getInputProps("typical_weight")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
