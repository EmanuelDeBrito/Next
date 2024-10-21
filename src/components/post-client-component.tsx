"use client"

import { Post } from "@/types/post";
import { useState } from "react";

export const PostClientComponent = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const handleTakePosts = async () => {
        setLoading(true);
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await request.json();
        setLoading(false);
        setPosts(posts);
    }   

    return(
        <div>
            <button onClick={handleTakePosts} className="my-3 py-2 px-3 text-white bg-black rounded-md">Carregar Requisições</button>

            {loading && <p>Carregando...</p>}

            {posts.length > 0 &&            
                <ul>
                    {posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            }
        </div>
    )
}