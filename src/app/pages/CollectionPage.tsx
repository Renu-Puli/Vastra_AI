import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Header } from "../components/Header";

interface CollectionItem {
  id: number;
  name: string;
  image: string;
}

interface CollectionPageProps {
  title: string;
  basePath: string;
  items: CollectionItem[];
}

export function CollectionPage({ title, basePath, items }: CollectionPageProps) {
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col items-center w-full font-['Clash_Display',sans-serif]">
      <Header />
      
      <div className="w-full max-w-[2000px] px-8 md:px-[64px] py-[48px] flex flex-col items-start">
        <div className="flex items-center gap-[16px] mb-[32px]">
          <Link to="/" className="flex items-center justify-center w-[64px] h-[64px] hover:bg-black/5 rounded-full transition-colors">
            <ChevronLeft size={48} strokeWidth={2} />
          </Link>
          <h1 className="text-4xl md:text-[64px] font-medium text-black">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[32px] w-full">
          {items.map((item) => (
            <Link to={`${basePath}/${item.id}`} key={item.id} className="flex flex-col gap-[16px] w-full group">
              <div className="w-full aspect-[470/480] bg-[#e2ded9] rounded-xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-[32px] font-medium text-black group-hover:text-gray-700 transition-colors">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
