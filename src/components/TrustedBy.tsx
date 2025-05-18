
const TrustedBy = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by fast-moving<br /> 
            brands & agencies worldwide
          </h2>
          <div className="flex items-baseline gap-12">
            <div>
              <h3 className="text-blue-500 text-3xl md:text-4xl font-bold">10,000+</h3>
              <p className="text-gray-600">Projects</p>
            </div>
            <div>
              <h3 className="text-blue-500 text-3xl md:text-4xl font-bold">200+</h3>
              <p className="text-gray-600">Clients</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="grayscale hover:grayscale-0 transition-all">
              <img src="/placeholder.svg" alt={`Partner ${i+1}`} className="h-10 w-auto mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
