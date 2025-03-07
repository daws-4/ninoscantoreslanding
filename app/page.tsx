'use client'
import clsx from "clsx";
import ImageComponent from "@/components/ImageComponent";
import { useRef, useEffect } from "react";

export default function Home(){
 // Referencias a los elementos
  const item1left = useRef<HTMLDivElement>(null);
  const item1right = useRef<HTMLDivElement>(null);

  // Aplica las animaciones al cargar la página
  //izquierda
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInFromLeft');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (item1left.current) observer.observe(item1left.current);

    return () => {
      if (item1left.current) observer.unobserve(item1left.current);
    };
  }, []);
  //derecha
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInFromRight');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (item1right.current) observer.observe(item1right.current);

    return () => {
      if (item1right.current) observer.unobserve(item1right.current);
    };
  }, []);

//arreglar el crecimiento inesperado de la pantalla
  return(
    <section className=' flex bg-gradient-to-tr from-slate-950 to-customDarkBlue'>
      <div ref={item1left} className='absolute z-10 flex pt-10 px-6'>
        <h1 className={clsx("text-center text-6xl text-customBorder", "justify-start items-center pl-12 font-serif")}>Niños Cantores <br/> del Táchira</h1>
    </div>
      <div ref={item1right} className=' z-0 flex justify-end w-full pt-10 pr-6 pb-10'>
        <ImageComponent
          src="/coro_principal.jpg" // Ajusta la ruta de la imagen
          alt="Descripción de la imagen"
          width={900}
          height={700}
          className="rounded-lg shadow-lg fixed"
        />
      </div>
    </section>
  )
}