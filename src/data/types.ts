type Product = {
  name: string;
  description: string;
  image: string;
  imageScale?: {
    normal: number;
    hover: number;
  };
};

type Uniqueness = {
  image: string;
  description: string;
};
