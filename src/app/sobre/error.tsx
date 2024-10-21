"use client"

type Props = {
    error: Error & { disgest?: string },
    reset: () => void
}

const Error = ({ error, reset }: Props) => {

    const handleResetButton = () => reset();

    return(
        <div>
            <h2 className="mt-3 text-2xl">Aconteceu um erro inesperado</h2>
            <p className="mt-3 text-md text-red-600">Erro: {error.message}</p>
            <button onClick={handleResetButton} className="mt-3 py-2 px-3 bg-black text-white rounded-md">Recarregar</button>
        </div>
    )
}

export default Error;