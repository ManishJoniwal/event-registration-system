import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-2 min-h-screen">
        {/* Left Column - JCDS Logo/Badge */}
        <div className="bg-white flex items-center justify-center p-8 relative">
          {/* Orange decorative frame */}
          <div className="absolute inset-4 border-4 border-orange-400 rounded-2xl"></div>

          {/* Inner frame */}
          <div className="relative border-2 border-teal-300 rounded-2xl p-8 bg-white shadow-lg">
            {/* JCDS Hexagonal Badge - Full Image Display */}
            <div className="relative w-96 h-96">
              <Image
                src="/JCDS LOGO 27 YEARS.png"
                alt="JCDS Hexagonal Logo - 27 Years of Excellence"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Column - About Content */}
        <div className="bg-white flex flex-col justify-center p-12 relative">
          {/* About Header */}
          <div className="mb-8">
            <h1 className="text-7xl font-black text-gray-800 mb-6 tracking-tight">
              ABOUT
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
              Welcome to the 8th JCDS ( Jaipur Catering Dealers Samiti )
              <br />
              <span className="text-gray-600 font-medium">
                — A Celebration of Culinary Craft and Catering Excellence!
              </span>
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              We are delighted to welcome you to this premier gathering of
              culinary innovators, catering professionals, and foodservice
              visionaries. This exhibition brings together a vibrant mix of
              industry leaders, emerging talent, and trendsetters, all under one
              roof to explore the future of catering.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              From gourmet tastings and live demonstrations to the latest in
              kitchen technology and sustainable service solutions, today's
              event is a feast for the senses and a platform for inspiration.
              Whether you're here to discover new flavors, connect with top
              suppliers, or stay ahead of the latest trends, we're confident
              you'll find something to excite your palate and elevate your
              business.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Let's celebrate creativity, quality, and the shared passion that
              drives the catering industry forward.
            </p>

            <p className="text-lg font-semibold text-gray-800 mt-8">
              Bon appétit and enjoy the exhibition!
            </p>
          </div>

          {/* Orange accent line at bottom */}
          <div className="absolute bottom-8 left-12 w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
