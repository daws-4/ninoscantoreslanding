import { Titulo } from "@/components/ui/Titulo";
import { NosotrosInfo } from "@/components/ux/nosotrosInfo";

export default function Nosotros() {
  return (
    <article className="container mx-auto px-4 lg:px-0">
      <Titulo>Sobre nosotros</Titulo>

      <NosotrosInfo />
    </article>
  );
}