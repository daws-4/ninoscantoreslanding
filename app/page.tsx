import clsx from "clsx";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function Home(){
  return(
    <section>
    <div className='flex'>
        <h1 className={clsx("text-center text-6xl text-customBorder", "justify-start items-center pl-12 font-serif", raleway.variable)}>Niños Cantores <br/> del Táchira 🎵</h1>
    </div>
    </section>
  )
}