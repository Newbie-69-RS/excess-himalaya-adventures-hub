
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Complete Guide to Everest Base Camp Trek",
    excerpt: "Everything you need to know before embarking on the iconic journey to the foot of the world's highest mountain.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    date: "May 15, 2023",
    author: "Rizan Subedi",
    url: "/blog/everest-base-camp-guide"
  },
  {
    id: 2,
    title: "Top 5 Cultural Experiences in Nepal",
    excerpt: "Discover the rich cultural heritage of Nepal beyond its mountains and trekking routes.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    date: "April 28, 2023",
    author: "Shambhu Subedi",
    url: "/blog/nepal-cultural-experiences"
  },
  {
    id: 3,
    title: "Monsoon Trekking in Nepal: Pros and Cons",
    excerpt: "Is it worth trekking during the monsoon season? We explore the advantages and challenges of off-season adventures.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    date: "June 10, 2023",
    author: "Dipak Sapkota",
    url: "/blog/monsoon-trekking"
  }
];

const BlogTeaser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <h2 className="section-title">Our Latest Travel Insights</h2>
          <p className="section-subtitle">
            Get inspired with our travel stories, expert tips, and insider information about Nepal's wonders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-skyBlue hover:text-skyBlue/80 font-medium"
          >
            Read more articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span>By {post.author}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-mountainGray mb-3">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <Link
          to={post.url}
          className="inline-flex items-center text-forestGreen hover:text-forestGreen/80 font-medium"
        >
          Read more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogTeaser;
