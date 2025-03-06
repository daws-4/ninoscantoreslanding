import clsx from "clsx";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function Home(){
  return(
    <section className=' flex bg-gradient-to-tr from-slate-950 to-customDarkBlue'>
      <div className='flex pt-10 px-6'>
        <h1 className={clsx("text-center text-6xl text-customBorder", "justify-start items-center pl-12 font-serif")}>Niños Cantores <br/> del Táchira</h1>
    </div>
    <div>

    </div>
    </section>
  )
}