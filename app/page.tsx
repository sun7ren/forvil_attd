import Header from "./components/header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const houseImages = [
    { src: "/images/house1.png", alt: "Dark green two-story house" },
    { src: "/images/house2.png", alt: "Faded yellow victorian house" },
    { src: "/images/house3.png", alt: "Bright green house with white trim" },
    { src: "/images/house4.png", alt: "Dark brown small house" },
  ];

  const PRIMARY_COLOR = 'rgb(125, 60, 20)';
  const ACCENT_BG = 'rgb(240, 225, 200)';
  const DARK_BROWN_BOX_COLOR = 'rgb(76, 50, 25)';
  const secondaryColor = '#7B2300';

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-4xl mx-auto"
              style={{ color: '#795F02', fontFamily: 'Roboto, sans-serif' }}
            >
              A <span style={{ color: '#7B2300', fontStyle: 'italic' }}>Decision Support </span>
              and <span style={{ color: '#7B2300', fontStyle: 'italic' }}>Learning System</span> for Safe and Suitable
              Housing Choices
            </h1>
          </div>

          <div
            className="absolute top-1/2 left-0 right-0 h-1/2"
            style={{ backgroundColor: ACCENT_BG }}
          ></div>

          <div 
            className="relative z-10 container mx-auto px-4 mt-12 flex justify-center space-x-4 sm:space-x-8 items-end"
          >
            {houseImages.map((img, index) => (
              <div
                key={index}
                className="w-1/4 max-w-xs shadow-xl transition duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={350}
                  layout="responsive"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-3/5">
              <p 
                className="text-xl text-gray-700 mb-8 leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                We help provide the most suitable and safest housing options
                based on your housing preferences. We analyze the factors such as{" "}
                <span 
                  className="font-bold"
                  style={{ color: '#7B2300' }}
                >
                  costs, distance, environmental risks
                </span>
                , as well as{" "}
                <span 
                  className="font-bold"
                  style={{ color: '#7B2300' }}
                >
                  crime rate
                </span>, then
                we use an intelligent search algorithm to recommend you the best
                homes that match your needs.
              </p>

              <p 
                className="text-xl text-gray-700 mb-12 leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                We also offer educational information to guide you in
                understanding what makes housing safe, sustainable, liveable, so
                you can make confident and informed decisions when choosing where
                to live!
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Find your suitable House!
              </h3>

              <Link
                href="/main/find"
                className="inline-flex items-center text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
                style={{ backgroundColor: secondaryColor }}
              >
                Find Your House!
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>

            <div className="lg:w-2/5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">

                <div className="w-full relative shadow-xl rounded-2xl overflow-hidden"> 
                  <Image
                    src="/images/map-screenshot.png"
                    alt="Search results map showing a route"
                    width={500}
                    height={600}
                    layout="responsive"
                    className="w-full object-cover"
                  />
                </div>

                <div
                  className="p-6 w-64 shadow-xl absolute rounded-2xl" 
                  style={{
                    top: '-10%', 
                    left: '-15%', 
                    transform: 'translateX(0)',
                    backgroundColor: DARK_BROWN_BOX_COLOR, 
                    color: 'white', 
                  }}
                >
                  <h4 className="font-bold mb-3 text-lg">Your Priorities</h4> 
                  <div className="text-base space-y-2"> 
                    <p className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span role="img" aria-label="Distance icon">📍</span> Distance
                      </span>
                      <span>0.8</span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span role="img" aria-label="Price icon">💰</span> Price
                      </span>
                      <span>0</span>
                    </p>
                    <p className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span role="img" aria-label="Crime rates icon">💀</span> Crime rates
                      </span>
                      <span>0.9</span>
                    </p>
                  </div>
                  <hr className="my-3 border-gray-500" /> 
                  <p className="font-bold text-base mb-2">Total Found</p> 
                  <div className="flex items-center gap-2 text-xl font-bold"> 
                    <span role="img" aria-label="Home icon">🏠</span> 3 Matches!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}