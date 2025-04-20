
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Search, Filter, MapPin, Calendar, DollarSign, Award } from "lucide-react";

interface Trip {
  id: number;
  name: string;
  type: "trek" | "tour" | "heli";
  region: string;
  duration: number;
  price: number;
  difficulty: string;
  image: string;
  url: string;
  description: string;
}

const trips: Trip[] = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    type: "trek",
    region: "Everest",
    duration: 14,
    price: 1400,
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    url: "/treks/everest-base-camp",
    description: "Experience the iconic journey to the foot of the world's highest mountain."
  },
  {
    id: 2,
    name: "Annapurna Circuit Trek",
    type: "trek",
    region: "Annapurna",
    duration: 18,
    price: 1600,
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    url: "/treks/annapurna-circuit",
    description: "Complete the classic trek around the entire Annapurna massif."
  },
  {
    id: 3,
    name: "Langtang Valley Trek",
    type: "trek",
    region: "Langtang",
    duration: 10,
    price: 900,
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    url: "/treks/langtang",
    description: "Explore the beautiful Langtang Valley and its rich Tamang culture."
  },
  {
    id: 4,
    name: "Kathmandu Cultural Tour",
    type: "tour",
    region: "Kathmandu",
    duration: 3,
    price: 400,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    url: "/tours/cultural",
    description: "Discover the rich cultural heritage of Kathmandu Valley."
  },
  {
    id: 5,
    name: "Everest Helicopter Tour",
    type: "heli",
    region: "Everest",
    duration: 1,
    price: 1200,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    url: "/tours/helicopter",
    description: "Experience the majesty of Everest without the trek."
  },
  {
    id: 6,
    name: "Manaslu Circuit Trek",
    type: "trek",
    region: "Manaslu",
    duration: 15,
    price: 1500,
    difficulty: "Difficult",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    url: "/treks/manaslu",
    description: "Trek around the eighth highest mountain in the world."
  },
  {
    id: 7,
    name: "Upper Mustang Trek",
    type: "trek",
    region: "Mustang",
    duration: 16,
    price: 2200,
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    url: "/treks/upper-mustang",
    description: "Explore the 'Forbidden Kingdom' with its unique desert landscape."
  },
  {
    id: 8,
    name: "Chitwan Jungle Safari",
    type: "tour",
    region: "Chitwan",
    duration: 3,
    price: 350,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    url: "/tours/jungle-safari",
    description: "Encounter wildlife in Nepal's famous Chitwan National Park."
  }
];

const ExcessNowPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Excess Now | Excess To Himalayas";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <div className="section-header">
            <h1 className="section-title">Excess Now</h1>
            <p className="section-subtitle">
              Find your perfect Himalayan adventure based on your preferences
            </p>
          </div>
          
          <div className="mt-12">
            {/* Search and Filter Bar */}
            <div className="bg-mountainGray rounded-lg p-6 text-white mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search trips..."
                      className="w-full py-3 px-4 pr-10 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none transition-colors"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" />
                  </div>
                </div>
                
                <div>
                  <select className="w-full py-3 px-4 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none transition-colors appearance-none">
                    <option value="">All Regions</option>
                    <option value="everest">Everest Region</option>
                    <option value="annapurna">Annapurna Region</option>
                    <option value="langtang">Langtang Region</option>
                    <option value="manaslu">Manaslu Region</option>
                    <option value="mustang">Mustang Region</option>
                  </select>
                </div>
                
                <div>
                  <select className="w-full py-3 px-4 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none transition-colors appearance-none">
                    <option value="">All Trip Types</option>
                    <option value="trek">Trekking</option>
                    <option value="tour">Tours</option>
                    <option value="heli">Helicopter Tours</option>
                  </select>
                </div>
                
                <div>
                  <button className="w-full bg-forestGreen hover:bg-forestGreen/90 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center">
                    <Filter className="mr-2 h-5 w-5" />
                    Apply Filters
                  </button>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">Duration (Days)</label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1 text-xs">
                    <span>1 day</span>
                    <span>30 days</span>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Budget (USD)</label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1 text-xs">
                    <span>$0</span>
                    <span>$5,000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Difficulty</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Easy</button>
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Moderate</button>
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Challenging</button>
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Difficult</button>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Best Season</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Spring</button>
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Summer</button>
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Autumn</button>
                    <button className="bg-white/10 hover:bg-white/20 py-1 rounded text-xs transition-colors">Winter</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div>
              <h2 className="text-2xl font-semibold text-mountainGray mb-8">
                Found {trips.length} adventures matching your criteria
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trips.map(trip => (
                  <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img
                        src={trip.image}
                        alt={trip.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 m-3 px-2 py-1 bg-white rounded text-xs font-medium">
                        {trip.type === 'trek' ? 'Trekking' : trip.type === 'tour' ? 'Tour' : 'Heli Tour'}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex justify-between text-white">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{trip.region}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{trip.duration} days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-mountainGray mb-2">
                        {trip.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3">
                        {trip.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-forestGreen">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-semibold">${trip.price}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Award className="h-4 w-4 mr-1" />
                          <span className="text-sm">{trip.difficulty}</span>
                        </div>
                      </div>
                      
                      <a
                        href={trip.url}
                        className="block w-full text-center py-2 mt-4 bg-skyBlue hover:bg-skyBlue/90 text-white rounded transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Personalized Recommendations */}
            <div className="mt-20 bg-forestGreen/5 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-forestGreen mb-4">
                Need Personalized Recommendations?
              </h2>
              <p className="text-gray-600 mb-6">
                Our expert travel consultants can help you plan the perfect trip based on your preferences, fitness level, and travel style. Reach out for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/9779864535410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forestGreen hover:bg-forestGreen/90 text-white px-6 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Contact via WhatsApp
                </a>
                <a
                  href="/contact"
                  className="bg-skyBlue hover:bg-skyBlue/90 text-white px-6 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExcessNowPage;
