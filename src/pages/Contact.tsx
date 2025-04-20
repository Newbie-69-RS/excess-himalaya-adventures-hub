
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Excess To Himalayas";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // or email service that forwards to rizanmk27@gmail.com
    alert("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <div className="section-header">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Reach out to us for inquiries, bookings, or any questions about our treks and tours
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-mountainGray mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-skyBlue hover:bg-skyBlue/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-mountainGray text-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-sunsetOrange mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="text-white/80">Thamel, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-sunsetOrange mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Phone Numbers</h3>
                      <p className="text-white/80">
                        <a href="https://wa.me/9779864535410" className="block hover:text-sunsetOrange transition-colors">
                          +977 9864535410
                        </a>
                        <a href="https://wa.me/9779849260607" className="block hover:text-sunsetOrange transition-colors">
                          +977 9849260607
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-sunsetOrange mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Email Address</h3>
                      <a 
                        href="mailto:excesstohimalayas@gmail.com" 
                        className="text-white/80 hover:text-sunsetOrange transition-colors"
                      >
                        excesstohimalayas@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-sunsetOrange mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Office Hours</h3>
                      <p className="text-white/80">
                        Sunday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 3:00 PM<br />
                        Nepal Time (GMT +5:45)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2684911385916!2d85.3087192!3d27.7158564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f7%3A0x9d5deed12909fb01!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1619726235545!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Excess To Himalayas Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-mountainGray text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-mountainGray mb-2">
                  How can I book a trek or tour?
                </h3>
                <p className="text-gray-600">
                  You can book through our website, via email, or by calling our office. We'll guide you through the booking process and answer any questions you might have.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-mountainGray mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept credit/debit cards, bank transfers, and local payment methods like eSewa and Khalti. Visit our Payment Portal for more details.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-mountainGray mb-2">
                  Do I need a visa to visit Nepal?
                </h3>
                <p className="text-gray-600">
                  Yes, most nationalities require a visa to enter Nepal. Visas can be obtained on arrival at Tribhuvan International Airport or at Nepalese diplomatic missions abroad.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-mountainGray mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-gray-600">
                  Our cancellation policy varies depending on the trek or tour. Generally, cancellations made 30+ days before departure receive a full refund minus processing fees.
                </p>
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

export default Contact;
