import React from 'react';
import Hero from '../components/home/Hero';
import ProductHighlight from '../components/home/ProductHighlight';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <ProductHighlight
        title="Premium New York Style Black Tumblers"
        description="Our signature tumblers are crafted from the finest materials, designed to keep your drinks at the perfect temperature while showcasing your personal style with custom engraving and color options."
        imageSrc1="/images/tumbler(blc).png"
        imageAlt1="Crystal Tumbler"
        direction="left"
        ctaText="Shop Tumblers"
        ctaLink="/products" imageSrc2={''}      />
      
      <ProductHighlight
        title="Curated Gift Sets"
        description="Start your mornings with a personalized mug that's as unique as you are. Our ceramic mugs combine sophisticated design with customization options to create the perfect vessel for your favorite beverages."
        imageSrc1="/images/gift set 1.png"
        imageAlt1="Ceramic Mug"
        direction="right"
        ctaText="Shop Mugs"
        ctaLink="/products" imageSrc2={''}      />
      
      <FeaturedProducts />
      
      <ProductHighlight
        title="Customized Clear Glass Jars"
        description="Where Elegance Meets Personal Touch.

Whether you're gifting a loved one or elevating your own space, our customized glass jars deliver a unique blend of charm and functionality.
Your story. Your style. Etched in glass."
        imageSrc1="/images/gl1.png"
        imageSrc2=""
        
        imageAlt1="Gift Set"
        direction="left"
        ctaText="Explore Gift Sets"
        ctaLink="/products"
      />
    </>
  );
};

export default Home;