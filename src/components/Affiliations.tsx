
import { motion } from "framer-motion";

const Affiliations = () => {
  const affiliations = [
    {
      id: 1,
      name: "Nepal Tourism Board",
      logo: "https://placehold.co/200x100?text=NTB",
    },
    {
      id: 2,
      name: "Nepal Mountaineering Association",
      logo: "https://placehold.co/200x100?text=NMA",
    },
    {
      id: 3,
      name: "TripAdvisor",
      logo: "https://placehold.co/200x100?text=TripAdvisor",
    },
    {
      id: 4,
      name: "Booking.com",
      logo: "https://placehold.co/200x100?text=Booking.com",
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-mountainGray mb-10">
          Our Trusted Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {affiliations.map((affiliation) => (
            <motion.div
              key={affiliation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={affiliation.logo}
                alt={affiliation.name}
                className="max-h-16 max-w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
