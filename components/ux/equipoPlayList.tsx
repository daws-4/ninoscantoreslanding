"use client"

import { Equipo } from "@/config/equipo"
import { Integrante } from "@/types"
import { Card, CardBody, Image, Button, Slider, SliderValue } from "@heroui/react"
import { useEffect, useState } from "react"
import { HeartIcon, RepeatOneIcon, PreviousIcon, PauseCircleIcon, ShuffleIcon, NextIcon, PlayCircleIcon } from "@/components/icons"

export function EquipoPlayList() {

    return (
        <article>
            <h2 className="text-center text-3xl font-light uppercase dark:text-customGold1 text-yellow-700 mb-6"> Conoce al equipo </h2>
            <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 place-items-center">
                {
                    Equipo.map((integrante: Integrante) => {
                        const [liked, setLiked] = useState(false);
                        const [isPlaying, setIsPlaying] = useState(false);
                        const [ended, setEnded] = useState(false);
                        const [value, setValue] = useState<SliderValue>(0)

                        const duracion = (segundos: number) => {
                            const mins = Math.floor(segundos / 60)
                            const secs = segundos % 60
                            const songDuration = `${mins}:${(secs).toString().padStart(2, "0")}`
                            return songDuration
                        }

                        // Este trozo de código es para hacer que las duraciones de las canciones sean aleatorias
                        const maxValue = 240 // duración de la canción

                        // Handles para hacerlo interactivo
                        const playHandle = () => {
                            if (isNaN(Number(value))) return

                            setIsPlaying((prev_play) => !prev_play)

                            if (value as number >= maxValue) {
                                setEnded(true)
                                setIsPlaying(false)
                            }

                            setTimeout(() => {
                                setValue((prev_value) => prev_value as number + 1) 
                            }, 1000)

                            console.log({ value })
                        }

                        const likeHandle = () => { setLiked((prev_linked) => !prev_linked) }

                        return (
                            <Card
                                isBlurred
                                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                                shadow="sm"
                                key={integrante.id}
                            >
                                <CardBody>
                                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                        <div className="relative col-span-6 md:col-span-4">
                                            <Image
                                                alt="Album cover"
                                                className="object-cover"
                                                height={200}
                                                shadow="md"
                                                src={integrante.img || "https://heroui.com/images/album-cover.png"}
                                                width={200}
                                            />
                                        </div>

                                        <div className="flex flex-col col-span-6 md:col-span-8">
                                            <div className="flex justify-between items-start">
                                                <div className="flex flex-col gap-0">
                                                    <h3 className="text-xl font-semibold text-foreground/90 ">{`${integrante.apellido}, ${integrante.nombre}`}</h3>
                                                    <p className="text-small text-foreground/80">{integrante.cargo}</p>
                                                    <h1 className="text-large font-medium mt-2">
                                                        Miembro del equipo
                                                    </h1>
                                                </div>
                                                <Button
                                                    isIconOnly
                                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                                    radius="full"
                                                    variant="light"
                                                    onPress={likeHandle}
                                                >
                                                    <HeartIcon
                                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                                        fill={liked ? "#ff4060" : "none"}
                                                    />
                                                </Button>
                                            </div>

                                            <div className="flex flex-col mt-3 gap-1">
                                                <Slider
                                                    aria-label="Music progress"
                                                    classNames={{
                                                        track: "bg-default-500/30",
                                                        thumb: "bg-foreground",
                                                    }}
                                                    color="foreground"
                                                    maxValue={maxValue}
                                                    defaultValue={value}
                                                    value={value}
                                                    onChange={setValue}
                                                    size="sm"
                                                />
                                                <div className="flex justify-between">
                                                    <p className="text-small">{duracion(value as number)}</p>
                                                    <p className="text-small text-foreground/50">{duracion(maxValue)}</p>
                                                </div>
                                            </div>

                                            <div className="flex w-full items-center justify-center">
                                                <Button
                                                    isIconOnly
                                                    className="data-[hover]:bg-foreground/10"
                                                    radius="full"
                                                    variant="light"
                                                >
                                                    <RepeatOneIcon className="text-foreground/80" />
                                                </Button>
                                                <Button
                                                    isIconOnly
                                                    className="data-[hover]:bg-foreground/10"
                                                    radius="full"
                                                    variant="light"
                                                >
                                                    <PreviousIcon />
                                                </Button>
                                                <Button
                                                    isIconOnly
                                                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                                                    radius="full"
                                                    variant="light"
                                                    onPress={playHandle}
                                                >
                                                    {isPlaying ? <PlayCircleIcon size={54} /> : <PauseCircleIcon size={54} />}
                                                </Button>
                                                <Button
                                                    isIconOnly
                                                    className="data-[hover]:bg-foreground/10"
                                                    radius="full"
                                                    variant="light"
                                                >
                                                    <NextIcon />
                                                </Button>
                                                <Button
                                                    isIconOnly
                                                    className="data-[hover]:bg-foreground/10"
                                                    radius="full"
                                                    variant="light"
                                                >
                                                    <ShuffleIcon className="text-foreground/80" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </section>
        </article>
    )
}