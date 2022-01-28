import {LoaderFunction, useLoaderData} from "remix";
import { getPost } from "~/modules/post";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.slug, "Expected a slug parameter.")
    return getPost(params.slug);
};

export default function PostSlug() {
    const post = useLoaderData();
    return (
        <div>
            <h1>{post.title}</h1>
            <p><b>Slug:</b> {post.slug}</p>
        </div>
    );
}