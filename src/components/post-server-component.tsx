import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/post";

export const PostServerComponent = async () => {

    const posts = await getPosts();

    return(
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    )
}