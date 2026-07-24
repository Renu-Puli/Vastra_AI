import svgPaths from "./svg-rv9exdrqrj";
import imgRectangle1 from "./b166d8bc81dff27c9c8db870513168dffb4f64e1.png";
import imgFrame239 from "./f5f8d4dd9eb53400a4a8245abd2fb21d9ec4dc8c.png";
import imgFrame240 from "./f16d1af7b5cd77890334b091c726382659e5209b.png";
import imgFrame241 from "./1a6622e299395ae7455f1e1759e501d3cc1297f5.png";
import imgFrame242 from "./215db321eea469dd99146a0082de4e2c7510ce0e.png";
import imgFrame243 from "./6ccb579b211c978cb6f70cd90cf8384c7eca7a59.png";

function Logo() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0" data-name="logo">
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-pre">
        <span className="leading-[1.3] text-[48px]">
          {`Vastra `}
          <br aria-hidden />
        </span>
        <span className="font-['Clash_Display:Semibold',sans-serif] leading-[1.3] text-[48px]">Alankara</span>
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#fef7ff] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[64px] py-[32px] relative size-full">
          <Logo />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex gap-[16px] items-center left-[43px] not-italic text-[24px] top-[24px]">
      <p className="font-['Clash_Display:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#b1b1b1] whitespace-nowrap">Home</p>
      <p className="font-['Clash_Display:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#b1b1b1] w-[20.233px]">/</p>
      <p className="font-['Clash_Display:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#b1b1b1] whitespace-nowrap">Mens Collection</p>
      <p className="font-['Clash_Display:Medium',sans-serif] leading-[1.3] relative shrink-0 text-[#b1b1b1] whitespace-nowrap">/</p>
      <p className="font-['Clash_Display:Light',sans-serif] leading-[1.3] relative shrink-0 text-black whitespace-nowrap">Relaxed Fit Long Overcoat with Insert Pockets</p>
      <p className="font-['Clash_Display:Light',sans-serif] leading-[0] relative shrink-0 text-black whitespace-pre">
        <span className="leading-[1.3]">{`/ `}</span>
        <span className="font-['Clash_Display:Medium',sans-serif] leading-[1.3]">{` Virtual Try On`}</span>
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[79px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[64px] py-[24px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function TryOnButton() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(32.058900641105275deg, rgb(66, 66, 66) 18.182%, rgb(74, 74, 74) 43.51%, rgb(108, 108, 108) 62.358%, rgb(72, 72, 72) 95.577%, rgb(66, 66, 66) 143.14%)" }} data-name="Try On Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[20px] pr-[16px] py-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Try On Icon">
            <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Icon">
              <div className="absolute inset-[-5.26%_-5%]">
                <svg className="block size-full" fill="none" height="35" preserveAspectRatio="none" viewBox="0 0 36.6667 35" width="36.6667">
                  <g id="Icon">
                    <path d={svgPaths.p275f7100} stroke="#FCF5F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d={svgPaths.p2b40a370} stroke="#FCF5F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#fcf5f1] text-[24px] whitespace-nowrap">Start Camera</p>
        </div>
      </div>
    </div>
  );
}

function TryOnContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[545px] top-[2172px] w-[1090px]" data-name="Try On Container">
      <TryOnButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex h-[147px] items-center justify-center left-0 px-[64px] py-[32px] right-0 top-[32px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Clash_Display:Medium',sans-serif] leading-[1.3] min-w-px not-italic relative text-[64px] text-black">Recently Captured</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="aspect-[564/592] relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e2ded9] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame239} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[420px]">
      <Frame3 />
      <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Collection Alpha</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="aspect-[564/592] relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e2ded9] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame240} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[420px]">
      <Frame5 />
      <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Collection Beta</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="aspect-[564/592] relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e2ded9] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[132.74%] left-[-3.63%] max-w-none top-[-20.87%] w-[107.27%]" src={imgFrame241} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[420px]">
      <Frame9 />
      <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Collection Gamma</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="aspect-[564/592] relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e2ded9] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame242} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[420px]">
      <Frame11 />
      <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Collection Delta</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="aspect-[564/592] relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e2ded9] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame243} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[420px]">
      <Frame13 />
      <p className="[word-break:break-word] font-['Clash_Display:Medium',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Collection Delta</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[498.851px] items-center left-0 px-[64px] right-0 top-[179px]">
      <Frame4 />
      <Frame7 />
      <Frame8 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[746px] left-0 top-[2352px] w-[1838px]">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] bg-[#f2f2f2] content-stretch flex font-['Clash_Display:Medium',sans-serif] gap-[16px] items-center justify-center leading-[1.3] min-w-[120px] not-italic px-[8px] py-[16px] relative rounded-[563.073px] shrink-0 text-black whitespace-nowrap">
      <p className="relative shrink-0 text-[24px]">See all</p>
      <p className="relative shrink-0 text-[27.055px]">→</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[1950px] top-[2424px]">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden className="absolute border-[#cac5cd] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function VirtualTryOnBefore() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col items-start relative size-full" data-name="Virtual  Try on Before">
      <Header />
      <Frame15 />
      <div className="absolute h-[1638px] left-[69px] pointer-events-none rounded-[25px] top-[425px] w-[2041px]">
        <div className="absolute inset-0 overflow-hidden rounded-[25px]">
          <img alt="" className="absolute h-[174.27%] left-[0.04%] max-w-none top-[-14.93%] w-full" src={imgRectangle1} />
        </div>
        <div aria-hidden className="absolute border-10 border-black border-solid inset-[-5px] rounded-[30px]" />
      </div>
      <TryOnContainer />
      <Frame14 />
      <Frame1 />
    </div>
  );
}