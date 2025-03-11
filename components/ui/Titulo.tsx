export const Titulo = ({ children }: { children: string[] | string }) => {
    return <h1 className="text-3xl md:text-7xl text-center font-light uppercase dark:text-customGold1 text-yellow-700 my-10">{children}</h1>
}