import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import LandingPage from './Components/landingsection';
import AboutUs from './Components/aboutUs';
import OurProduct from './Components/ourProduct';
import Healthy from './Components/healthy';
import OurCustormers from './Components/ourCustomers';
import OurGallery from './Components/ourGallery';
import Footer from './Components/footer';

import { COLORS } from './theme';

function App() {
  return (
    <>
      <Navbar colors={COLORS}/>
      <LandingPage colors={COLORS}/>
      <AboutUs colors={COLORS}/>
      <OurProduct colors={COLORS}/>
      <Healthy colors={COLORS}/>
      <OurCustormers colors={COLORS}/>
      <OurGallery colors={COLORS}/>
      <Footer colors={COLORS}/>
    </>
  );
}

export default App;
