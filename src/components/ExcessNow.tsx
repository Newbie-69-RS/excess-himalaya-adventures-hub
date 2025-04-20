
import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";

type TripType = "trek" | "tour" | "heli";
type Region = "everest" | "annapurna" | "langtang" | "manaslu" | "mustang" | "all";

interface FilterOptions {
  budget: [number, number];
  duration: [number, number];
  region: Region;
  type: TripType | "all";
}

interface Trip {
  id: number;
  name: string;
  type: TripType;
  region: Region;
  duration: number;
  price: number;
  image: string;
  difficulty: "easy" | "moderate" | "challenging" | "difficult";
  url: string;
}

// Sample trips data
const tripsData: Trip[] = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    type: "trek",
    region: "everest",
    duration: 14,
    price: 1400,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    difficulty: "moderate",
    url: "/treks/everest-base-camp"
  },
  {
    id: 2,
    name: "Annapurna Circuit",
    type: "trek",
    region: "annapurna",
    duration: 18,
    price: 1600,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    difficulty: "challenging",
    url: "/treks/annapurna-circuit"
  },
  {
    id: 3,
    name: "Langtang Valley Trek",
    type: "trek",
    region: "langtang",
    duration: 10,
    price: 900,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    difficulty: "moderate",
    url: "/treks/langtang"
  },
  {
    id: 4,
    name: "Kathmandu Cultural Tour",
    type: "tour",
    region: "all",
    duration: 3,
    price: 400,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    difficulty: "easy",
    url: "/tours/cultural"
  },
  {
    id: 5,
    name: "Everest Helicopter Tour",
    type: "heli",
    region: "everest",
    duration: 1,
    price: 1200,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    difficulty: "easy",
    url: "/tours/helicopter"
  },
  {
    id: 6,
    name: "Manaslu Circuit Trek",
    type: "trek",
    region: "manaslu",
    duration: 15,
    price: 1500,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    difficulty: "difficult",
    url: "/treks/manaslu"
  },
  {
    id: 7,
    name: "Upper Mustang Trek",
    type: "trek",
    region: "mustang",
    duration: 16,
    price: 2200,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    difficulty: "challenging",
    url: "/treks/upper-mustang"
  },
  {
    id: 8,
    name: "Chitwan Jungle Safari",
    type: "tour",
    region: "all",
    duration: 3,
    price: 350,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    difficulty: "easy",
    url: "/tours/jungle-safari"
  }
];

const ExcessNow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    budget: [0, 5000],
    duration: [1, 30],
    region: "all",
    type: "all"
  });
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);

  useEffect(() => {
    // Apply filters and search
    let results = tripsData;
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(trip => 
        trip.name.toLowerCase().includes(term) ||
        trip.region.toLowerCase().includes(term)
      );
    }
    
    // Apply filters
    results = results.filter(trip => {
      const matchesType = filters.type === "all" || trip.type === filters.type;
      const matchesRegion = filters.region === "all" || trip.region === filters.region;
      const matchesBudget = trip.price >= filters.budget[0] && trip.price <= filters.budget[1];
      const matchesDuration = trip.duration >= filters.duration[0] && trip.duration <= filters.duration[1];
      
      return matchesType && matchesRegion && matchesBudget && matchesDuration;
    });
    
    setFilteredTrips(results);
  }, [searchTerm, filters]);

  const toggleExcessNow = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (filterKey: keyof FilterOptions, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  return (
    <section id="excess-now" className="bg-mountainGray text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Search className="mr-2 h-5 w-5 text-sunsetOrange" />
            <h2 className="text-xl font-semibold">Excess Now</h2>
            <span className="ml-2 text-sm text-gray-300">Find your perfect adventure</span>
          </div>
          
          <div className="flex items-center w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search trips..."
                className="w-full py-2 px-4 pr-10 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-300" />
            </div>
            
            <button
              onClick={toggleExcessNow}
              className="ml-2 bg-skyBlue hover:bg-skyBlue/90 text-white px-4 py-2 rounded-md flex items-center transition-colors"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="mt-6 p-6 bg-white/10 rounded-lg animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Budget Filter */}
              <div>
                <label className="block mb-2 text-sm font-medium">Budget (USD)</label>
                <div className="flex justify-between mb-1">
                  <span className="text-xs">${filters.budget[0]}</span>
                  <span className="text-xs">${filters.budget[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.budget[1]}
                  onChange={(e) => handleFilterChange('budget', [filters.budget[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              {/* Duration Filter */}
              <div>
                <label className="block mb-2 text-sm font-medium">Duration (Days)</label>
                <div className="flex justify-between mb-1">
                  <span className="text-xs">{filters.duration[0]} days</span>
                  <span className="text-xs">{filters.duration[1]} days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={filters.duration[1]}
                  onChange={(e) => handleFilterChange('duration', [filters.duration[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              {/* Region Filter */}
              <div>
                <label className="block mb-2 text-sm font-medium">Region</label>
                <select
                  value={filters.region}
                  onChange={(e) => handleFilterChange('region', e.target.value)}
                  className="w-full p-2 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none transition-colors"
                >
                  <option value="all">All Regions</option>
                  <option value="everest">Everest Region</option>
                  <option value="annapurna">Annapurna Region</option>
                  <option value="langtang">Langtang Region</option>
                  <option value="manaslu">Manaslu Region</option>
                  <option value="mustang">Mustang Region</option>
                </select>
              </div>
              
              {/* Trip Type Filter */}
              <div>
                <label className="block mb-2 text-sm font-medium">Trip Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full p-2 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none transition-colors"
                >
                  <option value="all">All Types</option>
                  <option value="trek">Trekking</option>
                  <option value="tour">Cultural Tour</option>
                  <option value="heli">Helicopter Tour</option>
                </select>
              </div>
            </div>
            
            {/* Results */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Found {filteredTrips.length} trips matching your criteria</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredTrips.map(trip => (
                  <a
                    key={trip.id}
                    href={trip.url}
                    className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors"
                  >
                    <div className="h-36 overflow-hidden">
                      <img src={trip.image} alt={trip.name} className="w-full h-full object-cover transition-transform hover:scale-110 duration-300" />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sunsetOrange truncate">{trip.name}</h4>
                      <div className="mt-2 flex justify-between text-sm">
                        <span>${trip.price}</span>
                        <span>{trip.duration} days</span>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-300">
                        <span className="capitalize">{trip.region}</span>
                        <span className="capitalize">{trip.difficulty}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {filteredTrips.length === 0 && (
                <div className="text-center py-8">
                  <p>No trips match your current filters. Try adjusting your criteria.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExcessNow;
