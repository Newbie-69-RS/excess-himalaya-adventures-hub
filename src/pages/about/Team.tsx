
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Shambhu Subedi",
    position: "Founder & CEO",
    bio: "With over 20 years of experience in the tourism industry, Shambhu founded Excess To Himalayas with a vision to provide authentic Himalayan experiences. His deep knowledge of Nepal's mountains, culture, and tourism landscape has been instrumental in shaping the company's growth and success.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      email: "shambhu@excesstohimalayas.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Mr. Dipak Sapkota",
    position: "Partnered Head",
    bio: "Dipak joined Excess To Himalayas as a partner in 2010, bringing extensive operational expertise to the team. He oversees the company's trek operations, logistics, and quality control, ensuring that every adventure meets our high standards of excellence and safety.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    social: {
      email: "dipak@excesstohimalayas.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 3,
    name: "Mr. Dinesh Sapkota",
    position: "Office Executive",
    bio: "As our Office Executive, Dinesh manages the day-to-day operations at our Kathmandu headquarters. His exceptional organizational skills and attention to detail ensure smooth customer service, efficient booking processes, and flawless administrative support for all our adventures.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    social: {
      email: "dinesh@excesstohimalayas.com",
      facebook: "https://facebook.com"
    }
  },
  {
    id: 4,
    name: "Mr. Dilli Parsad Lamsal",
    position: "Senior Guide",
    bio: "Dilli is our most experienced senior guide with over 15 years of trekking leadership. Having summited multiple Himalayan peaks and led countless treks through every major route in Nepal, his expertise, calm demeanor, and deep knowledge of mountain safety make him an invaluable leader on our most challenging expeditions.",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    social: {
      email: "dilli@excesstohimalayas.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: 5,
    name: "Mr. Rizan Subedi",
    position: "Media & IT Head",
    bio: "Rizan leads our digital presence and technological innovation. With expertise in digital marketing, web development, and content creation, he ensures that Excess To Himalayas stays at the forefront of digital tourism. His creative vision helps us share Nepal's beauty with the world.",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    social: {
      email: "rizanmk27@gmail.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Meet the Team | Excess To Himalayas";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <div className="section-header">
            <h1 className="section-title">Meet Our Team</h1>
            <p className="section-subtitle">
              Meet the passionate individuals who make your Himalayan adventures possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-mountainGray mb-6">Join Our Team</h2>
            <p className="text-gray-600 max-w-3xl">
              Passionate about the Himalayas and tourism? We're always looking for enthusiastic individuals to join our growing team. Send your resume to <a href="mailto:careers@excesstohimalayas.com" className="text-skyBlue hover:underline">careers@excesstohimalayas.com</a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-mountainGray">{member.name}</h3>
        <p className="text-forestGreen font-medium mb-4">{member.position}</p>
        
        <p className="text-gray-600 mb-4 line-clamp-4">
          {member.bio}
        </p>
        
        <div className="flex space-x-3 mt-4">
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="text-gray-500 hover:text-skyBlue transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          
          {member.social.facebook && (
            <a
              href={member.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-skyBlue transition-colors"
              aria-label={`${member.name}'s Facebook`}
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
          
          {member.social.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-skyBlue transition-colors"
              aria-label={`${member.name}'s Instagram`}
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-skyBlue transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
