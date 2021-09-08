import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Narbar from '../components/Narbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Narbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
