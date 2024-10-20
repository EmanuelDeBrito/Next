import { Post } from "@/types/post";
import { Metadata } from "next";

type Props = {
    params: {
        postId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await request.json();

    return {
        title: post.title
    }
}

const Page = async ({ params }: Props) => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await request.json();

    return(
        <div className="mt-3 text-center">
            <p>ID: {post.id}</p>
            <h1 className="my-3 text-3xl font-bold uppercase">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export const generateStaticParams = async () => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts: Post[] = await request.json();

    return posts.map(post => (
        {
            postId: post.id.toString()
        }
    ))
}

export default Page;