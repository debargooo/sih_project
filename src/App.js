import MapComponent from "./components/Map/Map";
import  {Home}  from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/map" element={<MapComponent/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
