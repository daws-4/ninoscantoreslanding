"use client";

import {
    AccordionItem,
    Accordion,
    Alert,
    Button,
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
    InputOtp,
    useDisclosure,
    Form,
} from "@heroui/react";
import { useState } from "react";
import { ValidationErrors } from "@react-types/shared";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Verificacion } from "@/libs/auth";
import { ShieldSecurityIcon } from "@/components/icons";
import { Aliado } from "@/types";

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
    };

    return (
        <>
            <Alert
                color="danger"
                description="El material de este sitio está protegido con una contraseña para evitar el robo de propiedad intelectual"
                title="Nota importante"
            />

            <Accordion variant="splitted">
                {aliados.map((aliado) => (
                    <AccordionItem
                        key={aliado.id}
                        aria-label={aliado.name}
                        startContent={<ShieldSecurityIcon />}
                        title={aliado.name}
                    >
                        <div className="grid place-items-center gap-3">
                            <Image
                                alt="Aliado"
                                className="w-40 xl:w-96 h-auto aspect-square xl:aspect-video rounded-full xl:rounded-xl transition-width ease-in-out"
                                src={
                                    aliado.img
                                        ? `/aliados/${aliado.img}`
                                        : "https://random-image-pepebigotes.vercel.app/api/random-image"
                                }
                            />
                            <p className="text-balance text-center text-xl text-slate-600 dark:text-slate-400">
                                {aliado.descripcion}
                            </p>

                            <Button onPress={onOpen}>Acceder</Button>

                            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                <ModalContent>
                                    <Form
                                        action={`/material/${aliado.id}`}
                                        method="post"
                                        validationErrors={errors}
                                        onSubmit={handlePassword}
                                    >
                                        <ModalHeader>
                                            <h1 className="text-2xl font-semibold text-slate-700 dark:text-slate-100">
                                                Material de {aliado.name}
                                            </h1>
                                        </ModalHeader>
                                        <ModalBody>
                                            <h2>
                                                Para acceder al material didáctico de {aliado.name}{" "}
                                                digita la contraseña que te proporcionó tu profesor o
                                                tutor.
                                            </h2>
                                            <label
                                                className="text-slate-600 dark:text-slate-400"
                                                htmlFor="password"
                                            >
                                                Solo números
                                            </label>
                                            {/* <Input type="hidden" name="aliado" value={aliado.id} /> */}
                                            <InputOtp isRequired length={6} name="password" />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button isDisabled={verificando} onPress={onOpenChange}>
                                                Cancelar
                                            </Button>
                                            <Button
                                                color="primary"
                                                isLoading={verificando}
                                                type="submit"
                                            >
                                                {verificando ? "Verificando..." : "Acceder"}
                                            </Button>
                                        </ModalFooter>
                                    </Form>
                                </ModalContent>
                            </Modal>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
