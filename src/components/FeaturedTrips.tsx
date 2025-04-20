
import { useState } from "react";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TripProps {
  id: number;
  title: string;
  location: string;
  duration: number;
  price: number;
  image: string;
  rating: number;
  difficulty: string;
  url: string;
  type: "trek" | "tour";
}

const trips: TripProps[] = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    location: "Everest Region",
    duration: 14,
    price: 1400,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    rating: 4.9,
    difficulty: "Moderate",
    url: "/treks/everest-base-camp",
    type: "trek"
  },
  {
    id: 2,
    title: "Annapurna Circuit Trek",
    location: "Annapurna Region",
    duration: 18,
    price: 1600,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    rating: 4.8,
    difficulty: "Challenging",
    url: "/treks/annapurna-circuit",
    type: "trek"
  },
  {
    id: 3,
    title: "Langtang Valley Trek",
    location: "Langtang Region",
    duration: 10,
    price: 900,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    rating: 4.7,
    difficulty: "Moderate",
    url: "/treks/langtang",
    type: "trek"
  },
  {
    id: 4,
    title: "Manaslu Circuit Trek",
    location: "Manaslu Region",
    duration: 15,
    price: 1500,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    rating: 4.7,
    difficulty: "Difficult",
    url: "/treks/manaslu",
    type: "trek"
  },
  {
    id: 5,
    title: "Kathmandu Cultural Tour",
    location: "Kathmandu Valley",
    duration: 3,
    price: 400,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    rating: 4.6,
    difficulty: "Easy",
    url: "/tours/cultural",
    type: "tour"
  },
  {
    id: 6,
    title: "Everest Helicopter Tour",
    location: "Everest Region",
    duration: 1,
    price: 1200,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    rating: 4.9,
    difficulty: "Easy",
    url: "/tours/helicopter",
    type: "tour"
  }
];

const FeaturedTrips = () => {
  const [activeTab, setActiveTab] = useState<"trek" | "tour">("trek");
  
  const filteredTrips = trips.filter(trip => trip.type === activeTab);

  return (
    <section className="py-20 bg-snowWhite">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <h2 className="section-title">Featured Adventures</h2>
          <p className="section-subtitle">
            Discover our most popular treks and tours in the Himalayas, carefully curated for unforgettable experiences
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("trek")}
              className={`px-4 py-2 rounded-md ${
                activeTab === "trek"
                  ? "bg-skyBlue text-white"
                  : "text-mountainGray hover:bg-gray-200"
              } transition-colors`}
            >
              Trekking
            </button>
            <button
              onClick={() => setActiveTab("tour")}
              className={`px-4 py-2 rounded-md ${
                activeTab === "tour"
                  ? "bg-skyBlue text-white"
                  : "text-mountainGray hover:bg-gray-200"
              } transition-colors`}
            >
              Tours
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to={activeTab === "trek" ? "/treks" : "/tours"}
            className="inline-flex items-center gap-2 text-skyBlue hover:text-skyBlue/80 font-medium"
          >
            View all {activeTab === "trek" ? "treks" : "tours"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const TripCard = ({ trip }: { trip: TripProps }) => {
  return (
    <div className="trek-card group">
      <div className="relative overflow-hidden h-64">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="trek-card-overlay"></div>
        <div className="absolute top-4 right-4 bg-white py-1 px-2 rounded text-sm font-medium text-mountainGray">
          ${trip.price}
        </div>
      </div>
      
      <div className="p-5 bg-white">
        <h3 className="text-xl font-semibold text-mountainGray mb-2">
          {trip.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-forestGreen" />
            {trip.location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-forestGreen" />
            {trip.duration} days
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-sunsetOrange mr-1" />
            <span className="text-sm font-medium">{trip.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 80 + 20)} reviews)</span>
          </div>
          <span className="text-sm text-forestGreen font-medium">{trip.difficulty}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            to={trip.url}
            className="block w-full text-center py-2 bg-forestGreen hover:bg-forestGreen/90 text-white rounded transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrips;
