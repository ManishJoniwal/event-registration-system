import Image from "next/image";

const ExplorationSection = () => {
  return (
    <div className="min-h-screen bg-orange-400 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <div className="bg-white px-6 py-3 rounded-full inline-block">
            <h1 className="text-2xl font-bold text-gray-800">
              Step 2- Exploration
            </h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Column - Floor Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Event Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                8<sup>th</sup> Caterers Expo HoReCa 2025
              </h2>
              <p className="text-lg text-gray-600">
                22-23-24 August at EP East Lawn, Jawahar Circle, Jaipur
              </p>
            </div>

            {/* Floor Plan Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden border-2 border-gray-200">
              <Image
                src="/exploration.png"
                alt="Detailed floor plan layout of the expo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-white space-y-6">
            <p className="text-lg leading-relaxed">
              The HoReCa Expo is thoughtfully divided into two main sections:
            </p>

            <div className="ml-8 space-y-2">
              <p className="text-xl font-semibold">1. Exhibition Hall</p>
              <p className="text-xl font-semibold">2. Activity Area</p>
            </div>

            <p className="text-lg leading-relaxed">
              As outlined in the event layout, once attendees complete the
              registration process, they will first enter the Exhibition Hall—a
              vibrant space showcasing a wide array of products, services, and
              innovations from leading names in the hospitality, restaurant, and
              catering industry.
            </p>

            <p className="text-lg leading-relaxed">
              Following the exhibition tour, visitors will proceed to the
              Activity Area, where an engaging lineup of live demonstrations,
              expert sessions, workshops, and interactive events awaits. This
              flow ensures a structured and immersive experience, allowing
              participants to explore the latest market offerings before diving
              into hands-on learning and networking opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorationSection;
