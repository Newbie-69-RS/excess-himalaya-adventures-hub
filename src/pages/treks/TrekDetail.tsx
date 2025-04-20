
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, XCircle, Calendar, Clock, Users, Mountain, Star, Bookmark, MapPin, CameraOff, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Trek data - in a real app, this would come from your database
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    subtitle: "Trek to the base of the world's highest mountain",
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    duration: 14,
    difficulty: "Moderate to Challenging",
    bestSeason: "March-May, September-November",
    maxAltitude: "5,364m (Everest Base Camp)",
    accommodation: "Teahouse/Lodge",
    startLocation: "Lukla",
    endLocation: "Lukla",
    price: 1499,
    overview: "The Everest Base Camp Trek is one of the most popular and iconic treks in Nepal, taking you through stunning mountain scenery, charming Sherpa villages, and ultimately to the base camp of Mount Everest, the highest mountain in the world. Along the way, you'll experience the unique Sherpa culture, visit ancient monasteries, and witness breathtaking panoramic views of the Himalayan peaks.",
    highlights: [
      "Stand at the base of Mount Everest, the world's highest peak",
      "Visit the famous Tengboche Monastery",
      "Explore the vibrant Sherpa culture and villages",
      "Witness spectacular sunrise views from Kala Patthar",
      "Trek through the stunning Khumbu region",
      "Experience the thrill of flying into Lukla, one of the world's most exciting airports"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu (1,400m)", description: "Upon arrival at Tribhuvan International Airport, you will be met by our representative and transferred to your hotel. In the evening, you'll have a welcome dinner and a briefing about the trek." },
      { day: 2, title: "Kathmandu to Lukla (2,840m) to Phakding (2,610m)", description: "Early morning flight to Lukla, the gateway to the Everest region. After arrival, we begin our trek to Phakding, which takes approximately 3-4 hours." },
      { day: 3, title: "Phakding to Namche Bazaar (3,440m)", description: "Trek through pine forests along the Dudh Koshi River, crossing several suspension bridges, including the famous Hillary Suspension Bridge. The trail climbs steeply to Namche Bazaar, the commercial hub of the Khumbu region. Trekking time: 5-6 hours." },
      { day: 4, title: "Acclimatization Day in Namche Bazaar", description: "To adjust to the altitude, we spend an extra day in Namche. We'll take a hike to Everest View Hotel for panoramic views of Everest, Lhotse, and Ama Dablam. We'll also visit the Sherpa Culture Museum and the local market." },
      { day: 5, title: "Namche Bazaar to Tengboche (3,860m)", description: "The trail follows the Dudh Koshi River and climbs steadily through rhododendron forests. We'll reach Tengboche, home to the famous Tengboche Monastery, the largest monastery in the Khumbu region. Trekking time: 5-6 hours." },
      { day: 6, title: "Tengboche to Dingboche (4,410m)", description: "Trek through beautiful rhododendron forests and cross the Imja River before ascending to Dingboche. Trekking time: 5-6 hours." },
      { day: 7, title: "Acclimatization Day in Dingboche", description: "Another important acclimatization day. We'll take a hike to Nangkartshang Peak for magnificent views of Makalu, Lhotse, and other peaks." },
      { day: 8, title: "Dingboche to Lobuche (4,940m)", description: "Trek along the lateral moraine of the Khumbu Glacier, passing memorials for climbers who perished on Mount Everest. The trail then climbs steeply to Lobuche. Trekking time: 5-6 hours." },
      { day: 9, title: "Lobuche to Gorak Shep (5,170m) to Everest Base Camp (5,364m) and back to Gorak Shep", description: "An early morning start for the challenging trek to Gorak Shep. After a short rest, we continue to Everest Base Camp, where we'll see the Khumbu Icefall and impressive views of Nuptse, Khumbuste, and Pumori. We return to Gorak Shep for the night. Trekking time: 7-8 hours." },
      { day: 10, title: "Gorak Shep to Kala Patthar (5,545m) to Pheriche (4,280m)", description: "Early morning hike to Kala Patthar for sunrise views of Mount Everest and other Himalayan peaks. We then descend to Pheriche. Trekking time: 7-8 hours." },
      { day: 11, title: "Pheriche to Namche Bazaar (3,440m)", description: "A relatively easy downhill trek through rhododendron and pine forests to Namche Bazaar. Trekking time: 6-7 hours." },
      { day: 12, title: "Namche Bazaar to Lukla (2,840m)", description: "Our final day of trekking takes us back to Lukla, where we'll celebrate with our trekking crew. Trekking time: 6-7 hours." },
      { day: 13, title: "Lukla to Kathmandu", description: "Morning flight back to Kathmandu. Free time for shopping or exploration." },
      { day: 14, title: "Departure Day", description: "Transfer to the airport for your final departure." }
    ],
    included: [
      "Airport transfers in Kathmandu",
      "3 nights' accommodation in Kathmandu with breakfast",
      "Kathmandu to Lukla round-trip domestic flights",
      "Teahouse accommodation during the trek",
      "All meals during the trek (breakfast, lunch, and dinner)",
      "Experienced English-speaking trekking guide",
      "Porter service (1 porter for 2 trekkers)",
      "All necessary trekking permits and fees",
      "First aid kit and oxygen cylinder for emergency use",
      "All government and local taxes"
    ],
    excluded: [
      "International flights to/from Nepal",
      "Nepal visa fees",
      "Travel insurance (mandatory)",
      "Lunch and dinner in Kathmandu",
      "Personal trekking gear",
      "Tips for guides and porters",
      "Personal expenses (phone calls, laundry, bar bills, etc.)",
      "Any additional expenses caused by reasons beyond our control (e.g., flight delays, natural disasters, etc.)"
    ],
    equipment: [
      "Durable hiking boots",
      "Down jacket and thermal layers",
      "Waterproof jacket and pants",
      "Fleece jacket and thermal underwear",
      "Hiking pants and shorts",
      "T-shirts and long-sleeve shirts",
      "Warm hat, sun hat, and gloves",
      "Hiking socks and regular socks",
      "Backpack and daypack",
      "Sleeping bag rated for -20°C",
      "Water bottles and water purification tablets",
      "Headlamp with extra batteries",
      "Sunglasses, sunscreen, and lip balm",
      "Personal first aid kit and medications",
      "Trekking poles",
      "Camera with extra batteries",
      "Toiletries and quick-dry towel"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    ],
    reviews: [
      { name: "John Smith", rating: 5, country: "USA", comment: "Absolutely incredible experience! The views were breathtaking, and our guide was extremely knowledgeable and professional." },
      { name: "Emily Johnson", rating: 4, country: "UK", comment: "A challenging but rewarding trek. The teahouses were better than I expected, and the support from the team was excellent." },
      { name: "Hiroshi Tanaka", rating: 5, country: "Japan", comment: "Standing at Everest Base Camp was a dream come true. Excess To Himalayas provided exceptional service throughout the journey." }
    ],
    faqs: [
      { question: "How difficult is the Everest Base Camp Trek?", answer: "The Everest Base Camp Trek is considered moderate to challenging. It involves walking 5-7 hours per day on steep and rocky terrain at high altitudes. Good physical fitness is required, but no technical climbing skills are needed." },
      { question: "Do I need prior trekking experience?", answer: "While prior trekking experience is beneficial, it's not mandatory. However, good physical fitness and regular exercise before the trek are essential. We recommend training with activities like hiking, jogging, or stair climbing for at least 2-3 months before the trek." },
      { question: "What is the best time to trek to Everest Base Camp?", answer: "The best seasons are pre-monsoon (March to May) and post-monsoon (September to November). During these periods, the weather is relatively stable with clear skies, offering excellent mountain views. Winter (December to February) is also possible but can be extremely cold, and summer (June to August) brings monsoon rains, making trails slippery and views often obscured by clouds." },
      { question: "What type of accommodation is available during the trek?", answer: "The trek features teahouse accommodation, which are simple lodges run by local families. Rooms are basic, typically with twin beds and shared bathrooms. As you ascend higher, facilities become more limited. Teahouses provide warm dining areas where meals are served and trekkers can socialize." }
    ]
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    subtitle: "Journey around the entire Annapurna massif",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    duration: 18,
    difficulty: "Moderate to Challenging",
    bestSeason: "March-May, September-November",
    maxAltitude: "5,416m (Thorong La Pass)",
    accommodation: "Teahouse/Lodge",
    startLocation: "Besisahar",
    endLocation: "Pokhara",
    price: 1699,
    overview: "The Annapurna Circuit is considered one of the most diverse and spectacular trekking routes in the world. This classic trek circles the entire Annapurna massif, crossing through different climatic zones, from subtropical to alpine to arid high-altitude desert. Along the way, you'll experience the rich cultural diversity of Nepal, from Hindu villages in the lower regions to Tibetan Buddhist communities in the higher elevations.",
    highlights: [
      "Cross the challenging Thorong La Pass at 5,416m",
      "Visit the sacred pilgrimage site of Muktinath",
      "Witness the dramatic landscapes of the Manang and Mustang regions",
      "Experience both Hindu and Tibetan Buddhist cultures",
      "Enjoy spectacular views of the Annapurna and Dhaulagiri ranges",
      "Relax in the natural hot springs at Tatopani"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu (1,400m)", description: "Upon arrival at Tribhuvan International Airport, you will be met by our representative and transferred to your hotel. In the evening, you'll have a welcome dinner and a briefing about the trek." },
      { day: 2, title: "Drive from Kathmandu to Besisahar (760m)", description: "After breakfast, we drive to Besisahar, the starting point of the Annapurna Circuit. The journey takes approximately 6-7 hours through scenic countryside. Overnight in Besisahar." },
      { day: 3, title: "Trek from Besisahar to Bahundanda (1,310m)", description: "The trek begins with a gentle climb along the Marsyangdi River, passing through rice fields and villages. Trekking time: 5-6 hours." },
      // Rest of the itinerary would be detailed similarly
    ],
    // The rest of the details would be similar to the Everest Base Camp trek
  }
];

