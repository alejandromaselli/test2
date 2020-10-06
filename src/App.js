// Modules
import React from 'react';

// Components
import NavBar from './components/navbar/navbar.component';
import Menu from './components/menu/menu.component';
import Carousel from './components/slider/slider.component.jsx';
import Services from './components/services/services.component';
import People from './components/people/people.component';
import FeaturedProducts from './components/featuredProducts/featuredProducts.component';
import BigSale from './components/bigSale/bigSale.component';
import Footer from './components/footer/footer.component';



import './App.sass';

function App() {
  return (
    <div className="container">
      <NavBar />
      <hr />
      <Menu />
      <Carousel />
      <Services />
      <hr />
      <People />
      <FeaturedProducts />
      <BigSale />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
