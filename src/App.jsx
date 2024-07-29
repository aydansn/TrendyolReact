import { BrowserRouter, Route, Routes } from "react-router-dom";
import Girish from "./pages/Girish";
import Favori from "./pages/Favori";
import Sebet from "./pages/Sebet";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Girish />} />
        <Route path="/girish" element={<Girish />} />
        <Route path="/favori" element={<Favori />} />
        <Route path="/sebet" element={<Sebet/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}

export default App;