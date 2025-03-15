import { Titulo } from "@/components/ui/Titulo";
import { NosotrosInfo } from "@/components/nosotrosInfo";

export default function Nosotros() {
  return (
    <article className="container mx-auto">
      <Titulo>Sobre nosotros</Titulo>

      <NosotrosInfo />
    </article>
  );
}