import { Aliado } from "@/types";

export function AliadosCard({ aliado }: { aliado: Aliado }) {
    const { name, descripcion } = aliado;

    return(
        <section className="flex flex-col items-center justify-center p-4 bg-stone-200 dark:bg-stone-900 rounded-lg shadow-md dark:shadow-gray-900 transition-all duration-250 ease-in-out h-full gap-3">
            {/* <img src={img || "lol.png"} alt={name} className="w-32 h-32 rounded-full" /> */}
            <div className="w-[250px] transition-all duration-250 ease-in-out lg:w-full bg-blue-500 relative lg:aspect-video aspect-square rounded-lg " />
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-100">{name}</h2>
            <p className="text-balance text-center text-lg text-slate-600 dark:text-slate-400">{descripcion}</p>
        </section>
    )
}