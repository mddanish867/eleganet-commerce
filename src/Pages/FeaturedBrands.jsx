import React from 'react';
import {Cpu,BadgeIndianRupee,Activity,Soup,PlaneTakeoff,LoaderPinwheel,Music,ChartPie,FlaskConicalOff,LeafyGreen,GraduationCap,Shirt,Bus,Swords} from 'lucide-react'
const FeaturedBrands = () => {
  const brands = [
    { name: 'Tech', emoji: <Cpu className='text-red-400' size={60}/> },
    { name: 'Finance', emoji: <BadgeIndianRupee className='text-blue-400' size={60} /> },
    { name: 'Health', emoji: <Activity className='text-green-400' size={60} /> },
    { name: 'Food', emoji: <Soup className='text-yellow-400' size={60} /> },
    { name: 'Travel', emoji: <PlaneTakeoff className='text-orange-400' size={60} /> },
    { name: 'Sports', emoji: <LoaderPinwheel className='text-blue-500' size={60}/> },
    { name: 'Music', emoji: <Music className='text-violet-500' size={60}/> },
    { name: 'Art', emoji: <ChartPie className='text-red-500' size={60}/> },
    { name: 'Science', emoji: <FlaskConicalOff className='text-gray-500' size={60}/> },
    { name: 'Green', emoji: <LeafyGreen className='text-green-500' size={60}/> },
    { name: 'Education', emoji: <GraduationCap className='text-gray-900' size={60}/> },
    { name: 'Fashion', emoji: <Shirt className='text-violet-600' size={60}/> },
    { name: 'Auto', emoji: <Bus className='text-yellow-600' size={60} /> },
    { name: 'Gaming', emoji: <Swords className='text-slate-600' size={60}/> },
  ];

  // Duplicate the brands to create a seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex animate-scroll">
        {allBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center mx-2 w-16">
            <div className="text-2xl mb-1">{brand.emoji}</div>
            <div className="text-xs font-bold truncate w-full text-center">{brand.name}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturedBrands;