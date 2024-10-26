import { takeDataForm } from "@/actions/takeDataForm"

const Page = () => {
    return(
        <div className="max-w-lg w-full">
            <form className="flex flex-col gap-2" action={takeDataForm}>
                <input className="block p-1 text-black border border-black rounded-md" type="text" name="nome" placeholder="Digite seu nome" />
                <input className="block p-1 text-black border border-black rounded-md" type="number" name="idade" placeholder="Idade" />
                <button className="px-3 py-2 bg-black text-white rounded-md">Enviar</button>
            </form>
        </div>
    )
}

export default Page