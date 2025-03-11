import { Titulo } from "@/components/ui/Titulo";
import { aliados } from "@/config/aliados";
import { Aliado } from "@/types";

export default async function MaterialAccesed({ params }: { params: Promise<{ aliado: string }> }) {
    
    const { aliado } = await params;
    const aliadoData = aliados.find((a) => a.id === aliado);
    const { name } = aliadoData as Aliado;

    return (
        <article>
            <Titulo>{name}</Titulo>
            <h2 className="text-4xl text-yellow-800">Material didáctico</h2>

            <section>
                <h3 className="text-2xl text-yellow-800">Material de apoyo</h3>
                <p>Descarga el material de apoyo para el uso de la plataforma.</p>
            </section>
        </article>
    )
}