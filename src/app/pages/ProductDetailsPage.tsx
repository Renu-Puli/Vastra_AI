import { useState, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight, ScanFace, X, Upload, Camera as CameraIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Header } from "../components/Header";

interface ProductDetailsPageProps {
  category: string;
  categoryLink: string;
  productName: string;
  brand: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  discountAmount: number;
  images: string[];
  colors: string[];
  sizes: number[];
  relatedProducts: {
    id: number;
    name: string;
    image: string;
  }[];
}

export function ProductDetailsPage({
  category,
  categoryLink,
  productName,
  brand,
  price,
  originalPrice,
  discountPercentage,
  discountAmount,
  images,
  colors,
  sizes,
  relatedProducts,
}: ProductDetailsPageProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [isTryOnModalOpen, setIsTryOnModalOpen] = useState(false);
  const [faceImage, setFaceImage] = useState<string | null>(null);
  const [isTryOnLoading, setIsTryOnLoading] = useState(false);
  const [tryOnResult, setTryOnResult] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const handleUploadClick = () => {
    // Mock image upload
    setFaceImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop");
    setIsCameraActive(false);
  };

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setFaceImage(imageSrc);
        setIsCameraActive(false);
      }
    }
  }, [webcamRef]);

  const navigate = useNavigate();

  const handleStartCamera = () => {
    navigate("camera");
  };

  const handleTryOnSubmit = () => {
    if (faceImage) {
      setIsTryOnLoading(true);
      // Mock loading state - in reality this would wait for an API
      setTimeout(() => {
        // Stop loading after 3 seconds for demo
        setIsTryOnLoading(false);
        setTryOnResult(selectedImage); // Mock using the selected image as result
      }, 3000);
    }
  };

  const handleCloseModal = () => {
    setIsTryOnModalOpen(false);
    setIsTryOnLoading(false);
    setFaceImage(null);
    setTryOnResult(null);
    setIsCameraActive(false);
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen flex flex-col items-center w-full font-['Clash_Display',sans-serif]">
      <Header />

      <div className="w-full max-w-[2000px] px-8 md:px-[64px] py-[24px] flex flex-col">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-[16px] text-[24px] font-medium mb-[32px] overflow-x-auto whitespace-nowrap">
          <Link to="/" className="text-[#b1b1b1] hover:text-black transition-colors">Home</Link>
          <span className="text-[#b1b1b1]">/</span>
          <Link to={categoryLink} className="text-[#b1b1b1] hover:text-black transition-colors">{category}</Link>
          <span className="text-[#b1b1b1]">/</span>
          <span className="text-black">{productName}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[64px] items-start w-full relative">
          
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:w-[738px] shrink-0 sticky top-[32px] flex flex-col gap-[32px]">
            {/* Main Image */}
            <div className="w-full aspect-[738/705] bg-[#e2ded9] rounded-2xl overflow-hidden relative">
              <img src={selectedImage} alt={productName} className="w-full h-full object-cover" />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-[16px] overflow-x-auto pb-4 snap-x">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`w-[108px] h-[108px] shrink-0 rounded-xl overflow-hidden snap-start transition-all border-[3px] ${
                    selectedImage === img ? "border-[#313131] shadow-[inset_0px_0px_0px_4px_white]" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-full flex-1 flex flex-col gap-[32px] lg:max-w-[1240px]">
            {/* Title & Brand */}
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#a6a6a6] text-[24px] font-medium uppercase">{brand}</p>
              <h1 className="text-4xl md:text-[56px] leading-[1.2] font-medium text-black max-w-[800px]">
                {productName}
              </h1>
            </div>

            {/* Price Section */}
            <div className="flex flex-col gap-[16px] pt-[24px] border-t border-gray-200">
              {/* Discount Tag */}
              <div className="flex items-center gap-[12px]">
                <span className="text-[#a3a3a3] text-[20px] font-medium">Save</span>
                <div className="px-[16px] py-[8px] rounded-lg bg-gradient-to-r from-[#2d2d2d] via-[#4d4d4d] to-[#2d2d2d] shadow-inner text-[#fcf5f1] text-[20px] font-medium">
                  ₹ {discountAmount} off
                </div>
              </div>

              {/* Price Row */}
              <div className="flex items-end gap-[24px] flex-wrap">
                <span className="text-[56px] md:text-[72px] font-medium leading-none text-[#303030]">
                  Rs. {price}
                </span>
                <span className="text-[32px] md:text-[40px] text-[#938f96] line-through decoration-1 mb-2">
                  MRP. {originalPrice}
                </span>
                <span className="text-[28px] md:text-[32px] font-['Montserrat',sans-serif] font-medium text-[#2a26ff] mb-2">
                  {discountPercentage}% off
                </span>
              </div>
              <p className="text-[20px] text-gray-500">Inclusive of all taxes</p>
            </div>

            {/* Offers Section */}
            <div className="flex flex-col gap-[16px] pt-[24px] border-t border-gray-200">
              <h3 className="text-[28px] font-medium text-[#36343b] flex items-center gap-[12px]">
                <span className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center font-bold text-sm">%</span>
                Available Offers
              </h3>
              
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[8px] text-[18px] font-medium">
                  <span className="text-[#605d64]">Extra 10% Off</span>
                  <span className="text-[#007aff]">Rs. {Math.round(price * 0.9)}</span>
                </div>
                
                <ul className="list-disc pl-[24px] text-[20px] text-[#2b2930] leading-[1.6] space-y-1">
                  <li>Get 5% Instant Discount on Axis Bank Credit Cards</li>
                  <li>Applicable on: Orders above Rs. 3999</li>
                  <li>Coupon code: <span className="font-medium">STYLE2026</span></li>
                  <li>Coupon Discount: Flat Rs. 250 off</li>
                </ul>
              </div>
            </div>

            {/* Colors */}
            <div className="flex flex-col gap-[16px] pt-[24px] border-t border-gray-200">
              <h3 className="text-[28px] font-medium text-[#36343b]">More Colors</h3>
              <div className="flex gap-[16px] overflow-x-auto pb-4 snap-x">
                {colors.map((color, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedColor(color)}
                    className={`w-[80px] h-[80px] shrink-0 rounded-lg overflow-hidden snap-start transition-all border-[3px] ${
                      selectedColor === color ? "border-black shadow-md" : "border-[#ebebeb]"
                    }`}
                  >
                    <img src={color} alt={`Color ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex flex-col gap-[24px] pt-[24px] border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-[28px] font-medium text-[#36343b]">Select Size</h3>
                <button className="text-[24px] font-medium text-[#0400e8] border-b border-[#0400e8] pb-1 flex items-center gap-2 hover:opacity-80">
                  Size Chart <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="flex gap-[16px] flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-[64px] h-[64px] rounded-full flex items-center justify-center text-[24px] font-medium transition-all ${
                      selectedSize === size 
                        ? "bg-[#eaeaea] border-[3px] border-black" 
                        : "bg-[#eaeaea] border-[1.5px] border-[#ebebeb] hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Virtual Try On Button */}
            <div className="pt-[24px]">
              <button 
                onClick={() => setIsTryOnModalOpen(true)}
                className="w-full rounded-2xl bg-gradient-to-br from-[#424242] via-[#6c6c6c] to-[#424242] py-[24px] flex items-center justify-center gap-[24px] hover:shadow-lg transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <ScanFace size={40} className="text-[#fcf5f1]" strokeWidth={2} />
                <span className="text-[28px] font-medium font-['Montserrat',sans-serif] text-[#fcf5f1]">
                  Virtual Try On
                </span>
              </button>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col gap-[32px] pt-[32px] border-t border-gray-200 mt-[16px]">
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[28px] font-semibold text-[#1d1b20]">Product Details</h3>
                <div className="font-['Satoshi',sans-serif] text-[24px] text-black leading-relaxed space-y-1">
                  <p>Black woven korean pants</p>
                  <p>relaxed fit</p>
                  <p>Brand Fit: relaxed</p>
                  <p>High-rise</p>
                  <p>Length: regular</p>
                  <p>Pattern: solid</p>
                  <p>Pleated design</p>
                  <p>Feature: plain</p>
                  <p>2 pockets</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[28px] font-semibold text-[#1d1b20]">Size & Fit</h3>
                <div className="font-['Satoshi',sans-serif] text-[24px] text-black leading-relaxed space-y-4">
                  <p>
                    Brand Fit: Relaxed<br />
                    Fit: Loose Fit<br />
                    The model (height 6') is wearing a size 32
                  </p>
                  <p>
                    <strong>Material & Care</strong><br />
                    Lycra<br />
                    Machine Wash
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[28px] font-semibold text-[#1d1b20]">Delivery Information</h3>
                <div className="font-['Satoshi',sans-serif] text-[24px] text-black leading-relaxed space-y-1">
                  <p>Standard delivery in 5-7 business days</p>
                  <p>Express delivery available within 2-3 business days</p>
                  <p>Free shipping on orders over $50</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[28px] font-semibold text-[#1d1b20]">Return Policy</h3>
                <div className="font-['Satoshi',sans-serif] text-[24px] text-black leading-relaxed space-y-1">
                  <p>Easy returns within 30 days of purchase</p>
                  <p>Items must be in original condition with tags attached</p>
                  <p>Refunds processed within 7-10 business days</p>
                </div>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="bg-[#f0f0f0] rounded-2xl border border-[#c4c4c4] p-[32px] flex flex-col items-center mt-[16px]">
              <h3 className="text-[32px] font-medium text-black mb-[48px] text-center w-full">Details</h3>
              <div className="grid grid-cols-2 gap-y-[48px] gap-x-[24px] w-full text-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="text-gray-500">Composition</p>
                  <p className="font-medium">Organic Cotton Blend</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-gray-500">Care</p>
                  <p className="font-medium">Machine Wash Cold</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-gray-500">Country of Origin</p>
                  <p className="font-medium">India</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-gray-500">Sustainability</p>
                  <p className="font-medium">Ethically Sourced</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        <div className="w-full mt-[128px] mb-[64px]">
          <div className="flex items-center justify-between mb-[48px]">
            <h2 className="text-4xl md:text-[64px] font-medium text-black">{category}</h2>
            <Link to={categoryLink} className="flex items-center gap-[16px] bg-[#f2f2f2] px-[24px] py-[16px] rounded-[999px] text-black text-[24px] font-medium hover:bg-gray-200 transition-colors">
              <span>See all</span>
              <ArrowRight size={28} />
            </Link>
          </div>
          
          <div className="flex gap-[32px] overflow-x-auto pb-8 snap-x">
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

      {/* Virtual Try On Modal */}
      {isTryOnModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[24px] w-full max-w-[1000px] overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
              <h2 className="text-3xl font-semibold text-black">Virtual Tryon</h2>
              <button 
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col md:flex-row p-8 gap-8 overflow-y-auto">
              {/* Left Column: Tryon Model */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="w-full aspect-[3/4] bg-[#f2f2f2] rounded-xl overflow-hidden relative">
                  <img src={selectedImage} alt="Tryon Model" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-xl font-medium text-black">Tryon Model</p>
              </div>

              {/* Right Column: User Image Input / Result */}
              <div className="flex-1 flex flex-col justify-between">
                {tryOnResult ? (
                  <>
                    <div className="flex flex-col gap-4">
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative">
                        <img src={tryOnResult} alt="Generated Output" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-center text-xl font-medium text-black">Generated Output</p>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button 
                        onClick={() => { setTryOnResult(null); setFaceImage(null); }}
                        className="flex-1 border-2 border-black text-black rounded-xl py-4 text-xl font-medium hover:bg-gray-50 transition-colors"
                      >
                        Try with another image
                      </button>
                      <button className="flex-1 bg-black text-white rounded-xl py-4 text-xl font-medium hover:opacity-90 transition-opacity">
                        Add to Cart
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-6">
                      <h3 className="text-2xl font-medium text-black">Input Tryon face image</h3>
                      
                      {isTryOnLoading && faceImage ? (
                        <div className="w-full aspect-[3/4] flex flex-col items-center justify-center gap-6">
                          <div className="w-[60%] aspect-square rounded-full overflow-hidden relative border-4 border-gray-200">
                            <img src={faceImage} alt="Face" className="w-full h-full object-cover" />
                            <div className="absolute left-0 right-0 h-1 bg-[#0400e8] shadow-[0_0_8px_2px_#0400e8] animate-[scan_2s_ease-in-out_infinite]" />
                          </div>
                          <p className="text-xl text-gray-600 font-medium animate-pulse">Loading...</p>
                        </div>
                      ) : faceImage ? (
                        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative">
                          <img src={faceImage} alt="Uploaded Face" className="w-full h-full object-cover" />
                          <button 
                            onClick={() => setFaceImage(null)}
                            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white"
                          >
                            <X size={24} />
                          </button>
                        </div>
                      ) : isCameraActive ? (
                        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative bg-black flex flex-col items-center justify-center">
                          <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="w-full h-full object-cover"
                            videoConstraints={{ facingMode: "user" }}
                          />
                          <button 
                            onClick={handleCapture}
                            className="absolute bottom-6 w-16 h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center hover:bg-gray-100 shadow-lg"
                          >
                            <div className="w-12 h-12 bg-black rounded-full" />
                          </button>
                          <button 
                            onClick={() => setIsCameraActive(false)}
                            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white"
                          >
                            <X size={24} />
                          </button>
                        </div>
                      ) : (
                        <div className="w-full aspect-[3/4] rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-6 bg-[#fafafa]">
                          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                            <ScanFace size={40} />
                          </div>
                          
                          <button 
                            onClick={handleStartCamera}
                            className="w-3/4 bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-gray-800 transition-colors"
                          >
                            <CameraIcon size={20} />
                            Open Camera
                          </button>

                          <div className="flex items-center w-3/4">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-3 text-gray-500 text-sm">or</span>
                            <hr className="flex-1 border-gray-300" />
                          </div>

                          <button 
                            onClick={handleUploadClick}
                            className="flex items-center gap-2 text-[#0400e8] font-medium text-lg hover:opacity-80"
                          >
                            <Upload size={20} />
                            Select from Device
                          </button>
                          <p className="text-gray-500">No file chosen</p>
                        </div>
                      )}
                    </div>

                    {!isTryOnLoading && (
                      <button 
                        onClick={handleTryOnSubmit}
                        disabled={!faceImage}
                        className="w-full bg-black text-white rounded-xl py-6 text-2xl font-medium mt-8 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Try it on !!
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
