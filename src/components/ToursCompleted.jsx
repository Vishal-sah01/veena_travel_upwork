'use client';

import React from 'react';
import { Heart, Trophy, Award, MapPin, Rocket } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <Icon className="w-8 h-8 text-yellow-400" />
    <div className="text-center">
      <h3 className="text-4xl font-bold text-white">{value}</h3>
      <p className="text-gray-300 text-sm">{label}</p>
    </div>
  </div>
);

const Header = () => {
  const phrases = [
    "transform wanderlust into memories",
    "turn dreams into adventures",
    "make every journey unforgettable",
    "inspire the explorer in you",
    "create stories worth sharing",
    "take you beyond the ordinary",
    "bring your travel dreams alive"
  ];

  const [currentPhrase, setCurrentPhrase] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-12">
      <p className="text-gray-300 mb-2">We're curating experiences that</p>
      <h2 className="text-4xl font-bold text-yellow-400">
        {phrases[currentPhrase]}
      </h2>
    </div>
  );
};

const LakshyaCard = () => (
  <div className="flex flex-col items-center space-y-2">
    <Rocket className="w-8 h-8 text-yellow-400" />
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white">Our Lakshya</h3>
      <p className="text-gray-300 text-sm">
        Bharat Ki Sabse Behtareen Travel Company
      </p>
    </div>
  </div>
);

const ToursCompleted = () => {
  const stats = [
    { icon: Heart, value: '7,88,313', label: 'Happy guests' },
    { icon: Trophy, value: '59,295', label: 'Tours completed' },
    { icon: Award, value: '325+', label: 'Tour Experts' },
    { icon: MapPin, value: '2500+', label: 'Tour destinations' }
  ];

  return (
    <div className="bg-[#1F2937] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
          <LakshyaCard />
        </div>
      </div>
    </div>
  );
};

export default ToursCompleted;