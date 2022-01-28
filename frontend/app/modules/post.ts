import invariant from "tiny-invariant";

export type Post = {
    slug: string;
    title: string;
};

const posts: Post[] = [
    {
        slug: "my-first-post",
        title: "My First Post"
    },
    {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You"
    }
];

export function getPosts() {
    return posts;
}

export async function getPost(slug: string) {
    const posts_arr = posts.filter(post => post.slug === slug)
    invariant(posts_arr[0], "Couldn't find post with specified slug.")
    return posts_arr[0]
}