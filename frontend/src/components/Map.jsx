import Image from "next/image";

const Map = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="relative w-full max-w-7xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
        {/* <h1 className="absolute top-0 left-6 text-white text-xl sm:text-2xl font-bold z-10">
          Layouts
        </h1> */}
        <Image
          src="/map.png"
          alt="Full screen map display"
          fill
          className="object-cover sm:object-contain"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 1200px"
        />
      </div>
    </div>
  );
};

export default Map;
