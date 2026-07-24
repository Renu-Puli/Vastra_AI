import { CollectionPage } from "./CollectionPage";

import imgFrame239 from "figma:asset/bf265e90a2383250537bb9ea0959494b0ffa6bca.png";
import imgFrame240 from "figma:asset/8c691adcc4e0a1960f16c18977f9d7ffe733f6f8.png";
import imgFrame241 from "figma:asset/21fbc44387d36b1f1e680cd4aa9cd32eec5909f3.png";
import imgFrame242 from "figma:asset/e149d33370bc971bb6811150b9ad6819cb544773.png";
import imgFrame243 from "figma:asset/0c0c7245fc041bdb3c50a71ac30769e0bdc7c8e5.png";
import imgFrame244 from "figma:asset/275913f412200e8261d6f3df041ffc105edf56ae.png";
import imgFrame245 from "figma:asset/73225b1f024bc161c379abe9e25fb0e66d556962.png";
import imgFrame246 from "figma:asset/74919be126ec2be54be84ae4933825d7c8bf8c03.png";
import imgFrame247 from "figma:asset/17212aa122b056559278e17fea660f44d1911c3e.png";
import imgFrame248 from "figma:asset/fe1c6a8af3431dcb8cf3a4d398ea29563804cf68.png";
import imgFrame249 from "figma:asset/627e1534aa88f26257f71271cc2f568672de317d.png";
import imgFrame250 from "figma:asset/6e867e4b8f432bdddcc575239032b0c2464bce15.png";

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

export function WomensCollection() {
  return <CollectionPage title="Womens Collection" basePath="/womens" items={ITEMS} />;
}
