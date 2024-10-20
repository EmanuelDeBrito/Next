"use client"

import { useRouter } from "next/navigation"

export const Button = () => {
    const router = useRouter();

    const handleLoginButton = () => {
        router.push('/');
    }

    return(
        <button onClick={handleLoginButton} className="py-2 px-3 bg-black text-white rounded-md">Login</button>
    )
}