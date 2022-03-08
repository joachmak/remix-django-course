import {
  Button,
  Group,
  Select,
  Textarea,
  Text,
  TextInput,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/hooks";
import { Species } from "~/modules/species";

interface HamsterFormProps {
  species: Species[];
}

export default function HamsterForm(props: HamsterFormProps) {
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      date: undefined,
      file: File,
      species: "",
    },

    validationRules: {
      name: (value) => value.trim().length >= 3,
      description: (value) => value.trim().length >= 3,
      date: (value) => (value ? true : false),
      species: (value) => value.trim().length > 0,
    },
    errorMessages: {
      name: "Name must include at least 3 characters and not be longer than 50 characters",
      description:
        "Description must be longer than 10 characters and not be longer than 300 characters",
      date: "You must choose a date!",
      species: "You must select a specie",
    },
  });

  const mappedSpecies = props.species.map((specie) => ({
    value: specie.id.toString(),
    label: specie.name,
  }));

  return (
    <>
      <h2>Add hamsters</h2>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {/*
          Usually, we would use Remix's Form component, but it currently doesn't support encryption type
          multipart/form-data which we need for sending images to the backend.
          https://remix.run/docs/en/v1.1.3/api/remix#form-enctype
        */}
        <TextInput
          required
          label="Name"
          placeholder="Bolle bollesen"
          onBlur={() => form.validateField("name")}
          {...form.getInputProps("name")}
        />
        <Textarea
          placeholder="Description of your hamster"
          label="Description"
          required
          onBlur={() => form.validateField("description")}
          {...form.getInputProps("description")}
        />
        <Dropzone
          onDrop={(file) => (file[0])}
          onReject={(file) =>
            form.setFieldError("file", "Unsupported file format")
          }
          multiple={false}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          {(status) => (
            <Group
              position="center"
              spacing="xl"
              style={{ minHeight: 220, pointerEvents: "none" }}
            >
              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  Attach one hamster-image. IT should not exceed 5mb
                </Text>
              </div>
            </Group>
          )}
        </Dropzone>
        <Select
          required
          label="Select a species"
          data={mappedSpecies}
          {...form.getInputProps("species")}
          onBlur={() => form.validateField("description")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
