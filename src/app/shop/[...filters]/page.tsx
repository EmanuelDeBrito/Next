type Props = {
    params: {
        filters: string[]
    }
}

const Page = ({ params }: Props) => {
    return(
        <div>
            Filtros passados: {params.filters.join(', ')}
        </div>
    )
}

export default Page;