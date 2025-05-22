
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
      
      <div className="relative py-8">
        <div className="flex flex-wrap justify-center gap-6">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <img
                src={`/icons/hq_icon_${i + 1}.png`}
                alt={`Tool ${i + 1}`}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default BuildWithTools;
