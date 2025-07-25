const OurTeams = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-500 mb-8">OUR TEAMS</h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Registration Team */}
          <div className="text-center">
            <div className="bg-blue-500 text-white p-8 rounded-lg mb-4">
              <h3 className="text-2xl font-bold mb-4">DELEGATE REGISTRATION</h3>
              <div className="space-y-2">
                <p>DELEGATE</p>
                <p>REGISTRATION</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800">Registration Team</h4>
          </div>
          
          {/* Visitor Registration */}
          <div className="text-center">
            <div className="bg-green-500 text-white p-8 rounded-lg mb-4">
              <h3 className="text-2xl font-bold mb-4">VISITOR REGISTRATION</h3>
              <div className="space-y-2">
                <p>VISITOR</p>
                <p>REGISTRATION</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800">Hospitality Team</h4>
          </div>
          
          {/* Security */}
          <div className="text-center">
            <div className="bg-red-500 text-white p-8 rounded-lg mb-4">
              <h3 className="text-2xl font-bold mb-4">REGISTRATION</h3>
              <div className="space-y-2">
                <p>PROUDLY</p>
                <p>BUY LOCAL</p>
                <p>WELCOME</p>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800">Security Team</h4>
          </div>
        </div>
        
        {/* Additional elements from the PDF */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-orange-100 p-4 rounded-lg">
              <p className="font-bold text-orange-600">#BUYLOCALSUMMIT2019</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="font-bold text-blue-600">CLOSED</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="font-bold text-green-600">PROUDLY</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="font-bold text-purple-600">600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
