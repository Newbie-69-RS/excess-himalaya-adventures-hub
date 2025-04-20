
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  text: string;
  tripName: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "Our trek to Everest Base Camp with Excess To Himalayas was absolutely incredible! The guides were knowledgeable and attentive, making sure we were safe and comfortable throughout the journey. The breathtaking views of the Himalayas will stay with me forever.",
    tripName: "Everest Base Camp Trek"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    country: "Spain",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "The Annapurna Circuit exceeded all my expectations. Our guide Dilli was exceptional - sharing cultural insights and finding the best tea houses. Excess To Himalayas provided top-notch service from booking to completion. Highly recommend!",
    tripName: "Annapurna Circuit Trek"
  },
  {
    id: 3,
    name: "Emma Liu",
    country: "Australia",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The helicopter tour to Everest was the highlight of our Nepal trip! Amazing views without the physical demands of trekking. Excess To Himalayas organized everything perfectly, and we even got a special discount with their promo code.",
    tripName: "Everest Helicopter Tour"
  },
  {
    id: 4,
    name: "David Müller",
    country: "Germany",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    text: "Langtang Valley trek was a perfect mix of challenge and beauty. Less crowded than Everest or Annapurna, but equally stunning. Our guide was extremely knowledgeable about the local Tamang culture. Great experience with Excess To Himalayas!",
    tripName: "Langtang Valley Trek"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">
            Read genuine reviews from our clients who have experienced the beauty of Nepal with us
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.country}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-4 w-4", 
                                i < testimonial.rating ? "text-sunsetOrange fill-sunsetOrange" : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    
                    <div className="text-forestGreen font-medium">
                      {testimonial.tripName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-mountainGray hover:bg-forestGreen hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-mountainGray hover:bg-forestGreen hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === currentIndex ? "bg-forestGreen" : "bg-gray-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
