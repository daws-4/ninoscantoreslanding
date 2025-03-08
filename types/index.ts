import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Aliado {
  name: string;
  descripcion: string;
  img?: string;
  link?: string;
}