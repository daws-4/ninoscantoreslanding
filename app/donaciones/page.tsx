import { Titulo } from "@/components/ui/Titulo"
import { DonacionesInfo } from "@/components/ux/donacionesInfo"

export default function Donaciones(){
    return(
        <article className="container mx-auto px-4 lg:px-0">
            <Titulo>Donaciones</Titulo>

            <DonacionesInfo/>
        </article>  
    )
}