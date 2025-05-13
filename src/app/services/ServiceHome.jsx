import Image from "next/image";

const services = [
  {
    title: "Speech Therapy",
    description: "Enhancing communication skills through expert speech correction and vocal training.",
    image: "/images/speaker.png",
  },
  {
    title: "Diction Training",
    description: "Perfecting pronunciation and articulation for clear, confident speech delivery.",
    image: "/images/school.png",
  },
  {
    title: "Phonics Classes",
    description: "Building strong reading and spelling skills through phonetic awareness techniques.",
    image: "/images/classroom.png",
  },
];

const additionalServices = [
  {
    category: "Media Communication Department",
    services: [
      { title: "Website Design", description: "Creating visually stunning and user-friendly websites.", icon: "/images/graphic-design.png" },
      { title: "Website Management", description: "Ensuring your website runs smoothly and efficiently.", icon: "/images/data-management.png" },
      { title: "Website Marketing", description: "Driving traffic and engagement to your website.", icon: "/images/marketing.png" },
      { title: "Website Advertising", description: "Promoting your website to reach a wider audience.", icon: "/images/digital-marketing.png" },
    ],
  },
  {
    category: "App Development",
    services: [
      { title: "App Design", description: "Designing intuitive and engaging mobile applications.", icon: "/images/edit.png" },
      { title: "App Management", description: "Maintaining and updating your mobile applications.", icon: "/images/digital-content.png" },
      { title: "App Marketing", description: "Promoting your app to maximize downloads and usage.", icon: "/images/advertisig-agency.png" },
      { title: "App Advertising", description: "Advertising your app to reach your target audience.", icon: "/images/mobile.png" },
    ],
  },
  {
    category: "Social Media Services",
    services: [
      { title: "Social Media Designs", description: "Creating captivating designs for your social media.", icon: "/images/advertising.png" },
      { title: "Monetization", description: "Helping you monetize platforms like Instagram, Facebook, and more.", icon: "/images/monetization.png" },
      { title: "Instagram", description: "Optimizing and managing your Instagram presence.", icon: "/images/instagram.png" },
      { title: "Facebook", description: "Building and growing your Facebook audience.", icon: "/images/facebook.png" },
      { title: "YouTube", description: "Enhancing your YouTube channel for better engagement.", icon: "/images/youtube.png" },
      { title: "Spotify & Podcast", description: "Promoting your Spotify and podcast content effectively.", icon: "/images/spotify.png" },
    ],
  },
];

const ServicePage = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 text-center"
        style={{ backgroundImage: "url('/images/blue-background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h3 className="text-gray-300 uppercase tracking-wide text-sm md:text-base lg:text-lg">
            Features
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
            Our Features & Services
          </h2>
          <p
            className="font-medium text-gray-200 mt-4 mx-auto"
            style={{
              maxWidth: "600px",
              lineHeight: "1.8",
            }}
          >
            Welcome to our comprehensive range of services designed to meet your diverse needs. Explore our services below and discover how we can elevate your expectations.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <div className="grid md:grid-cols-3 gap-8 px-8 pb-16 mt-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={service.image}
        alt={service.title}
        width={200}
        height={150}
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold text-gray-800 mt-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
    </div>
  ))}
</div>

{/* Additional Services */}
{additionalServices.map((category, index) => (
  <section key={index} className="px-8 pb-16">
    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      {category.category}
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.services.map((service, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
        >
          <Image
            src={service.icon}
            alt={service.title}
            width={50}
            height={50}
            className="mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800">
            {service.title}
          </h4>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
))}

{/* Diction Awards Section */}
<section className="bg-white py-16 px-8">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
      The Diction Awards
    </h2>
    <p
      className="text-gray-600 mt-4 mx-auto"
      style={{
        maxWidth: "700px",
        lineHeight: "1.8",
      }}
    >
      The Diction Award celebrates excellence in linguistic expression, recognizing individuals who
      demonstrate exceptional mastery of spoken and written communication.
    </p>
  </div>

  {/* Awards Images */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      "/images/DSC_6524[40].JPG",
      "/images/DSC_6811.JPG",
      "/images/DSC_6802.JPG",
      "/images/DSC_6580.JPG",
      "/images/DSC_6823.JPG",
      "/images/DSC_6849.JPG",
    ].map((image, index) => (
      <div
        key={index}
        className="relative group w-full h-64 overflow-hidden rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={image} // Replace with your actual image paths
          alt={`Award ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white font-semibold text-lg">{`Award Title ${index + 1}`}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
};

export default ServicePage;