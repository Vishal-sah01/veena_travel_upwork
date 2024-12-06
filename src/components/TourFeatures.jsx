import React from 'react';
import { Building2, Utensils, Bus, Flag, Bike, Plane } from 'lucide-react';

const tourFeatures = [
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    title: "Accommodation",
    description: "Comfortable & convenient hotels cherry picked by our hotel management team"
  },
  {
    icon: <Utensils className="w-8 h-8 text-blue-600" />,
    title: "All meals",
    description: "Eat to your heart's content Breakfast, Lunch, Dinner."
  },
  {
    icon: <Bus className="w-8 h-8 text-blue-600" />,
    title: "On-tour transport",
    description: "Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free"
  },
  {
    icon: <Flag className="w-8 h-8 text-blue-600" />,
    title: "Tour managers",
    description: "We have an exclusive team of 350 tour managers specialising in India and World tours"
  },
  {
    icon: <Bike className="w-8 h-8 text-blue-600" />,
    title: "Best value itinerary",
    description: "Our dedicated product & destination research team spends hours curating the best value for money itineraries"
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    title: "To and fro airfare",
    description: "Veena World tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option"
  }
];

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-md font-light text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function TourFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-light text-gray-900">
          All inclusive tours, <span className="relative inline-block pb-2">
            Chalo Bag Bharo Nikal Pado!
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600"></span>
          </span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {tourFeatures.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}