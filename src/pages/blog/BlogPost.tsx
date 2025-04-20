
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/pages/Blog";
import { Calendar, User } from "lucide-react";

const BlogPost = () => {
  const { url } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.url === `/blog/${url}`);
  
  useEffect(() => {
    if (!post) {
      navigate("/404");
      return;
    }
    
    window.scrollTo(0, 0);
    document.title = `${post.title} | Excess To Himalayas`;
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-mountainGray mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-lg max-w-none" contentEditable>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <div className="mt-6">
                {post.content}
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

export default BlogPost;
