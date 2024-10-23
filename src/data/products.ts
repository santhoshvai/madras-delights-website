import ThattaiShoot from "../../public/thattai3_900x.png";
import MixtureShoot from "../../public/mixture3_900x.png";
import SmallRingsShoot from "../../public/smallrings3_540x.png";
import MiniThattaiShoot from "../../public/minithattai3_900x.png";
import KaraBoondhiShoot from "../../public/kara_boondhi3_900x.png";
import AndhraMurukkuShoot from "../../public/andhra_murukku_900x.png";
import TapiocaFingerChipsShoot from "../../public/tapioca_fingers_900x.png";
import KaraSevShoot from "../../public/karasev3_442x.png";
import SeepuSeedaiShoot from "../../public/SEEPUSEEDAI3_540x.png";
import BombayMixtureShoot from "../../public/BOMBAYMIX_0002.png";

import { Product } from "../data/types";

const Thattai: Product = {
  name: "Thattai",
  description:
    "A Tamil Nadu specialty, Thattai is a deep-fried savoury cracker made of urad dhal and mild seasoning. It is also called 'Nippattu' in Karnataka and Chekkalu in Andhra Pradesh, Thattai is popularly made around festivals and enjoyed as a snack across the country.",
  image: ThattaiShoot,
};

// const ThengaiPaalMurukku: Product = {
//   name: "Thengai Paal Murukku",
//   description:
//     "A very popular South Indian tea-time snack, Thengai Paal Murukku is a feel-good crispy savory made with rice and urad dhal",
//   image: "thengai_paal_murukku_900x.png",
// };

// const KaiMurukku: Product = {
//   name: "Kai Murukku",
//   description:
//     "Kai Murukku is a beloved traditional South Indian snack made from rice flour, butter, cumin and asafoetida. Crunchy and flavourful, it gets it's name from the fact that it is tactfully shaped by hand. Relished with tea or as a quick bite by itself, you'll love our Kai Murukku.",
//   image: "kaimuruku2_900x.png",
// };

const Mixture: Product = {
  name: "Mixture",
  description:
    "Mixture is a well known South Indian delicacy that is tasty, crunchy and lip-smacking delicious. As the name suggests its a mix of fried peanuts, chana dal, kara sev and kara boondhi flavoured with various spices.",
  image: MixtureShoot,
};

const SmallRings: Product = {
  name: "Small Rings",
  description:
    "Small ring murukku is popular among kids and is a definite must have staple if you have kids in the house. Made with rice flour and spiced to perfection with added crispiness to treat your tastebuds.",
  image: SmallRingsShoot,
};

const MiniThattai: Product = {
  name: "Mini Thattai",
  description:
    "A Tamil Nadu specialty, Thatai is a savory cracker made of urad dhal and mild seasoning. Our Mini Thatai is perfectly bite-sized and sure to bring back fond memories with its authentic flavor.",
  image: MiniThattaiShoot,
};

const KaraBoondhi: Product = {
  name: "Kara Boondhi",
  description:
    "Kara Boondhi is a light and melt-in-the-mouth after-one-bite delight popular in South India. Graciously sprinkled with nuts and curry leaves, the Kara Boondhi is a spicy surprise for your tastebuds.",
  image: KaraBoondhiShoot,
};

const AndhraMurukku: Product = {
  name: "Andhra Murukku",
  description:
    "Traditionally made with rice flour, gram flour, and spices, the Andhra Murukku is a crunchy delight that can be enjoyed at any hour of the day.",
  image: AndhraMurukkuShoot,
};

const TapiocaFingerChips: Product = {
  name: "Tapioca Finger chips",
  description:
    "Tapioca Finger chips are thin, stick-like, crunchy, and spicy goodness made from tapioca. Taking a bite of it can make your taste buds dance for more. It makes a perfect tea-time snack and a go-to savoury to accompany your meals.",
  image: TapiocaFingerChipsShoot,
  imageScale: { normal: 1.2, hover: 2 },
};

const KaraSev: Product = {
  name: "Kara Sev",
  description:
    "Kara sev is a popular festive snack in South India. It has primarily made with besan and rice flour and flavoured with jeera and black pepper. The texture is thick but melts in your mouth like butter and is a definite crowd pleaser.",
  image: KaraSevShoot,
};

const SeepuSeedai: Product = {
  name: "Seepu Seedai",
  description:
    "Seepu Seedai is a crunchy South Indian delicacy traditionally made with coconut milk, dal, and many lip-smacking flavors. This melt-in-the-mouth after-one-bite snack is a perfect evening savoury loved by kids and adults alike.",
  image: SeepuSeedaiShoot,
};

const BombayMixture: Product = {
  name: "Bombay mixture",
  description:
    "Bombay mixture is a light and crispy Indian snack. It is traditionally made with sev, chickpeas, dried peas, fried lentils, nuts, and various spices as suggested in its name.",
  image: BombayMixtureShoot,
};

const products: Product[] = [
  Thattai,
  // ThengaiPaalMurukku,
  // KaiMurukku,
  SeepuSeedai,
  Mixture,
  MiniThattai,
  AndhraMurukku,
  KaraBoondhi,
  KaraSev,
  SmallRings,
  TapiocaFingerChips,
  BombayMixture,
];

export default products;
