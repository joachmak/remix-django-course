import { Species } from "~/modules/species";

interface HamsterFormProps {
  species: Species[];
}

export default function HamsterForm(props: HamsterFormProps) {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitting hamster data");
    return false;
  };

  return (
    <>
      <h2>Add hamsters</h2>
      <form action="" id="hamsterForm">
        {/*
                 Usually, we would use Remix's Form component, but it currently doesn't support encryption type
                 multipart/form-data which we need for sending images to the backend.
                 https://remix.run/docs/en/v1.1.3/api/remix#form-enctype
                 */}
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea id="description" name="description" />
        <br />

        <label htmlFor="dateOfBirth">Date of birth:</label>
        <br />
        <input type="date" id="dateOfBirth" name="dateOfBirth" />
        <br />

        <label htmlFor="img">Picture:</label>
        <br />
        <input type="file" id="img" name="img" accept="image/*" />
        <br />

        <label htmlFor="species">Species:</label>
        <br />
        <select id="species" name="species">
          <option value="">Unspecified</option>
          {props.species &&
            props.species.map((species) => (
              <option key={species.id} value={species.id}>
                {species.name}
              </option>
            ))}
        </select>
        <br />
        <br />
        <button onClick={(e) => onSubmit(e)}>Submit</button>
      </form>
    </>
  );
}
