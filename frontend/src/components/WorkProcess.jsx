import Image from "next/image";

const WorkProcess = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">
            WORK PROCESS
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Left Column - Step 1 Content */}
          <div className="col-span-2">
            {/* Step 1 Badge */}
            <div className="bg-orange-500 text-white px-6 py-3 rounded-full inline-block mb-6">
              <h2 className="text-xl font-bold">Step 1 - Registration</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                For event entry management, we considered using a system with
                features like QR code or barcode scanning for quick check-in,
                mobile ticketing.
              </p>

              {/* Digital Ticketing Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Digital Ticketing & Scanning:
                </h3>

                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      • QR Codes/Barcodes:
                    </h4>
                    <p className="text-gray-700 text-sm ml-4">
                      Implement QR codes or barcodes on tickets (digital or
                      printed) that can be scanned at entry points using
                      dedicated scanners or mobile devices. This speeds up the
                      check-in process and reduces errors.
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      • Mobile Ticketing:
                    </h4>
                    <p className="text-gray-700 text-sm ml-4">
                      Encourage attendees to download tickets to their
                      smartphones for a seamless and eco-friendly experience.
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      • Real-Time Data Collection:
                    </h4>
                    <p className="text-gray-700 text-sm ml-4">
                      Integrate the scanning system with a central database to
                      track real-time attendance and gather valuable data for
                      analysis
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      • QR/Barcode Scanning:
                    </h4>
                    <p className="text-gray-700 text-sm ml-4">
                      Event organizers can generate unique QR codes or barcodes
                      for each attendee during registration. These codes are
                      then printed on the lanyards. At entry points, staff can
                      scan the QR codes/barcodes using handheld scanners or even
                      mobile devices connected to the event management system.
                      This allows for real-time verification of attendee
                      information and access rights.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Image */}
          <div className="col-span-1">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/workprocess.png"
                alt="Registration desk with staff and computers"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-lg mt-8">
              <p className="text-lg font-medium text-gray-800">
                By implementing these features, we can create a
                <span className="font-bold text-orange-600">
                  {" "}
                  seamless and efficient event entry management system
                </span>{" "}
                that enhances the overall attendee experience and simplifies the
                planning process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
