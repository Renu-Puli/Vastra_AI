import { CollectionPage } from "./CollectionPage";

import imgFrame239 from "figma:asset/4a169adeb8089fb4ceb1691abba749f508f56c96.png";
import imgFrame240 from "figma:asset/d193f97f02f53d90a2318a273cea242f5d73cd9b.png";
import imgFrame241 from "figma:asset/5713353aa89cf9eda996f5a9ed81cbce5be131be.png";
import imgFrame242 from "figma:asset/6401a7549b09a557060dc2897e042c9aa7ac26f6.png";
import imgFrame243 from "figma:asset/f798f9d2148922c2492e82ec6223b5d1eed0903e.png";
import imgFrame244 from "figma:asset/19897eed8668b9d1115f7a70b0da35239fc79c54.png";
import imgFrame245 from "figma:asset/17b8f24e74a8331cae82476a114fff40a33f856a.png";
import imgFrame246 from "figma:asset/fca213884629cbfa9c336bddfb874120bd7c9229.png";
import imgFrame247 from "figma:asset/73b4965f6de95d960740fdd145537cd4825c0087.png";
import imgFrame248 from "figma:asset/389b328a382300d3c6358d4de5ce46881d210923.png";
import imgFrame249 from "figma:asset/b7f8b81a8fc52e19a4f6f69ea155790877742305.png";
import imgFrame250 from "figma:asset/a2b42788605ff640fbd0a6e1539f61b319ae2936.png";

const ITEMS = [
  { id: 1, name: "Collection Eta", image: imgFrame239 },
  { id: 2, name: "Collection Theta", image: imgFrame240 },
  { id: 3, name: "Collection Iota", image: imgFrame241 },
  { id: 4, name: "Collection Iota", image: imgFrame241 },
  { id: 5, name: "Collection Kappa", image: imgFrame242 },
  { id: 6, name: "Collection Lambda", image: imgFrame243 },
  { id: 7, name: "Collection Mu", image: imgFrame244 },
  { id: 8, name: "Collection Mu", image: imgFrame244 },
  { id: 9, name: "Collection Nu", image: imgFrame245 },
  { id: 10, name: "Collection Xi", image: imgFrame246 },
  { id: 11, name: "Collection Omicron", image: imgFrame247 },
  { id: 12, name: "Collection Omicron", image: imgFrame247 },
  { id: 13, name: "Collection Pi", image: imgFrame248 },
  { id: 14, name: "Collection Rho", image: imgFrame249 },
  { id: 15, name: "Collection Sigma", image: imgFrame250 },
  { id: 16, name: "Collection Sigma", image: imgFrame250 },
];

export function MensCollection() {
  return <CollectionPage title="Mens Collection" basePath="/mens" items={ITEMS} />;
}
