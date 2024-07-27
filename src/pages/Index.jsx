import React from 'react';
import { Landmark, Utensils, Camera, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Discover China</h1>
          <p className="text-xl">A Journey Through Ancient Wonders and Modern Marvels</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to China</h2>
          <p className="text-lg">
            China, the world's most populous country, boasts a rich history spanning thousands of years. 
            From the Great Wall to the Forbidden City, ancient traditions to cutting-edge technology, 
            China offers a unique blend of the old and the new.
          </p>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <HighlightCard 
            icon={<Landmark className="w-12 h-12 text-red-600" />}
            title="Rich History"
            description="Explore ancient dynasties and archaeological wonders."
          />
          <HighlightCard 
            icon={<Utensils className="w-12 h-12 text-red-600" />}
            title="Culinary Delights"
            description="Savor diverse and delicious Chinese cuisine."
          />
          <HighlightCard 
            icon={<Camera className="w-12 h-12 text-red-600" />}
            title="Scenic Beauty"
            description="Witness breathtaking landscapes and natural wonders."
          />
          <HighlightCard 
            icon={<MapPin className="w-12 h-12 text-red-600" />}
            title="Modern Metropolises"
            description="Experience the energy of rapidly growing cities."
          />
        </section>

        {/* Featured Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AttractionCard 
              title="The Great Wall"
              description="An iconic symbol of China's strength and ingenuity."
              imageClass="h-64 bg-[url('https://placekitten.com/800/600')]"
            />
            <AttractionCard 
              title="Forbidden City"
              description="The imperial palace complex at the heart of Beijing."
              imageClass="h-64 bg-[url('https://placekitten.com/801/600')]"
            />
            <AttractionCard 
              title="Terracotta Army"
              description="Thousands of life-sized warriors guarding an emperor's tomb."
              imageClass="h-64 bg-[url('https://placekitten.com/802/600')]"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Plan Your Chinese Adventure</h2>
          <p className="text-lg mb-6">
            Embark on a journey to discover the wonders of China. From ancient treasures to modern marvels, 
            unforgettable experiences await you in this vast and diverse country.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
            Start Planning Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Discover China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const HighlightCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const AttractionCard = ({ title, description, imageClass }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className={`${imageClass} bg-cover bg-center`}></div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Index;
