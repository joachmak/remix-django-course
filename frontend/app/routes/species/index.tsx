import {getSpecies, Species} from "~/modules/species";
import {useLoaderData} from "remix";
import {Link} from "@remix-run/react";

export async function loader() {
    console.log("LOADING");
    return await getSpecies();
}

export default function Species() {
    let species_list: Species[] = useLoaderData();
    return (
        <>
            <h1>Species</h1>
            <ul>
                {
                    species_list.map(species =>
                        <li><Link to={"/species/" + species.id}>{species.name}</Link></li>)
                }
            </ul>
            <Link to={"/"}>Home</Link>
        </>
    )
}