import { PostServerComponent } from "@/components/post-server-component"

const Page = () => {
    return(
        <div>
            <h1 className="my-3 text-3xl">Todos os posts</h1>
            <PostServerComponent />
        </div>
    )
}

export default Page;