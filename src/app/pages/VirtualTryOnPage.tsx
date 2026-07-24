import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Camera as CameraIcon } from "lucide-react";
import { Header } from "../components/Header";

interface VirtualTryOnPageProps {
  category: string;
  categoryLink: string;
  productName: string;
  image: string;
  relatedProducts: {
    id: number;
    name: string;
    image: string;
  }[];
}

export function VirtualTryOnPage({
  category,
  categoryLink,
  productName,
  image,
  relatedProducts,
}: VirtualTryOnPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("camera-view");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col items-center w-full font-['Clash_Display',sans-serif]">
      <Header />

      <div className="w-full max-w-[2000px] px-8 md:px-[64px] py-[24px] flex flex-col items-center">
        
        {/* Breadcrumbs */}
        <div className="w-full flex items-center gap-[16px] text-[24px] font-medium mb-[64px] overflow-x-auto whitespace-nowrap justify-start">
          <Link to="/" className="text-[#b1b1b1] hover:text-black transition-colors">Home</Link>
          <span className="text-[#b1b1b1]">/</span>
          <Link to={categoryLink} className="text-[#b1b1b1] hover:text-black transition-colors">{category}</Link>
          <span className="text-[#b1b1b1]">/</span>
          <span className="text-black font-['Clash_Display:Light',sans-serif]">{productName}</span>
          <span className="text-black">/ Virtual Try On</span>
        </div>

        {/* Main Image Container */}
        <div className="w-full max-w-[2041px] flex flex-col items-center relative mb-[64px]">
          <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-[2041/1638] rounded-[30px] overflow-hidden border-[10px] border-black relative bg-[#e2ded9]">
            <img src={image} alt="Try On Target" className="w-full h-full object-cover object-center scale-[1.15]" />
          </div>
        </div>

        {/* Recently Captured Section */}
        <div className="w-full mt-[64px] mb-[64px] max-w-[1838px]">
          <div className="flex items-center justify-between mb-[48px] px-0 md:px-[64px]">
            <h2 className="text-4xl md:text-[64px] font-medium text-black">Recently Captured</h2>
            <Link to={categoryLink} className="flex items-center gap-[16px] bg-[#f2f2f2] px-[24px] py-[16px] rounded-[999px] text-black text-[24px] font-medium hover:bg-gray-200 transition-colors">
              <span>See all</span>
              <ArrowRight size={28} />
            </Link>
          </div>
          
          <div className="flex gap-[32px] overflow-x-auto pb-8 snap-x px-0 md:px-[64px]">
            {relatedProducts.map((item) => (
              <Link to={`${categoryLink}/${item.id}`} key={item.id} className="flex flex-col gap-[16px] w-[300px] md:w-[420px] shrink-0 snap-start group">
                <div className="aspect-[564/592] bg-[#e2ded9] overflow-hidden rounded-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[24px] md:text-[32px] font-medium text-black">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
