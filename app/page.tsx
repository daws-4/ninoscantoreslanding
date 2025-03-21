'use client'
import clsx from "clsx";
import ImageComponent from "@/components/ImageComponent";
import { useRef, useEffect } from "react";

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
            entry.target.classList.remove('hide');
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
            entry.target.classList.remove('hide');
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
      <section className='relative flex bg-gradient-to-tr from-slate-950 to-customDarkBlue h-screen overflow-hidden py-8'>
        <div ref={item1left} className='absolute z-10  pt-10 px-6 flex hide'>
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
        <div ref={item1right} className='relative z-0  justify-end w-full pt-10 pr-6 pb-10 flex hide '>
          <ImageComponent
            src="/coro_principal.jpg" // Ajusta la ruta de la imagen
            alt="Descripción de la imagen"
            width={730}
            height={700}
            className="rounded-lg shadow-lg fixed hidden lg:block  pb-4"
          />
          <ImageComponent
            src="/coro_principal.jpg" // Ajusta la ruta de la imagen
            alt="Descripción de la imagen"
            width={400}
            height={700}
            className="rounded-lg shadow-lg fixed block lg:hidden pb-4"
          />
        </div>
      </section>

      <section className='flex flex-col sm:flex-row bg-customCream dark:bg-gradient-to-tl dark:from-blue-950 dark:to-blue-900 w-full py-10'>
        
          <ImageComponent
          className=" ml-6 rounded-lg shadow-lg fixed block"
          src='/imagenes/Imagen1.jpg'
          alt='imagen1'
          height={200}
          width={400} />

      </section>

      <section>
        <div className='flex justify-center items-center'>
          <h2 className={clsx("text-center text-4xl text-customBorder", "justify-start items-center pl-12 font-serif")}>NUESTROS PATROCINANTES</h2>
        </div>
        <div className='flex justify-center items-center'>


          {/* mapear la db */}

        </div>
      </section>
    </>
  )
}