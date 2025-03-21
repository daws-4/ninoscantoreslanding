"use client"

import { apoyoPrice } from "@/config/apoyo"
import { ApoyoPrice } from "@/types"
import { Image } from "@heroui/react"
import { PrincingCard } from "../ui/pricingsCard"

export function DonacionesInfo() {
    return (
        <article className="container mx-auto animate-fade-in">
            <section className="grid place-items-center gap-4 mb-4">
                <Image src="/donaciones/apoyanos1.webp" alt="Estamos tan pobres que no nos alcanzó para la imagen :(" className="w-48 h-auto aspect-square lg:aspect-video rounded-full lg:rounded-lg lg:w-full transition-width ease-in-out object-cover lg:object-fill" />

                <p className="text-center max-w-[90ch] transition-all duration-250 ease-in-out text-xl text-slate-700 dark:text-slate-300">
                    Con incansable perseverancia hemos seguido inculcando valores y trabajo en equipo y con gran pasión impulsamos la excelencia artística. Todo esto ha sido posible gracias a un liderazgo definido y al trabajo voluntario de varias generaciones de cantores, docentes y amantes del canto coral; así como también al generoso apoyo filantrópico y comprometido de muchos amigos.
                    <br /><br />
                    Queremos pedirte que seas nuestro compañero y te sumes activamente para seguir escribiendo nuestra historia. Ayúdanos a difundir esta campaña para que otros conozcan nuestra institución y sean nuestros Padrinos o Benefactores.
                </p>

                <Image src="/donaciones/apoyanos2.webp" alt="Estamos tan pobres que no nos alcanzó para la imagen :(" className="w-48 h-auto aspect-square lg:aspect-video rounded-full lg:rounded-lg lg:w-full transition-width ease-in-out object-cover lg:object-fill" />

            </section>
            <h3 className="text-customGold3 my-3 text-2xl dark:text-customGold1">Te ofrecemos los siguientes planes de apoyo</h3>
            <section className="grid justify-center-center lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    apoyoPrice.map((price: ApoyoPrice) => {
                        return (
                            <PrincingCard key={price.id} prices={price} />
                        )
                    })
                }
            </section>
        </article>
    )
}