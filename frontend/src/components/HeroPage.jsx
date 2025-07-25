import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col">
          {/* Food Variety Image */}
          <div className="flex-1 relative">
            <Image
              src="/home1.png"
              alt="Food variety display"
              fill
              className="w-20 h-40"
            />
          </div>
        </div>

        <div className="bg-gray-100 flex flex-col justify-center items-center p-8 relative">
          {/* Main Content */}
          <div className="text-center mr-60">
            <p className="text-lg text-black mb-4">Presented by: JCDC</p>

            <div className="mb-8">
              <h1 className="text-7xl font-bold text-black mb-2">JCDS</h1>
              <div className="text-7xl text-black mb-1">
                8<sup>th</sup>EXPO
              </div>
              <h2 className="text-4xl font-bold text-black mb-4">
                HoReCa 2025
              </h2>
              <p className="text-2xl text-black">
                Your Trusted Partner for Success
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-8 mt-10 right-8">
          <div className="relative w-72 h-72">
            <Image
              src="/JCDS LOGO 27 YEARS.png"
              alt="JCDS Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
