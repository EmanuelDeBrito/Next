import { Post } from "@/types/post";

type Props = {
    params: {
        postId: string
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

export default Page;