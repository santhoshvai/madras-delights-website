import GroundnutOilImg from "../../public/groundnut_oil.png";
import SupportWomanImg from "../../public/support_woman.png";
import TraditionalHandpoundedFlourImg from "../../public/traditional_handpounded_flour.png";
import NoPreservativesImg from "../../public/no_preservatives.png";
import { Uniqueness } from "./types";

const GroundnutOil: Uniqueness = {
  description: "One-time use fresh groundnut oil",
  image: GroundnutOilImg,
};

const SupportWoman: Uniqueness = {
  description: "Supporting 500+ women",
  image: SupportWomanImg,
};

const TraditionalHandpoundedFlour: Uniqueness = {
  description: "Made with traditionally hand pounded flour",
  image: TraditionalHandpoundedFlourImg,
};

const NoPreservatives: Uniqueness = {
  description:
    "No artificial preservatives, no artificial colors and no artificial flavours",
  image: NoPreservativesImg,
};

const uniqueness: Uniqueness[] = [
  GroundnutOil,
  NoPreservatives,
  SupportWoman,
  TraditionalHandpoundedFlour,
];

export default uniqueness;
