import { Post } from "@/types/post";

export const PostServerComponent = async () => {

    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await request.json();

    return(
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    )
}