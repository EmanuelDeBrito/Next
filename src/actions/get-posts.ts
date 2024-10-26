"use server"

import { Post } from "@/types/post";

export const getPosts = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await request.json();

    return posts
}