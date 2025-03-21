import { ApoyoPrice } from "@/types";

export const apoyoPrice: ApoyoPrice[] = [
    {
        id: "padrino",
        label: "Padrino",
        precios: [10, 50],
        currency: "USD",
        tipo: ["Mensual", "Semestral"],
        descripcion: "Apoya a un niño cantor en su formación. Puedes pagar 10 USD mensualmente o 50 USD semestralmente",
        beneficios: ["Mensión en nuestras redes sociales y programas de concierto", "Constante información de tu ahijado musical."]
    }, {
        id: "colaborador",
        label: "Colaborador",
        precios: [250],
        currency: "USD",
        tipo: ["Única anual"],
        descripcion: "Apoya a la institución con una donación, que será destinada para la realización de los eventos que tenemos programados para el 40 aniversario.",
        beneficios: ["Mensión en nuestras redes sociales, publicación de tú logo, firma o empresa en nuestra página web", "Dos entradas permanentes para compartir con nosotros estos momentos"]
    }, {
        id: "benefactor",
        label: "Benefactor",
        precios: [250],
        currency: "USD",
        tipo: ["Única anual"],
        descripcion: "Apoya a la instituciónn con una donación, que será destinada para la realización de los eventos que tenemos programados para el 40 aniversario. Con una donación mayor a 250 USD",
        beneficios: ["Mensión honorífica en nuestras redes sociales, publicación de tú logo, firma o empresa en nuestra página web", "Recibe dos entradas permanentes para compartir con nosotros estos momentos"]
    }
];