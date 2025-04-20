
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Story | Excess To Himalayas";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-10">
        <div className="w-full h-64 md:h-80 bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Himalayan mountains"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-mountainGray mb-6">Our Story</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Founded in 2006, Excess To Himalayas began with a simple yet profound mission: to share the beauty and majesty of Nepal's Himalayan wonders with travelers from around the world. Our journey started with a small team of passionate trekking enthusiasts led by Mr. Shambhu Subedi, who believed that the transformative experience of the Himalayas should be accessible to everyone.
            </p>
            
            <p>
              The name "Excess To Himalayas" emerged from our founder's vision of providing not just access, but an excess of extraordinary experiences in the Himalayan region. We are committed to exceeding expectations with every adventure, creating moments that transcend the ordinary.
            </p>
            
            <p>
              Over the years, we've grown from a small local operation to a trusted name in Nepal's tourism industry. We've guided thousands of trekkers and tourists through the breathtaking landscapes of the Everest region, Annapurna Circuit, Langtang Valley, and many more iconic destinations. Each step of the way, we've maintained our core values of safety, authenticity, environmental responsibility, and exceptional service.
            </p>
            
            <p>
              What sets us apart is our deep connection to the mountains and communities we serve. Our team consists of experienced local guides and support staff who share not just their knowledge of trails and peaks, but also insights into the rich cultural tapestry of Nepal. We believe that true adventure includes cultural immersion and meaningful exchanges with local communities.
            </p>
            
            <p>
              Today, Excess To Himalayas continues to evolve, embracing innovation while honoring tradition. We've expanded our offerings to include helicopter tours, cultural experiences, jungle safaris, and customized adventures, but our commitment to personalized service remains unchanged. Every trip is crafted with care, attention to detail, and a genuine desire to create lifelong memories.
            </p>
            
            <p>
              As we look toward the future, we remain dedicated to our slogan "Submitting Dreams Since 2006." More than just reaching physical summits, we're in the business of helping our clients achieve their dreams of adventure, discovery, and connection in the magnificent Himalayas.
            </p>
            
            <p>
              We invite you to join our extended family of adventurers and experience the Excess To Himalayas difference. Your journey awaits.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutStory;
