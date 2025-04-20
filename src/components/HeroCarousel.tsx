
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Discover Nepal's Majestic Peaks",
    subtitle: "Experience the adventure of a lifetime in the Himalayas"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    title: "Unforgettable Trekking Adventures",
    subtitle: "Trek through beautiful landscapes and diverse cultures"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Cultural Immersion Tours",
    subtitle: "Experience the rich cultural heritage of Nepal"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, isAutoPlaying]);
  
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden mt-16" 
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "hero-slide absolute inset-0 transition-opacity duration-1000",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#excess-now"
                className="btn bg-skyBlue hover:bg-skyBlue/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Plan Your Trip
              </a>
              <a
                href="/treks"
                className="btn bg-sunsetOrange hover:bg-sunsetOrange/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Treks
              </a>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === current ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
