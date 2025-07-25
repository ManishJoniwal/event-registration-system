const AssociationsMeeting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">OUR MEETING</h1>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">WITH</h2>
          <h3 className="text-3xl font-bold text-red-600 mb-8">DIFFERENT ASSOCIATIONS</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block mb-8">
            <p className="text-2xl font-bold text-gray-800 italic">
              "WHERE CULINARY PASSION MEETS INDUSTRY EXCELLENCE."
            </p>
          </div>
          
          <div className="bg-orange-600 text-white p-4 rounded-lg inline-block">
            <h4 className="text-3xl font-bold">8th CATERERS EXPO</h4>
            <p className="text-xl">HoReCa 2025</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Association Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <h5 className="font-bold text-green-800">NATHDWARA CATERING ASSOCIATION</h5>
            </div>
            <div className="text-2xl">🏨</div>
            <p className="text-sm text-gray-600 mt-2">मोती महल</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <h5 className="font-bold text-blue-800">ALWAR CATERING ASSOCIATION</h5>
            </div>
            <p className="text-sm text-gray-600">जयपुर कैटरिंग डीलर्स समिति</p>
            <p className="text-sm text-gray-600">कार्यकारिणी के अलवर आगमन</p>
            <p className="text-sm text-gray-600">हार्दिक अभिनंदन</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-purple-100 p-4 rounded-lg mb-4">
              <h5 className="font-bold text-purple-800">UDAIPUR CATERING DEALERS SAMITI</h5>
            </div>
            <div className="bg-red-200 p-2 rounded">
              <p className="text-sm font-bold">UCDS</p>
            </div>
            <p className="text-sm text-gray-600 mt-2">आपका हार्दिक स्वागत करता है।</p>
            <p className="text-sm text-gray-600">उदयपुर कैटरिंग डीलर्स समिति</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <h5 className="font-bold text-yellow-800">DAUSA CATERING ASSOCIATION</h5>
            </div>
            <p className="text-sm text-gray-600">जयपुर कैटरिंग डीलर्स समिति (रजि.)</p>
            <p className="text-sm text-gray-600">कार्यकारिणी के अलवर आगमन</p>
            <p className="text-sm text-gray-600">हार्दिक अभिनंदन</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="bg-indigo-100 p-4 rounded-lg mb-4">
              <h5 className="font-bold text-indigo-800">Café</h5>
            </div>
            <div className="text-4xl font-bold text-orange-500">10</div>
            <div className="text-sm text-gray-600">bakery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationsMeeting;
