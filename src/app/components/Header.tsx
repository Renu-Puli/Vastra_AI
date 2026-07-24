import { Link } from "react-router-dom";
import imgEllipse10 from "figma:asset/727bc8c72a7eb071bda5de381dbacd133a9d7df5.png";

export function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#fef7ff] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-8 md:px-[64px] py-[32px] relative size-full">
          <Link to="/" className="content-stretch flex items-end justify-center relative shrink-0" data-name="logo">
            <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-pre">
              <span className="leading-[1.3] text-3xl md:text-[48px]">
                {`Vastra `}
                <br aria-hidden />
              </span>
              <span className="font-['Clash_Display:Semibold',sans-serif] leading-[1.3] text-3xl md:text-[48px]">Alankara</span>
            </p>
          </Link>
          <div className="size-[80px] md:size-[120px] rounded-full overflow-hidden shrink-0">
            <img alt="User profile" className="block w-full h-full object-cover" src={imgEllipse10} />
          </div>
        </div>
      </div>
    </div>
  );
}
