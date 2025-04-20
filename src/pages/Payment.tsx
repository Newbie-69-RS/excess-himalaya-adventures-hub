
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CreditCard, Shield, AlertCircle } from "lucide-react";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Payment Portal | Excess To Himalayas";
  }, []);

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'esewa' | 'khalti'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Payment successful! A confirmation has been sent to your email.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-6 py-12">
          <div className="section-header">
            <h1 className="section-title">Payment Portal</h1>
            <p className="section-subtitle">
              Secure payment options for your Himalayan adventures
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-forestGreen mr-2" />
                  <span className="text-gray-700">Your payment is secure and encrypted</span>
                </div>
                
                {/* Payment Method Selection */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-mountainGray mb-4">Choose Payment Method</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
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
                <form onSubmit={handleSubmit}>
                  {paymentMethod === 'card' && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="cardName" className="block text-gray-700 mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          id="cardName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiryDate" className="block text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            id="expiryDate"
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            placeholder="123"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'esewa' && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="esewaId" className="block text-gray-700 mb-2">eSewa ID</label>
                        <input
                          type="text"
                          id="esewaId"
                          placeholder="Your eSewa mobile number or ID"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'khalti' && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="khaltiId" className="block text-gray-700 mb-2">Khalti ID</label>
                        <input
                          type="text"
                          id="khaltiId"
                          placeholder="Your Khalti mobile number or ID"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-mountainGray mb-3">Payment Details</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-gray-800 font-medium">$1,200.00</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600 font-medium">-$200.00</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-gray-200 mt-2 pt-2">
                        <span className="text-gray-800 font-medium">Total</span>
                        <span className="text-xl text-mountainGray font-semibold">$1,000.00</span>
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
                    
                    <button
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
                        'Complete Payment'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-8 bg-mountainGray/5 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-forestGreen mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-mountainGray mb-2">Payment Information</h3>
                  <p className="text-gray-600 mb-4">
                    For booking confirmation, we require a 20% deposit of the total trip cost. The remaining balance can be paid upon arrival in Kathmandu.
                  </p>
                  <p className="text-gray-600">
                    If you encounter any issues with payment, please contact us directly at <a href="mailto:excesstohimalayas@gmail.com" className="text-skyBlue hover:underline">excesstohimalayas@gmail.com</a> or via WhatsApp at <a href="https://wa.me/9779864535410" className="text-skyBlue hover:underline">+977 9864535410</a>.
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

export default Payment;
