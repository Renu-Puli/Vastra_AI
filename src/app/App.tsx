import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MensCollection } from "./pages/MensCollection";
import { WomensCollection } from "./pages/WomensCollection";
import { MensProductDetails } from "./pages/MensProductDetails";
import { WomensProductDetails } from "./pages/WomensProductDetails";
import { MensVirtualTryOn } from "./pages/MensVirtualTryOn";
import { WomensVirtualTryOn } from "./pages/WomensVirtualTryOn";
import { CameraViewPage } from "./pages/CameraViewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MensCollection />} />
        <Route path="/womens" element={<WomensCollection />} />
        <Route path="/mens/:id" element={<MensProductDetails />} />
        <Route path="/womens/:id" element={<WomensProductDetails />} />
        <Route path="/mens/:id/camera" element={<MensVirtualTryOn />} />
        <Route path="/womens/:id/camera" element={<WomensVirtualTryOn />} />
        <Route path="/mens/:id/camera/camera-view" element={<CameraViewPage category="Mens Collection" categoryLink="/mens" />} />
        <Route path="/womens/:id/camera/camera-view" element={<CameraViewPage category="Womens Collection" categoryLink="/womens" />} />
      </Routes>
    </BrowserRouter>
  );
}
