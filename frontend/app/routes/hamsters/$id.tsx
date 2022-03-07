import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getHamster, Hamster } from "~/modules/hamster";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected an id parameter.");
  return await getHamster(params.id);
};

export default function HamsterWithId() {
  const hamster: Hamster = useLoaderData();
  return (
    <div>
      <h1>{hamster.name}</h1>
      <p>
        <i>{hamster.description}</i>
      </p>
      <p>
        <b>Species:</b> {hamster.species.name}
        {hamster.species.latin_name && <>/ {hamster.species.latin_name}</>}
      </p>
      <img src={hamster.image} width={250} />
    </div>
  );
}
