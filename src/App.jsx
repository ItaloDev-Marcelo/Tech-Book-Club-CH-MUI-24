import './App.css'
import AboutSection from './Pages/About'
import Header from './Pages/Header'
import MiddlePage from './Pages/MiddlePage'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Review from './Pages/Review';
import Footer from './Pages/Footer';


function App() {


  useEffect(() => {
    ScrollReveal().reveal(".from-top", {
        distance: "50px",
        origin: "top",
        duration: 1000,
        reset: false
      });


      ScrollReveal().reveal(".from-left", {
        distance: "100px",
        origin: "left",
        duration: 1300,
      });


      ScrollReveal().reveal(".from-right", {
        distance: "100px",
        origin: "right",
        duration: 1200,
      });

      ScrollReveal().reveal(".from-bottom", {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      });

}, [])

  

  return (
   <>
  <Header/>
   <div className='container'>
   <main>
    <AboutSection/>
    <MiddlePage/>
   </main>
    <Review/>
   </div>
   <Footer/>
   </>
  )
}

export default App
