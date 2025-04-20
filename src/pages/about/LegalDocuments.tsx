
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FileText, Download } from "lucide-react";

interface Document {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Company Registration Certificate",
    description: "Official registration of Excess To Himalayas as a tourism company in Nepal, issued by the Department of Industry.",
    icon: <FileText className="h-10 w-10 text-forestGreen" />
  },
  {
    id: 2,
    title: "Nepal Tourism Board License",
    description: "Official trekking and tour operator license issued by the Nepal Tourism Board, authorizing our operations.",
    icon: <FileText className="h-10 w-10 text-forestGreen" />
  },
  {
    id: 3,
    title: "Trekking Agencies' Association of Nepal (TAAN) Membership",
    description: "Certification of our membership in TAAN, the official body representing trekking agencies in Nepal.",
    icon: <FileText className="h-10 w-10 text-forestGreen" />
  },
  {
    id: 4,
    title: "Tax Registration Certificate",
    description: "Permanent Account Number (PAN) registration with the Inland Revenue Department of Nepal.",
    icon: <FileText className="h-10 w-10 text-forestGreen" />
  },
  {
    id: 5,
    title: "Insurance Coverage Certificate",
    description: "Documentation of our comprehensive insurance coverage for clients and staff during all treks and tours.",
    icon: <FileText className="h-10 w-10 text-forestGreen" />
  },
  {
    id: 6,
    title: "Guide Licenses",
    description: "Official licenses for our trekking guides issued by the Nepal Mountaineering Association and Nepal Tourism Board.",
    icon: <FileText className="h-10 w-10 text-forestGreen" />
  }
];

const LegalDocuments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Legal Documents | Excess To Himalayas";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <div className="section-header">
            <h1 className="section-title">Legal Documents</h1>
            <p className="section-subtitle">
              We operate with full compliance to all regulatory requirements in Nepal's tourism industry
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mt-10 mb-12">
            <p className="text-mountainGray">
              At Excess To Himalayas, we are committed to operating with complete transparency and in full compliance with all legal requirements. Below you will find our essential legal documents that certify our legitimacy as a trekking and tour operator in Nepal. These documents ensure that we meet all necessary standards for safety, insurance, and business operations set by the government of Nepal and relevant tourism authorities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold text-mountainGray mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <button className="inline-flex items-center text-skyBlue hover:underline">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-forestGreen/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mountainGray mb-4">Verify Our Credentials</h3>
            <p className="text-gray-700 mb-4">
              You can verify our company registration and licenses through the following official channels:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <a href="https://www.tourismdepartment.gov.np/" target="_blank" rel="noopener noreferrer" className="text-skyBlue hover:underline">
                  Department of Tourism, Nepal
                </a>
              </li>
              <li>
                <a href="https://www.welcomenepal.com/" target="_blank" rel="noopener noreferrer" className="text-skyBlue hover:underline">
                  Nepal Tourism Board
                </a>
              </li>
              <li>
                <a href="https://www.taan.org.np/" target="_blank" rel="noopener noreferrer" className="text-skyBlue hover:underline">
                  Trekking Agencies' Association of Nepal (TAAN)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LegalDocuments;
