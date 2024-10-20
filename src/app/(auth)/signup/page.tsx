import { redirect } from "next/navigation";

const Page = () => {
    redirect('/');

    return(
        <div>
            Página de SIGNUP
        </div>
    )
}

export default Page;