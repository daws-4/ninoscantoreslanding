import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Aliado {
  id: string;
  name: string;
  descripcion: string;
  img?: string;
  link?: string;
  material?: Material;
}

export interface Material {
  imgs?: {
    img: string;
    alt: string;
  }[];
  pdfs?: {
    pdf: string;
    title: string;
  }[];
  videos?: {
    video: string;
    title: string;
  }[];
  songs?: {
    song: string;
    title: string;
    artists?: string[];
  }[];
}

export interface Integrante{
  id: string;
  nombre: string;
  apellido: string;
  cargo: string;
  img?: string;
}