const TrekDetail = () => {
  const { trekId } = useParams();
  const navigate = useNavigate();
  const [trek, setTrek] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the trek by ID
    const foundTrek = treks.find(t => t.id === trekId);
    
    if (foundTrek) {
      setTrek(foundTrek);
      document.title = `${foundTrek.title} | Excess To Himalayas`;
    } else {
      navigate('/not-found');
    }
    
    setLoading(false);
  }, [trekId, navigate]);

  const handleBookNow = () => {
    // Navigate to the payment page with trek details
    navigate('/book-now', { 
      state: { 
        trekId: trek.id,
        trekName: trek.title,
        trekPrice: trek.price
      } 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-skyBlue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!trek) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="pt-24 relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${trek.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{trek.title}</h1>
              <p className="text-xl text-white/90 mb-6">{trek.subtitle}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-sunsetOrange" />
                  <span className="text-white text-sm">{trek.duration} Days</span>
                </div>
                
                <div className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Mountain className="h-4 w-4 mr-1 text-sunsetOrange" />
                  <span className="text-white text-sm">{trek.difficulty}</span>
                </div>
                
                <div className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-sunsetOrange" />
                  <span className="text-white text-sm">Max: {trek.maxAltitude}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleBookNow}
                className="bg-sunsetOrange hover:bg-sunsetOrange/90 text-white py-2 px-6 rounded-full"
              >
                Book Now - From ${trek.price}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trek Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="includes">Includes</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <h2 className="text-2xl font-semibold text-mountainGray mb-4">Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{trek.overview}</p>
                
                <h3 className="text-xl font-semibold text-mountainGray mb-3">Highlights</h3>
                <ul className="space-y-2 mb-6">
                  {trek.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-forestGreen mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="itinerary" className="mt-6">
                <h2 className="text-2xl font-semibold text-mountainGray mb-6">Trip Itinerary</h2>
                
                <div className="space-y-6">
                  {trek.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border-l-2 border-skyBlue pl-4 py-1">
                      <h3 className="text-lg font-semibold text-mountainGray">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="includes" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-mountainGray mb-4">What's Included</h2>
                    <ul className="space-y-2">
                      {trek.included.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-forestGreen mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold text-mountainGray mb-4">What's Not Included</h2>
                    <ul className="space-y-2">
                      {trek.excluded.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="equipment" className="mt-6">
                <h2 className="text-2xl font-semibold text-mountainGray mb-6">Essential Equipment</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Here's a checklist of essential equipment for your {trek.title}. You can rent or purchase most of these items in Kathmandu.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trek.equipment.map((item: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-forestGreen mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="gallery" className="mt-6">
                <h2 className="text-2xl font-semibold text-mountainGray mb-6">Trek Gallery</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {trek.gallery.length > 0 ? (
                    trek.gallery.map((image: string, index: number) => (
                      <div 
                        key={index} 
                        className={`cursor-pointer overflow-hidden rounded-lg ${activeImage === index ? 'ring-2 ring-skyBlue' : ''}`}
                        onClick={() => setActiveImage(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${trek.title} - Image ${index + 1}`} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8">
                      <CameraOff className="w-12 h-12 text-gray-400 mb-2" />
                      <p className="text-gray-500">No gallery images available</p>
                    </div>
                  )}
                </div>
                
                {trek.gallery.length > 0 && (
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={trek.gallery[activeImage]} 
                      alt={`${trek.title} - Featured Image`} 
                      className="w-full h-96 object-cover"
                    />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-mountainGray">Traveler Reviews</h2>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={cn(
                            "h-5 w-5", 
                            star <= 4.5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          )} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">4.5 out of 5</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {trek.reviews.map((review: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-mountainGray">{review.name}</h3>
                          <p className="text-sm text-gray-500">{review.country}</p>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={cn(
                                "h-4 w-4", 
                                star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              )} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Quick Info & Booking */}
          <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden sticky top-28">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mountainGray mb-4">Trip Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{trek.duration} Days</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{trek.difficulty}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Season:</span>
                    <span className="font-medium">{trek.bestSeason}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Altitude:</span>
                    <span className="font-medium">{trek.maxAltitude}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accommodation:</span>
                    <span className="font-medium">{trek.accommodation}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start/End Point:</span>
                    <span className="font-medium">{trek.startLocation}/{trek.endLocation}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-2xl font-bold text-skyBlue">${trek.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">per person (min. 2 trekkers)</p>
                </div>
                
                <Button 
                  onClick={handleBookNow} 
                  className="w-full bg-sunsetOrange hover:bg-sunsetOrange/90 text-white py-3 rounded-lg"
                >
                  Book This Trip
                </Button>
                
                <div className="mt-4 text-center">
                  <a 
                    href="https://wa.me/9779864535410" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forestGreen hover:text-forestGreen/80 text-sm inline-flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Have questions? Contact us
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h4 className="font-medium text-mountainGray mb-2">Frequently Asked Questions</h4>
                
                <div className="space-y-3">
                  {trek.faqs.slice(0, 2).map((faq: any, index: number) => (
                    <div key={index}>
                      <h5 className="text-sm font-medium text-mountainGray">{faq.question}</h5>
                      <p className="text-xs text-gray-600 mt-1">{faq.answer.substring(0, 100)}...</p>
                    </div>
                  ))}
                </div>
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

export default TrekDetail;
