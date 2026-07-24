import { Link } from "react-router-dom";
import { Search, Camera } from "lucide-react";
import { Header } from "../components/Header";
import { OfferBanners } from "../components/OfferBanners";

import imgFrame236 from "../../assets/mens_banner.jpg";
import imgFrame239 from "figma:asset/4a169adeb8089fb4ceb1691abba749f508f56c96.png";
import imgFrame240 from "figma:asset/359ea820bfd288642dfa8ec66039dada68138896.png";
import imgFrame241 from "figma:asset/5713353aa89cf9eda996f5a9ed81cbce5be131be.png";
import imgFrame242 from "figma:asset/c6280db822ea0590e92f65dc259910327cb43882.png";
import imgFrame243 from "figma:asset/41f33f6391b8bd06e3b6fffecc93d57549d8447c.png";
import imgFrame244 from "figma:asset/09ee7f105804aaf36566caff05d2b967ebcac06b.png";
import imgFrame245 from "figma:asset/936a228a5d13658847042b32445bede2275e8a77.png";
import imgFrame246 from "figma:asset/578c483e04f8699ffb0527d621abcd970ccae746.png";
import imgFrame247 from "figma:asset/4e674847eae6de8a13ec44a1ec87d4ade4401590.png";
import imgFrame248 from "figma:asset/627e1534aa88f26257f71271cc2f568672de317d.png";
import imgFrame249 from "figma:asset/c4e8e96d5308093b2b31bbb6e4451624e31f4c61.png";

const MENS_COLLECTIONS = [
  { id: 1, name: "Collection Alpha", image: imgFrame239 },
  { id: 2, name: "Collection Beta", image: imgFrame240 },
  { id: 3, name: "Collection Gamma", image: imgFrame241 },
  { id: 4, name: "Collection Delta", image: imgFrame242 },
  { id: 5, name: "Collection Epsilon", image: imgFrame243 },
];

const WOMENS_COLLECTIONS = [
  { id: 1, name: "Collection Alpha", image: imgFrame244 },
  { id: 2, name: "Collection Beta", image: imgFrame245 },
  { id: 3, name: "Collection Gamma", image: imgFrame246 },
  { id: 4, name: "Collection Delta", image: imgFrame247 },
  { id: 5, name: "Collection Epsilon", image: imgFrame248 },
];

