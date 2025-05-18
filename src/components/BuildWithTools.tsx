
const BuildWithTools = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 text-center bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Build Whatever You Want,<br />
        With the Tools You Love
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="bg-gray-800 px-6 py-3 rounded-full">Graphics</div>
        <div className="bg-gray-800 px-6 py-3 rounded-full">Ecommerce Stores</div>
        <div className="bg-gray-800 px-6 py-3 rounded-full">Websites</div>
        <div className="bg-gray-800 px-6 py-3 rounded-full">UI Designs</div>
        <div className="bg-gray-800 px-6 py-3 rounded-full">Funnels</div>
        <div className="bg-gray-800 px-6 py-3 rounded-full">Automations</div>
        <div className="bg-gray-800 px-6 py-3 rounded-full">Portal</div>
      </div>
      
      <div className="relative">
        <div className="flex flex-wrap justify-center gap-4">
          {/* Would use actual SVG icons for these tech logos in a real implementation */}
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
              <img src="/placeholder.svg" alt={`Tool ${i+1}`} className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildWithTools;
