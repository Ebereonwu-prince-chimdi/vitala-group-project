import React from 'react';
 function dashboard() {
  return (
    <section className="bg-[#fcf8f2] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg md:text-xl font-medium">
            cause, data and care.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="overflow-hidden rounded-2xl shadow-md aspect-[4/3] md:aspect-[3/4]">
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800" 
              alt="People meditating in white attire" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default dashboard;