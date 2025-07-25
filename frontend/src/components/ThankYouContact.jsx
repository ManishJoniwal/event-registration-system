const ThankYouContact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white">
      {/* Thank You Section */}
      <div className="text-center py-16">
        <div className="mb-8">
          <p className="text-lg mb-4">Presented by: JCDS</p>
          <div className="text-6xl font-bold mb-4">8th CATERERS EXPO</div>
          <div className="text-3xl mb-8">HoReCa 2025</div>
        </div>
        
        <div className="text-8xl font-bold mb-8">THANK YOU</div>
        <div className="text-6xl font-bold mb-8">FOR YOUR</div>
        <div className="text-6xl font-bold mb-12">ATTENTION.</div>
        
        <div className="text-2xl mb-8">Your Trusted Partner for Success</div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-white text-black p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Organization Info */}
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  JAIPUR CATERING DEALERS
                </h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">JCDS</div>
                <p className="text-sm font-semibold">UNION IS STRENGTH</p>
                <div className="bg-orange-500 text-white px-4 py-2 rounded mt-2">
                  SAMITI
                </div>
                <p className="text-sm mt-2">Completed 27 Years of Excellence</p>
              </div>
            </div>
            
            {/* Right Side - Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">Company Name :</span>
                  <span className="ml-2">Jaipur Catering Dealers Samiti</span>
                </div>
                
                <div>
                  <span className="font-semibold">Email Address :</span>
                  <span className="ml-2">jaipurcateringdealerssamiti@gmail.com</span>
                </div>
                
                <div>
                  <span className="font-semibold">Social Media :</span>
                  <div className="mt-2">
                    <a href="https://www.instagram.com/jaipur_catering_association" 
                       className="text-blue-600 hover:underline">
                      https://www.instagram.com/jaipur catering association
                    </a>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="bg-gray-200 p-4 rounded-lg inline-block">
                    <div className="w-32 h-32 bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-sm font-bold">SCAN ME</span>
                      {/* QR Code placeholder - you can add actual QR code image */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Organization Info */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <div className="bg-orange-100 p-4 rounded-lg inline-block">
              <h4 className="text-xl font-bold text-orange-600">
                JAIPUR CATERING DEALERS
              </h4>
              <div className="text-2xl font-bold text-orange-500">JCDS</div>
              <p className="text-sm font-semibold">UNION IS STRENGTH</p>
              <div className="bg-orange-500 text-white px-3 py-1 rounded mt-1 inline-block">
                SAMITI
              </div>
              <p className="text-sm mt-1">Completed 27 Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouContact;
