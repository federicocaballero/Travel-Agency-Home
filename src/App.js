
import './App.css';
import Navbar from './components/Navbar';
import TopNavar from './components/TopNavbar';
import Banner from './components/Banner';
import Offers from './components/Offers';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  
  // array de datos para las imagenes
  const dataImg = [
    {url:'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nombre: 'Japon', price: '$4000'},
    {url:'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nombre: 'United Kingdom', price: '$4000'},
    {url:'https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nombre: 'Spain', price: '$4000'},
    {url:'https://images.pexels.com/photos/1836580/pexels-photo-1836580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nombre: 'Turkey', price: '$4000'},
    {url:'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nombre: 'Italy', price: '$4000'},
    {url:'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nombre: 'India', price: '$4000'},
  ]
  
  return (
      <>
      <TopNavar/>
      <Navbar/>
      <Banner/>
      {/* --ofertas */}
      <div className=' text-center ps-5 pe-5 mt-5 text-uppercase fs-6 fw-bolder'>
        <span className='text-center text-uppercase lh-1' >
          <h2 className='fw-bold' >Best Offers</h2>
          <h2 className='fs-5 fw-bolder mb-3'>check out our top-rated tours</h2>      
        </span>
        <div className="container d-grid gap-3 mt-4 mb-5">
        <div className="row">
            <div className="col">
              <Offers data = {dataImg[0]} />
            </div>
            <div className="col">
              <Offers data = {dataImg[1]} />
            </div>
            <div className="col">
              <Offers data = {dataImg[2]} />
            </div>
       </div>
        <div className="row">
            <div className="col">
                    <Offers data = {dataImg[3]} />
                  </div>
            <div className="col">
                    <Offers data = {dataImg[4]} />
                  </div>
                  <div className="col">
                    <Offers data = {dataImg[5]} />
                  </div>
                </div>
        </div> 
      </div>
      {/* --ofertas */}    
      <WhyChooseUs/>
      <Testimonials/> 
      <Footer/>
      </>
  );
}

export default App;
