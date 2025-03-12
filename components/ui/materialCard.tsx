"use client"

import { Aliado } from "@/types";
import { AccordionItem, Accordion, Alert, Button, Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, InputOtp, useDisclosure, Form, Input } from "@heroui/react";
import { ShieldSecurityIcon } from "@/components/icons";
import { useState } from "react";
import { ValidationErrors } from "@react-types/shared";
import { Verificacion } from "@/libs/auth";
import { useRouter } from "next/navigation";

export function MaterialCard({ aliados }: { aliados: Aliado[] }): JSX.Element {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [verificando, setVerificando] = useState(false);
    const router = useRouter();

    const handlePassword = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setVerificando(true);

        const value = parseInt(e.currentTarget.password.value);
        const ruta = e.currentTarget.action;

        if (isNaN(value)) {
            setErrors({ password: "La contraseña debe ser un número" });
            setVerificando(false);
            return;
        }

        try {

            await Verificacion(value);
            router.push(ruta);

        } catch (e) {
            setErrors({ password: (e as Error).message });
        } finally {
            setVerificando(false);
        }

    }


    return (
        <>
            <Alert color="danger" title="Nota importante" description="El material de este sitio está protegido con una contraseña para evitar el robo de propiedad intelectual" />

            <Accordion variant="splitted">
                {
                    aliados.map((aliado) => (
                        <AccordionItem startContent={<ShieldSecurityIcon />} key={aliado.id} title={aliado.name} aria-label={aliado.name}>

                            <div className="grid place-items-center gap-3">

                                <img src={aliado.img ? `/aliados/${aliado.img}` : "https://random-image-pepebigotes.vercel.app/api/random-image"} alt="Aliado" className="w-40 xl:w-96 h-auto aspect-square xl:aspect-video rounded-full xl:rounded-xl transition-width ease-in-out" />
                                <p className="text-balance text-center text-xl text-slate-600 dark:text-slate-400">{aliado.descripcion}</p>

                                <Button onPress={onOpen}>
                                    Acceder
                                </Button>

                                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                    <ModalContent>
                                        <Form onSubmit={handlePassword} method="post" action={`/material/${aliado.id}`} validationErrors={errors}>
                                            <ModalHeader>
                                                <h1 className="text-2xl font-semibold text-slate-700 dark:text-slate-100">Material de {aliado.name}</h1>
                                            </ModalHeader>
                                            <ModalBody>
                                                <h2>
                                                    Para acceder al material didáctico de {aliado.name} digita la contraseña que te proporcionó tu profesor o tutor.
                                                </h2>
                                                <label htmlFor="password" className="text-slate-600 dark:text-slate-400">Solo números</label>
                                                {/* <Input type="hidden" name="aliado" value={aliado.id} /> */}
                                                <InputOtp name="password" isRequired length={6} />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button onPress={onOpenChange} disabled={verificando}>
                                                    Cancelar
                                                </Button>
                                                <Button type="submit" color="primary" disabled={verificando}>
                                                    {verificando ? "Verificando..." : "Acceder"}
                                                </Button>
                                            </ModalFooter>
                                        </Form>
                                    </ModalContent>
                                </Modal>

                            </div>

                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    )
}