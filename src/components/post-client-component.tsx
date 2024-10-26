"use client"

import { getPosts } from "@/actions/get-posts";
import { Post } from "@/types/post";
import { useState } from "react";

export const PostClientComponent = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const handleTakePosts = async () => {
        setLoading(true);
        const data = await getPosts();
        setLoading(false);
        setPosts(data);
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