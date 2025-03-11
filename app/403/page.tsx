"use client"

export default function Error() {

    return (
        <article className='grid place-items-center h-[75vh] px-8'>
            <div className="flex flex-col items-center py-4 px-6 rounded-lg justify-center transition-background ease-in-out bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-6xl font-bold mb-4">403</h1>
                <h2 className="text-3xl font-semibold mb-2">Acceso Prohibido</h2>
                <p className="text-lg mb-8 text-center max-w-[65ch]">
                    Lo sentimos, pero no tienes permiso para acceder al material de los estudiantes sin autorización previa del profesor. Si crees que esto es un error, por favor contacta a tu profesor. Puedes volver a la página principal.
                </p>
            </div>
        </article>
    );
}