export function Home() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col items-center w-full font-['Clash_Display',sans-serif]">
      <Header />
      
      <div className="w-full max-w-[2000px] px-8 md:px-[64px] py-[32px] flex flex-col items-center">
        {/* Search Bar */}
        <div className="w-full max-w-[1786px] bg-[#e3e3e3] h-[100px] md:h-[143px] rounded-[35px] relative flex items-center mb-[32px]">
          <div className="absolute left-[40px] text-[#211F26]">
            <Search size={48} strokeWidth={3} />
          </div>
          <p className="flex-1 text-center font-['Clash_Display',sans-serif] text-2xl md:text-[48px] text-[#211f26]">
            search for "festival Dresses"
          </p>
          <div className="absolute right-[40px] text-[#211F26] p-4 bg-white/50 rounded-full cursor-pointer hover:bg-white transition-colors">
            <Camera size={40} strokeWidth={2} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-[1786px] h-[400px] md:h-[689px] relative rounded-[24px] overflow-hidden mb-[32px]">
          <img src={imgFrame236} alt="Hero" className="w-full h-full object-cover" />
        </div>

        {/* Category Toggles */}
        <div className="flex gap-[18px] justify-center mb-[64px]">
          <Link to="/mens" className="bg-black text-white px-[24px] py-[16px] rounded-[999px] text-[24px] font-medium min-w-[120px] text-center hover:opacity-80 transition-opacity">
            Men
          </Link>
          <Link to="/womens" className="bg-[#f2f2f2] text-black border border-[#938f96] px-[24px] py-[16px] rounded-[999px] text-[24px] font-medium min-w-[120px] text-center hover:bg-gray-200 transition-colors">
            Women
          </Link>
        </div>

        {/* Men Collection Section */}
        <div className="w-full mb-[64px] overflow-hidden">
          <div className="flex items-center justify-between mb-[32px] px-2">
            <h2 className="text-4xl md:text-[64px] font-medium text-black">Men Collection</h2>
            <Link to="/mens" className="flex items-center gap-[16px] bg-[#f2f2f2] px-[24px] py-[16px] rounded-[999px] text-black text-[24px] font-medium hover:bg-gray-200 transition-colors">
              <span>See all</span>
              <span>→</span>
            </Link>
          </div>
          <div className="w-full overflow-hidden relative flex vastra-marquee-container">
            {/* First Set */}
            <div className="vastra-marquee-set flex gap-[32px] pr-[32px] shrink-0">
              {MENS_COLLECTIONS.map((item) => (
                <Link to={`/mens/${item.id}`} key={`mens-1-${item.id}`} className="flex flex-col gap-[16px] w-[300px] md:w-[420px] shrink-0 group">
                  <div className="aspect-[564/592] bg-[#e2ded9] overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-medium text-black">{item.name}</h3>
                </Link>
              ))}
            </div>
            {/* Sibling Set for Seamless Loop */}
            <div className="vastra-marquee-set flex gap-[32px] pr-[32px] shrink-0" aria-hidden="true">
              {MENS_COLLECTIONS.map((item) => (
                <Link to={`/mens/${item.id}`} key={`mens-2-${item.id}`} className="flex flex-col gap-[16px] w-[300px] md:w-[420px] shrink-0 group">
                  <div className="aspect-[564/592] bg-[#e2ded9] overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-medium text-black">{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Women Collection Section */}
        <div className="w-full mb-[64px] overflow-hidden">
          <div className="flex items-center justify-between mb-[32px] px-2">
            <h2 className="text-4xl md:text-[64px] font-medium text-black">Women Collection</h2>
            <Link to="/womens" className="flex items-center gap-[16px] bg-[#f2f2f2] px-[24px] py-[16px] rounded-[999px] text-black text-[24px] font-medium hover:bg-gray-200 transition-colors">
              <span>See all</span>
              <span>→</span>
            </Link>
          </div>
          <div className="w-full overflow-hidden relative flex vastra-marquee-container">
            {/* First Set */}
            <div className="vastra-marquee-set flex gap-[32px] pr-[32px] shrink-0">
              {WOMENS_COLLECTIONS.map((item) => (
                <Link to={`/womens/${item.id}`} key={`womens-1-${item.id}`} className="flex flex-col gap-[16px] w-[300px] md:w-[420px] shrink-0 group">
                  <div className="aspect-[564/592] bg-[#e2ded9] overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-medium text-black">{item.name}</h3>
                </Link>
              ))}
            </div>
            {/* Sibling Set for Seamless Loop */}
            <div className="vastra-marquee-set flex gap-[32px] pr-[32px] shrink-0" aria-hidden="true">
              {WOMENS_COLLECTIONS.map((item) => (
                <Link to={`/womens/${item.id}`} key={`womens-2-${item.id}`} className="flex flex-col gap-[16px] w-[300px] md:w-[420px] shrink-0 group">
                  <div className="aspect-[564/592] bg-[#e2ded9] overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-medium text-black">{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes vastra-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .vastra-marquee-container {
            display: flex;
            width: 100%;
          }
          .vastra-marquee-set {
            display: flex;
            animation: vastra-marquee 25s linear infinite;
          }
        `}</style>

        {/* Offer Banners Slider */}
        <OfferBanners />

        {/* Bottom Banner Image */}
        <div className="w-full max-w-[2085px] h-[400px] md:h-[689px] relative rounded-[25px] overflow-hidden mt-[32px] mb-[64px]">
          <img src={imgFrame249} alt="Bottom Banner" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
