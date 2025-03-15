import { Titulo } from "@/components/ui/Titulo";
import { aliados } from "@/config/aliados";
import { MaterialCard } from "@/components/ui/materialCard";
import Link from "next/link";

export default function Material() {
    return (
        <article className="container mx-auto">
            <Titulo>Material</Titulo>
            <section className="grid place-items-center gap-4 animate-fade-in">

                <p className="text-xl max-w-[75ch] text-center">
                    En esta sección encontrarás material de apoyo para el uso de la plataforma. Todos los recursos musicales, didácticos y de apoyo práctico y teórico son propiedad de los aliados de la plataforma. Si deseas más información sobre los aliados, visita la sección de <Link href="/aliados">Aliados</Link>. Espero sean de mucho provecho para todos los estudiantes y profesores. ¡Éxito!
                </p>

                <MaterialCard aliados={aliados} />
            </section>
        </article>
    )
}