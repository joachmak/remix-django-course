import {LoaderFunction, useLoaderData} from "remix";
import invariant from "tiny-invariant";
import {getSpeciesById, Species} from "~/modules/species";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.id, "Expected an id parameter.")
    return await getSpeciesById(params.id);
};

export default function SpeciesById() {
    const species: Species = useLoaderData();
    console.log(species);
    return (
        <div>
            <h1>{species.name}</h1>
            <p><i>{species.latin_name}</i></p>
            <p>
                <b>Description:</b> {species.description}
            </p>
            <p>Typical weight: {species.typical_weight}g</p>
        </div>
    )
}