import { useState, useRef, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { Header } from "../components/Header";

export function CameraViewPage({ category, categoryLink }: { category: string, categoryLink: string }) {
  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const request = () => {
      const anyEl = el as any;
      if (anyEl.requestFullscreen) return anyEl.requestFullscreen();
      if (anyEl.webkitRequestFullscreen) return anyEl.webkitRequestFullscreen();
      if (anyEl.msRequestFullscreen) return anyEl.msRequestFullscreen();
      return Promise.resolve();
    };

    request().catch(() => {
      // ignore fullscreen failures (user agent or permission)
    });

    return () => {
      const doc: any = document;
      if (doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement) {
        if (doc.exitFullscreen) doc.exitFullscreen().catch(() => {});
        else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
        else if (doc.msExitFullscreen) doc.msExitFullscreen();
      }
    };
  }, []);

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        // Here you would typically process the image and redirect back to the product with the result
        // For now, we'll just alert and go back
        alert("Image captured! Navigating back to product...");
        navigate(-2); // Go back to product page
      }
    }
  }, [webcamRef, navigate]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center w-full font-['Clash_Display',sans-serif]">
      <Header />

      <div className="w-full flex-1 flex flex-col items-center justify-center p-8 relative">
      <div ref={containerRef} className="w-full max-w-[1200px] aspect-[3/4] md:aspect-video rounded-3xl overflow-hidden relative border-4 border-gray-800">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
            videoConstraints={{ facingMode: "user" }}
          />
          
          <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center bg-gradient-to-t from-black/80 to-transparent">
            <button
              onClick={handleCapture}
              className="w-28 h-12 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span className="text-black font-semibold text-lg">Start</span>
            </button>
          </div>

          <button
            onClick={() => navigate(-2)}
            className="absolute top-8 right-8 text-white bg-black/50 px-6 py-2 rounded-full hover:bg-black/70 transition-colors border border-white/20"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}