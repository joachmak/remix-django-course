import { Link, useLoaderData } from "remix";
import {getPosts, Post} from "~/modules/post";


export const loader = () => {
    return getPosts();
}

export default function Posts() {
    const posts: Post[] = useLoaderData();
    return (
        <>
            <h1>Posts</h1>
            <ul>
                {
                    posts.map(post => (
                            <li key={post.slug}>
                                <Link to={post.slug}>{post.title}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}