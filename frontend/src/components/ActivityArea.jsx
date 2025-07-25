const ActivityArea = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-600 mb-4">
            Step 2- Exploration
          </h1>
          <h2 className="text-3xl font-bold text-blue-600">
            Activity Area & Food Dome Events
          </h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            In addition to the Exhibition Hall, the HoReCa Expo features a vibrant Activity Area 
            seamlessly connected to the Food & Lunch Dome. This dynamic space will host a variety 
            of special events designed to inform, entertain, and celebrate the industry throughout 
            the expo.
          </p>
          
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-orange-500 mb-6">📅 Event Schedule</h3>
          </div>
          
          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-red-600 mb-4">
                📅 Date: 22/08/2025 (Friday)
              </h4>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">10:00 AM</span> – Inauguration Ceremony</p>
                <p><span className="font-semibold">Post-Inauguration</span> – Industry Sessions & Expert Talks</p>
                <p><span className="font-semibold">Evening</span> – Musical Night 🎶</p>
              </div>
            </div>
            
            {/* Day 2 */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-purple-600 mb-4">
                📅 Date: 23/08/2025 (Saturday)
              </h4>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">Daytime</span> – Popular Choice Award Presentations 🏆</p>
                <p><span className="font-semibold">Onwards</span> – Exclusive Book Launch Event 📘</p>
                <p><span className="font-semibold">Evening</span> – Sufi Night 🎼</p>
              </div>
            </div>
            
            {/* Day 3 */}
            <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-teal-600 mb-4">
                📅 Date: 24/08/2025 (Sunday)
              </h4>
              <div className="space-y-2 text-lg">
                <p><span className="font-semibold">Daytime</span> – Facilitation Ceremony 🏅</p>
                <p><span className="font-semibold">Final Event</span> – Closing Ceremony</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg mt-8">
            <p className="text-gray-700 font-medium">
              <span className="font-bold">Note:</span> All events in the Activity Area are open to 
              registered attendees. Entry to some segments may require pre-registration or invitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityArea;
