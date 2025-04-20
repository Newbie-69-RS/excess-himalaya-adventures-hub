
import { motion } from "framer-motion";

const CollaborationSection = () => {
  return (
    <section className="py-20 bg-mountainGray text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://placehold.co/150x60?text=Excess+To+Himalayas"
                alt="Excess To Himalayas"
                className="h-10"
              />
              <span className="text-2xl">X</span>
              <img
                src="https://placehold.co/150x60?text=Adventure+White+Mountain"
                alt="Adventure White Mountain"
                className="h-10"
              />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everest Helicopter Tour
            </h2>
            
            <p className="text-gray-300 mb-6">
              Experience the majesty of Mount Everest like never before with our exclusive helicopter tour.
              This collaboration between Excess To Himalayas and Adventure White Mountain offers you an
              unforgettable journey to the world's highest peak without the trek.
            </p>
            
            <div className="bg-forestGreen/20 p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold mb-2">Special Offer</p>
              <p className="text-white/90">Save up to $200 using promo code:</p>
              <div className="bg-sunsetOrange py-2 px-4 rounded mt-2 inline-block font-mono font-bold">
                Excess2
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.adventurewhitemountain.com/everest-base-camp-helicopter-tour"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sunsetOrange hover:bg-sunsetOrange/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Book Now
              </a>
              <a
                href="/tours/helicopter"
                className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Everest Helicopter Tour"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mountainGray/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-gray-300 mb-2">Starting from</p>
                <p className="text-3xl font-bold">$1,099</p>
                <p className="text-sm text-gray-300 mt-1">Per person</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
