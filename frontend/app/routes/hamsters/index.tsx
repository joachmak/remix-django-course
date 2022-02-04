import {Link, useLoaderData} from "remix";
import {getHamsters, Hamster} from "~/modules/hamster";


export const loader = async () => {
    return await getHamsters();
}

export default function Posts() {
    const hamsters: Hamster[] = useLoaderData();
    return (
        <>
            <h1>Hamsters</h1>
            <ul>
                {
                    hamsters.map(hamster => (
                            <li key={hamster.name}>
                                <Link to={hamster.id.toString()}>{hamster.name}</Link>
                            </li>
                        )
                    )
                }
            </ul>
            <Link to={"/"}>Home</Link>
        </>
    )
}