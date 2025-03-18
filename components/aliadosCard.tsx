"use client";

import { Aliado } from "@/types";
import { Card, CardHeader, CardBody, CardFooter, Button, Divider, Link } from "@heroui/react";

export function AliadosCard({ aliado }: { aliado: Aliado }): JSX.Element {
    const { name, descripcion, img, link } = aliado;

    return (
        <Card className="w-fit h-full mx-auto bg-slate-200 dark:bg-slate-800 shadow-md rounded-xl overflow-hidden">
            <CardHeader className="justify-center">
                <h2 className="text-3xl font-semibold text-slate-700 dark:text-slate-100">{name}</h2>
            </CardHeader>
            <Divider />
            <CardBody className="grid place-items-center gap-3">
                <img src={img ? `/aliados/${img}` : "https://random-image-pepebigotes.vercel.app/api/random-image"} alt="Aliado" className="w-40 xl:w-full h-auto aspect-square xl:aspect-video rounded-full xl:rounded-xl transition-width ease-in-out" />
                <p className="text-balance text-center text-xl text-slate-600 dark:text-slate-400">{descripcion}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                {
                    link !== "" ?
                    <Button showAnchorIcon as={Link} color="secondary" target="_blank" className="btn btn-primary" rel="noopener nofollow" href={link}>Visitar</Button>
                    :
                    <Button className="btn btn-primary" disabled>Ver más</Button>
                }
            </CardFooter>
        </Card>
    )
}