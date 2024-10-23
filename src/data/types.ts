import { StaticImageData } from "next/image";

export type Product = {
  name: string;
  description: string;
  image: StaticImageData;
  imageScale?: {
    normal: number;
    hover: number;
  };
};

export type Uniqueness = {
  image: StaticImageData;
  description: string;
};
