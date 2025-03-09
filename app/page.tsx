'use client'
import clsx from "clsx";
import ImageComponent from "@/components/ImageComponent";
import { useRef, useEffect } from "react";
import { Image } from "@heroui/react";

export default function Home() {
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

  return (
    <>
      <section className=' flex bg-gradient-to-tr from-slate-950 to-customDarkBlue '>
        <div ref={item1left} className='absolute z-10 flex pt-10 px-6'>
          <ImageComponent
            src="/ninoscantores_logo.png"
            alt="Descripción de la imagen"
            width={150}
            height={150}
            className="rounded-lg shadow-lg fixed" />
          <div className='flex justify-center items-center'>
            <h1 className={clsx("text-center text-6xl text-customBorder", "justify-start items-center pl-12 font-serif")}>Niños Cantores <br /> del Táchira</h1>
          </div>
        </div>
        <div ref={item1right} className='relative z-0 flex justify-end w-full pt-10 pr-6 pb-10'>
          <ImageComponent
            src="/coro_principal.jpg" // Ajusta la ruta de la imagen
            alt="Descripción de la imagen"
            width={900}
            height={700}
            className="rounded-lg shadow-lg fixed hidden lg:block"
          />
          <ImageComponent
            src="/coro_principal.jpg" // Ajusta la ruta de la imagen
            alt="Descripción de la imagen"
            width={400}
            height={700}
            className="rounded-lg shadow-lg fixed block lg:hidden"
          />
        </div>
      </section>
      <section>
        <div className='flex justify-center items-center'>
          <h2 className={clsx("text-center text-4xl text-customBorder", "justify-start items-center pl-12 font-serif")}>Historia</h2>
        </div>
        <div className='flex justify-center items-center'>
          <p className={clsx("text-center text-2xl text-customBorder", "justify-start items-center pl-12 font-serif")}> </p>
        </div>
      </section>
    </>
  )
}