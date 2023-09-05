// import './css/reset.css';
// react router-dom dagi redirect bu masalah path='/' bulib qosa <route path="/">
// Redirect ro='/about' bunda path='/' bulsa abotga ishlasin tegani
// </route>

import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Header/Header";

// switch u masalan /signda navbar kursatilmaydi qolganida kursatiladi ikkita switch ochiladi compionetga biriga navbar qolganiga kerakli narsalar yoziladi
function App() {
  return (
    <>
    
      <Navbar/>
    
    </>
 

  );
}

export default App;
