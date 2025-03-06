'use client'
import clsx from "clsx";
import ImageComponent from "@/components/ImageComponent";
import { useRef, useEffect } from "react";

export default function Home(){
 // Referencias a los elementos
  const item1left = useRef<HTMLDivElement>(null);
  const item1right = useRef<HTMLDivElement>(null);

  // Aplica las animaciones al cargar la página
  useEffect(() => {
    if (item1left.current) {
      item1left.current.classList.add('animate-slideInFromLeft');
    }
    if (item1right.current) {
      item1right.current.classList.add('animate-slideInFromRight');
    }
  }, []);
//arreglar el crecimiento inesperado de la pantalla
  return(
    <section className=' flex bg-gradient-to-tr from-slate-950 to-customDarkBlue'>
      <div ref={item1left} className='absolute z-10 flex pt-10 px-6'>
        <h1 className={clsx("text-center text-6xl text-customBorder", "justify-start items-center pl-12 font-serif")}>Niños Cantores <br/> del Táchira</h1>
    </div>
      <div ref={item1right} className='relative z-0 flex justify-end w-full pt-10 pr-6 pb-10'>
        <ImageComponent
          src="/coro_principal.jpg" // Ajusta la ruta de la imagen
          alt="Descripción de la imagen"
          width={900}
          height={700}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}