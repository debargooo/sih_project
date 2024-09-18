import MapComponent from "./components/Map/Map";
import Slidebar from "./components/Slidebar/Slidebar";
import  {Home}  from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import Temperature from "./pages/Temperature";

function App() {
  return (
    <>
     <BrowserRouter>
     <div className="flex flex-col md:flex-row gap-4 md:flex w-screen h-screen overflow-x-hidden">

     <div className="w-screen md:w-[20%] lg:h-full">
        <Slidebar />
      </div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/map" element={<MapPage/>}/>
      <Route path="/temperature" element={<Temperature/>}/>
     </Routes>
      
     </div>
     </BrowserRouter>
    </>
  );
}

export default App;
