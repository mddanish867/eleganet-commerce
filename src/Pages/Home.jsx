import React from 'react';
import Slider from './Slider';
import FeaturedProducts from './FeaturedProducts';
import NewArrivals from './NewArrivals';
import BestSellers from './BestSellers';
import ComingSoon from './ComingSoon';
import RecentSearches from './RecentSearches';

const HomePage = () => {
  return (
    <div className='bg-orange-100 mt-8'>
      <Slider />
      <FeaturedProducts />
      <NewArrivals />
      <BestSellers />
      <ComingSoon />
      <RecentSearches />
    </div>
  );
};

export default HomePage;