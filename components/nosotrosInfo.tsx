"use client"

import { Image } from "@heroui/react"

export function NosotrosInfo() {
    return (
        <section className="animate-fade-in grid gap-8">
            <section className="flex flex-col-reverse md:flex-row items-center justify-around gap-4">
                <Image src={"https://random-image-pepebigotes.vercel.app/api/random-image"} alt="Sobre nosotros" className="xl:rounded-lg h-30 aspect-square rounded-full md:h-full xl:aspect-video w-auto transition-height ease-in-out" />
                <p className="xl:text-balance xl:text-center transition-all duration-250 ease-in-out max-w-[70ch] xl:max-w-[55ch] text-xl text-slate-700 dark:text-slate-300">
                    El 24 de julio de 1983, nace los Niños Cantores del Táchira, agrupación que por cuatro décadas ha significado cuna de valores culturales para un sinfín de generaciones de cantores en la región.
                    <br /><br />
                    Cuenta con más de 900 egresados de sus filas, 9 producciones musicales, dos presentaciones en el Festival Mundial de Coros Infantiles “Worldsong” en Estados Unidos, Premio a Mejor Coro Infantil en Competencia Coral otorgado por el Festival Internacional “Gustavo Gómez Ardila” y el título de “Embajadores del Buen Canto Coral” otorgado por concurso de oposición en la Federación Internacional para la Música Coral en Lituania.
                </p>
            </section>

            <section className="grid place-items-center">
                <p className="text-center max-w-[90ch] transition-all duration-250 ease-in-out text-xl text-slate-700 dark:text-slate-300">
                    En 1978, el Maestro merideño Rubén Rivas, de sólida formación musical, visita el Táchira, y se enamora de su gentilicio, sembrando raíces como director del coro de la Universidad del Táchira y la coral del estado; trayendo con él a su esposa e hijos, quienes protagonizarían por cuatro décadas parte importante del movimiento musical regional.
                    <br /><br />
                    Para la década de los 80's, el Estado Táchira contaba con agrupaciones orquestales, bandísticas y procesos de formación musical; pero hasta 1983, solo se establecían con formalidad y regularidad agrupaciones vocales mixtas, orfeones y coros institucionales. El Lcdo. Jesús María Sánchez, director de cultura del Estado Táchira para la fecha, músico de academia y coralista de trayectoria, encomienda al profesor Rubén Rivas la creación de la primera agrupación coral infantil en los Andes, por motivo de la celebración próxima del natalicio del libertador, Simón Bolívar. El maestro Rivas, en atención a sus múltiples ocupaciones, recomienda a su esposa para titánica labor, así es como la maestra Alix Teresa Durán de Rivas, asume como primera directora de los Niños Cantores del Táchira.
                    <br /><br />
                    El concepto “Niños Cantores” proviene de la tradición histórica europea, aproximadamente desde el Siglo XVI, cuando las voces infantiles hacen parte de la escena tradicional de Austria con los actuales Niños Cantores de Viena, donde se produce una escuela tradicional para la formación de cantores, con un sello sonoro estético y artístico acorde a sus edades, posibilidades vocales, repertorio de alta dificultad con mayor atención a la música académica, sacra y nacionalista.
                    <br /><br />

                    Esta visión, perfeccionada con el paso del tiempo, fue multiplicándose como modelo de desarrollo para las agrupaciones vocales infantiles en el mundo occidental contemporáneo, desde la propuesta pedagógica en la sala de ensayo, hasta la razón y puesta en escena en conciertos, recitales y participaciones en grandes obras sinfónico corales.
                </p>
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center justify-around gap-4">
                <p className="xl:text-balance xl:text-center transition-all duration-250 ease-in-out max-w-[70ch] xl:max-w-[55ch] text-xl text-slate-700 dark:text-slate-300">
                    Bajo esta perspectiva, los Niños Cantores del Táchira han desarrollado sus elementos de acción; técnica vocal muy cuidada donde los sonidos redondos y velados se transforman en la base del trabajo sonoro; sin vibrato y alejado de poseer voces estridentes, cuidado y uso controlado del aparato vocal.
                    <br /><br />
                    Intenciones fraseológicas marcadas según el compositor y la obra, atención a la intención interpretativa de carácter estilístico de manera consciente para asegurar la versatilidad de la agrupación, rescate y difusión de música nacional y regional; exploración en audioperceptiva y dominio de formas musicales corales definen la tesonera labor de todos sus integrantes por más de cuatro décadas, convirtiéndose en una de las principales agrupaciones infantiles del país.
                </p>
                <Image src={"https://random-image-pepebigotes.vercel.app/api/random-image"} alt="Sobre nosotros" className="xl:rounded-lg h-30 aspect-square rounded-full md:h-full xl:aspect-video w-auto transition-height ease-in-out" />
            </section>
        </section>
    )
}