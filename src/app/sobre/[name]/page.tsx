type Props = {
    params: {
        name: string
    }
}

const Page = ({ params }: Props) => {
    return(
        <div>
            <h1>Seu nome é: {params.name}</h1>
        </div>
    )
}

export default Page;