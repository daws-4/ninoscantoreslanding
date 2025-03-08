import { AliadosCard } from "@/components/aliadosCard"
import { aliados } from "@/config/aliados"
import { Aliado } from "@/types"

export default function Aliados(){
    return(
        <>
            <h1 className="text-3xl md:text-7xl text-center font-light uppercase dark:text-customGold1 text-yellow-700 my-10">
                Nuestros aliados
            </h1>
            <article className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5">
            {
                aliados.map((aliado: Aliado) => (
                    <AliadosCard key={aliado.name} aliado={aliado} />
                ))
            }
            </article>
        </>
    )
}