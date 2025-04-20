
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CreditCard, Shield, AlertCircle, Check, X, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  trekkers: number;
  trekDate: string;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  promoCode: string;
}

interface LocationState {
  trekId?: string;
  trekName?: string;
  trekPrice?: number;
}

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'esewa' | 'khalti'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    trekkers: 2,
    trekDate: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    promoCode: ""
  });
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const locationState = location.state as LocationState || {};
  const { trekId, trekName = "Custom Trek Package", trekPrice = 1499 } = locationState;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book Now | Excess To Himalayas";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const checkPromoCode = () => {
    if (formData.promoCode.toLowerCase() === "excess2") {
      // Apply 2% discount
      const discount = Math.min(trekPrice * 0.02 * formData.trekkers, 200);
      setDiscountAmount(discount);
      setPromoApplied(true);
      toast({
        title: "Promo Code Applied!",
        description: `You've received a $${discount.toFixed(2)} discount.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid Promo Code",
        description: "The promo code you entered is invalid or expired.",
        variant: "destructive",
      });
    }
  };

  const removePromoCode = () => {
    setPromoApplied(false);
    setDiscountAmount(0);
    setFormData(prev => ({ ...prev, promoCode: "" }));
  };

  const getTotalPrice = () => {
    const basePrice = trekPrice * formData.trekkers;
    return basePrice - discountAmount;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Successful!",
        description: "Your booking has been confirmed. You'll receive a confirmation email shortly.",
        variant: "default",
      });
      
      // Redirect to a success page or home page
      navigate("/", { replace: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <h1 className="section-title">Complete Your Booking</h1>
            <p className="section-subtitle">
              You're just a few steps away from your Himalayan adventure
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-forestGreen mr-2" />
                  <span className="text-gray-700">Secure booking with instant confirmation</span>
                </div>
                
                {/* Trip Summary */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold text-mountainGray mb-3">Trip Summary</h2>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="font-medium text-mountainGray">{trekName}</h3>
                      <p className="text-gray-500 text-sm">Duration: 14 days</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <p className="text-gray-600">Price per person: <span className="font-medium">${trekPrice}</span></p>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-mountainGray mb-4">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality</Label>
                        <Input
                          id="nationality"
                          name="nationality"
                          value={formData.nationality}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="trekkers">Number of Trekkers</Label>
                        <Input
                          id="trekkers"
                          name="trekkers"
                          type="number"
                          min="1"
                          value={formData.trekkers}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="trekDate">Preferred Start Date</Label>
                        <Input
                          id="trekDate"
                          name="trekDate"
                          type="date"
                          value={formData.trekDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-mountainGray mb-4">Promo Code</h2>
                    
                    {promoApplied ? (
                      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md p-4">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <div>
                            <p className="font-medium text-green-800">Promo code applied: {formData.promoCode}</p>
                            <p className="text-sm text-green-600">You saved ${discountAmount.toFixed(2)}</p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={removePromoCode}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <div className="relative">
                            <Tag className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input
                              id="promoCode"
                              name="promoCode"
                              placeholder="Enter promo code"
                              className="pl-10"
                              value={formData.promoCode}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <Button
                          type="button"
                          onClick={checkPromoCode}
                          variant="outline"
                        >
                          Apply
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {/* Payment Method Selection */}
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-mountainGray mb-4">Payment Method</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`border rounded-lg p-4 flex flex-col items-center transition-colors ${
                          paymentMethod === 'card'
                            ? 'border-skyBlue bg-skyBlue/5'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <CreditCard className={`h-8 w-8 mb-2 ${paymentMethod === 'card' ? 'text-skyBlue' : 'text-gray-500'}`} />
                        <span className={paymentMethod === 'card' ? 'text-skyBlue font-medium' : 'text-gray-700'}>Credit/Debit Card</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('esewa')}
                        className={`border rounded-lg p-4 flex flex-col items-center transition-colors ${
                          paymentMethod === 'esewa'
                            ? 'border-skyBlue bg-skyBlue/5'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`h-8 w-8 mb-2 flex items-center justify-center ${paymentMethod === 'esewa' ? 'text-skyBlue' : 'text-gray-500'}`}>
                          <span className="font-bold">e</span>
                        </div>
                        <span className={paymentMethod === 'esewa' ? 'text-skyBlue font-medium' : 'text-gray-700'}>eSewa</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('khalti')}
                        className={`border rounded-lg p-4 flex flex-col items-center transition-colors ${
                          paymentMethod === 'khalti'
                            ? 'border-skyBlue bg-skyBlue/5'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`h-8 w-8 mb-2 flex items-center justify-center ${paymentMethod === 'khalti' ? 'text-skyBlue' : 'text-gray-500'}`}>
                          <span className="font-bold">K</span>
                        </div>
                        <span className={paymentMethod === 'khalti' ? 'text-skyBlue font-medium' : 'text-gray-700'}>Khalti</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-6 mb-8">
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'esewa' && (
                    <div className="space-y-6 mb-8">
                      <div>
                        <Label htmlFor="esewaId">eSewa ID</Label>
                        <Input
                          type="text"
                          id="esewaId"
                          placeholder="Your eSewa mobile number or ID"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'khalti' && (
                    <div className="space-y-6 mb-8">
                      <div>
                        <Label htmlFor="khaltiId">Khalti ID</Label>
                        <Input
                          type="text"
                          id="khaltiId"
                          placeholder="Your Khalti mobile number or ID"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-mountainGray mb-3">Payment Summary</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Trek Package ({formData.trekkers} {formData.trekkers === 1 ? 'person' : 'people'})</span>
                        <span className="text-gray-800 font-medium">${trekPrice * formData.trekkers}.00</span>
                      </div>
                      
                      {promoApplied && (
                        <div className="flex justify-between py-2">
                          <span className="text-green-600">Promo Code Discount</span>
                          <span className="text-green-600 font-medium">-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between py-2 border-t border-gray-200 mt-2 pt-2">
                        <span className="text-gray-800 font-medium">Total</span>
                        <span className="text-xl text-mountainGray font-semibold">${getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-skyBlue"
                          required
                        />
                      </div>
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="#" className="text-skyBlue hover:underline">Terms and Conditions</a> and <a href="#" className="text-skyBlue hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-forestGreen hover:bg-forestGreen/90 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Complete Booking'
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-8 bg-mountainGray/5 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-forestGreen mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-mountainGray mb-2">Booking Information</h3>
                  <p className="text-gray-600 mb-4">
                    For booking confirmation, we require a 20% deposit of the total trip cost. The remaining balance can be paid upon arrival in Kathmandu.
                  </p>
                  <p className="text-gray-600">
                    If you encounter any issues with booking, please contact us directly at <a href="mailto:excesstohimalayas@gmail.com" className="text-skyBlue hover:underline">excesstohimalayas@gmail.com</a> or via WhatsApp at <a href="https://wa.me/9779864535410" className="text-skyBlue hover:underline">+977 9864535410</a>.
                  </p>
                </div>
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

export default BookNow;
