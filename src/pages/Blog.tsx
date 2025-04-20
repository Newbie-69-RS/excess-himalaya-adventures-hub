import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  url: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Complete Guide to Everest Base Camp Trek",
    excerpt: "Everything you need to know before embarking on the iconic journey to the foot of the world's highest mountain.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    date: "May 15, 2023",
    author: "Rizan Subedi",
    category: "Trekking",
    url: "/blog/everest-base-camp-guide",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Top 5 Cultural Experiences in Nepal",
    excerpt: "Discover the rich cultural heritage of Nepal beyond its mountains and trekking routes.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    date: "April 28, 2023",
    author: "Shambhu Subedi",
    category: "Culture",
    url: "/blog/nepal-cultural-experiences",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Monsoon Trekking in Nepal: Pros and Cons",
    excerpt: "Is it worth trekking during the monsoon season? We explore the advantages and challenges of off-season adventures.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    date: "June 10, 2023",
    author: "Dipak Sapkota",
    category: "Tips",
    url: "/blog/monsoon-trekking",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Essential Gear for High Altitude Trekking",
    excerpt: "A comprehensive packing list for trekking in the Himalayas to ensure comfort and safety at high altitudes.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    date: "July 5, 2023",
    author: "Dilli Parsad Lamsal",
    category: "Gear",
    url: "/blog/essential-trekking-gear",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Understanding Acute Mountain Sickness (AMS)",
    excerpt: "Learn about the symptoms, prevention, and treatment of AMS to stay safe during high altitude treks in Nepal.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    date: "August 12, 2023",
    author: "Rizan Subedi",
    category: "Health",
    url: "/blog/acute-mountain-sickness",
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "Nepal's Best Tea Houses: Where to Stay on Popular Treks",
    excerpt: "A guide to the most comfortable and authentic tea houses along the major trekking routes in Nepal.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    date: "September 8, 2023",
    author: "Dinesh Sapkota",
    category: "Accommodation",
    url: "/blog/nepal-tea-houses",
    readTime: "2 min read"
  },
  {
    id: 7,
    title: "Sacred Peaks: Religious Significance of Mountains in Nepal",
    excerpt: "Explore the spiritual importance of Nepal's mountains and their role in local beliefs and traditions.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1585227108833-0e0ec00e5c43",
    date: "October 15, 2023",
    author: "Shambhu Subedi",
    category: "Culture",
    url: "/blog/sacred-mountains-nepal",
    readTime: "8 min read"
  },
  {
    id: 8,
    title: "Sustainable Trekking: How to Minimize Your Environmental Impact",
    excerpt: "Learn practical tips for eco-friendly trekking and contributing to mountain conservation.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227",
    date: "November 2, 2023",
    author: "Dipak Sapkota",
    category: "Tips",
    url: "/blog/sustainable-trekking",
    readTime: "6 min read"
  },
  {
    id: 9,
    title: "Photography Guide: Capturing the Himalayas",
    excerpt: "Expert tips for photographing mountains, landscapes, and cultural moments during your trek.",
    content: "Sample content...",
    image: "https://images.unsplash.com/photo-1494587351196-bbf5f29cff42",
    date: "December 5, 2023",
    author: "Dilli Parsad Lamsal",
    category: "Photography",
    url: "/blog/himalayan-photography",
    readTime: "10 min read"
  }
];

const categories = [
  "All",
  "Trekking",
  "Culture",
  "Tips",
  "Gear",
  "Health",
  "Accommodation",
  "Photography"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | Excess To Himalayas";
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <div className="section-header">
            <h1 className="section-title">Our Blog</h1>
            <p className="section-subtitle">
              Travel insights, expert tips, and stories from the Himalayas
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-3 px-4 pr-12 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span className="bg-forestGreen/10 text-forestGreen px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-mountainGray mb-3">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <Link
                          to={post.url}
                          className="inline-flex items-center text-skyBlue hover:text-skyBlue/80 font-medium"
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold text-mountainGray mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex items-start gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-mountainGray hover:text-skyBlue transition-colors">
                          <Link to={post.url}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold text-mountainGray mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-skyBlue transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 10 + 1)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-forestGreen text-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-white/80 text-sm mb-4">
                  Stay updated with our latest adventures, tips, and exclusive offers.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-2 px-4 bg-white/10 rounded-lg border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-forestGreen py-2 px-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
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

export default Blog;
