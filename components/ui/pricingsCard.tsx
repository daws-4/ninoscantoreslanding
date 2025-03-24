"use client"

import { ApoyoPrice, Currency } from "@/types";
import { Card, CardBody, CardHeader, Alert, Chip, CardFooter, Button } from "@heroui/react";
import { CheckIcon, HeartFilledIcon } from "@/components/icons";
import Link from "next/link";
import { clsx } from "clsx";

export function PrincingCard({ prices }: { prices: ApoyoPrice }) {
    if (!prices) return (
        <article>
            <h1 className="text-5xl">No hay precios por el momento 💀</h1>
        </article>
    )

    const { id, label, descripcion, beneficios, currency, precios, tipo } = prices;
    const colab = Boolean(id === "colaborador")
    const benef = Boolean(id === "benefactor")
    // console.log({ id })

    return (
        <Card className={
            clsx(
                benef && "border-purple-800", colab && "border-stone-900 dark:border-slate-200", (!colab && !benef) && "border-transparent"
            ) + " border-2 max-w-[520px]"
        }>
            <CardHeader>
                <div className="grid place-items-center w-full">
                    <h1 className="text-3xl">
                        {label}
                    </h1>
                </div>
            </CardHeader>
            <CardBody className="grid place-items-center gap-3">
                <Price prices={precios} currency={currency} tipos={tipo} />
                {/* <h2>{label}</h2> */}

                <section className="grid place-content-center gap-3 h-full">
                    <h4 className="text-xl text-center text-balance text-slate-800 dark:text-slate-300">
                        {descripcion}
                    </h4>
                    <h3 className="text-2xl text-center uppercase">Beneficios</h3>
                    <div className="grid place-content-center gap-3 w-full">
                        {
                            beneficios.flatMap((beneficio: string, index: number) => {
                                return (
                                    <Alert
                                        icon={<CheckIcon />}
                                        suppressHydrationWarning
                                        color="secondary"
                                        key={index}
                                    >{beneficio}</Alert>
                                )
                            })
                        }
                    </div>
                </section>
            </CardBody>
            <CardFooter>
                <Button
                    as={Link}
                    href={/* Aquí va el link al Patreon de los niños cantores */ "https://www.patreon.com/es-419"}
                    target="_blank"
                    rel="noopener norreferer nofollow"
                    variant={id === "padrino" ? "light" : "ghost"}
                    color={id === "benefactor" ? "secondary" : "default"}
                    className="w-full"
                    startContent={<HeartFilledIcon />}
                >
                    Donar
                </Button>
            </CardFooter>
        </Card>
    );
}

function Price({ prices, currency, tipos }: { prices: number[], currency: Currency, tipos: string[] }) {
    const hasManyPrices = Boolean(prices.length >= 2);
    const hasManyTypes = Boolean(tipos.length >= 2);

    // Si solo tiene un precio y un tipo
    if (!hasManyPrices && !hasManyTypes) {
        return (
            <section className="grid place-items-center gap-3">
                <h1 className="text-7xl text-purple-500">
                    {prices.at(0)}
                    <span className="ml-2 text-lg align-super text-black dark:text-white">
                        ${currency}
                    </span>
                </h1>
                <div className="flex gap-3">
                    <Chip color="secondary">{tipos.at(0)}</Chip>
                </div>
            </section>
        )
    } else if (!hasManyPrices && hasManyTypes) { // Si solo tiene un precio y muchos tipos
        return (
            <section className="grid place-items-center gap-3">
                <h1 className="text-7xl text-purple-500">
                    {prices.at(0)}
                    <span className="ml-2 text-lg align-super text-black dark:text-white">
                        ${currency}
                    </span>
                </h1>
                <div className="flex gap-3">
                    {
                        tipos.map((tipo: string, index: number) => {
                            return (
                                <Chip color="secondary" key={index}>{tipo}</Chip>
                            )
                        })
                    }
                </div>
            </section>
        )
    } else if (hasManyPrices && !hasManyTypes) { // Si tiene muchos precios y un solo tipo
        return (
            <section className="grid place-items-center gap-3">
                <div className="grid place-items-center gap-2">
                    {prices.flatMap((price: number, index: number) => (
                        <h1 key={index} className="text-7xl text-purple-500">
                            {price}
                            <span className="ml-2 text-lg align-super text-black dark:text-white">
                                ${currency} / {tipos.at(0)}
                            </span>
                        </h1>
                    ))}
                </div>
                <div className="flex gap-3">
                    <Chip color="secondary">{tipos.at(0)}</Chip>
                </div>
            </section>
        )
    } else { // Si tiene muchos precios y muchos tipos
        return (
            <section className="grid place-items-center gap-3">
                <div className="grid place-items-center gap-2">
                    {prices.flatMap((price: number, index: number) => (
                        <h1 key={index} className="text-7xl text-purple-500">
                            {price}
                            <span className="ml-2 text-lg align-super text-black dark:text-white">
                                ${currency} / {tipos.at(index)}
                            </span>
                        </h1>
                    ))}
                </div>
                <div className="flex gap-3">
                    {
                        tipos.map((tipo: string, index: number) => {
                            return (
                                <Chip color="secondary" key={index}>{tipo}</Chip>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}