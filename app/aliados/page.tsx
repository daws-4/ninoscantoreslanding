import { AliadosCard } from "@/components/ux/aliadosCard"
import { aliados } from "@/config/aliados"
import { Aliado } from "@/types"
import { Titulo } from "@/components/ui/Titulo"

export default function Aliados(){
    return(
        <article className="container mx-auto px-4 lg:px-0">
            <Titulo>
                Nuestros aliados
            </Titulo>
            <article className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5">
            {
                aliados.map((aliado: Aliado) => (
                    <AliadosCard key={aliado.name} aliado={aliado} />
                ))
            }
            </article>
        </article>
    )
}