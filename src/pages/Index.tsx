
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import ExcessNow from "@/components/ExcessNow";
import FeaturedTrips from "@/components/FeaturedTrips";
import Affiliations from "@/components/Affiliations";
import CollaborationSection from "@/components/CollaborationSection";
import Testimonials from "@/components/Testimonials";
import BlogTeaser from "@/components/BlogTeaser";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Excess To Himalayas - Submitting Dreams Since 2006";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroCarousel />
      <ExcessNow />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FeaturedTrips />
      </motion.div>
      
      <Affiliations />
      <CollaborationSection />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>
      
      <BlogTeaser />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
