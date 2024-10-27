import { Post } from "@/types/post";

export const GET = async (request: Request) => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await req.json();

    return Response.json({ posts: posts })
}