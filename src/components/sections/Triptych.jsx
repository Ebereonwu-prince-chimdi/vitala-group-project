
import React, { useState } from "react";

const accordionItems = [
  {
    id: "01",
    title: "Start with a Vitala Cause Panel",
    desc: "A full-spectrum snapshot of the whole body that sets a clear benchmark for care.",
  },
  {
    id: "02",
    title: "Meet your care team",
    desc: "A virtual visit with a Functional medicine doctor who leads your story, not just your chart.",
  },
  {
    id: "03",
    title: "Track your Symptom Score",
    desc: "A single, data-driven number that shows progress the moment it starts to move.",
  },
  {
    id: "04",
    title: "Stay in it with community",
    desc: "Challenges, shared journeys, and people who get it, so momentum sticks.",
  },
];

export default function Dashboard() {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section className="bg-[#c96f52] px-4 py-12 text-black sm:px-6 sm:py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="max-w-xl text-3xl font-light leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
            Everything in one
            <br />
            calm dashboard.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:items-center">

          
          <div className="w-full lg:col-span-5">
            <div className="space-y-1">

              {accordionItems.map((item, index) => {
                const isActive = activeIdx === index;

                return (
                  <div
                    key={item.id}
                    className={`border-b border-black/30 transition-all duration-300 ${
                      isActive ? "pb-4" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIdx(index)}
                      className="flex w-full items-center gap-3 py-4 text-left sm:gap-4 sm:py-5"
                    >
                      
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/50 text-[10px] sm:h-8 sm:w-8 sm:text-xs">
                        {item.id}
                      </span>

                      
                      <span className="min-w-0 flex-1 text-base font-medium leading-snug sm:text-lg md:text-xl">
                        {item.title}
                      </span>

                      
                      <span className="shrink-0 text-xl font-light sm:text-2xl">
                        {isActive ? "-" : "+"}
                      </span>
                    </button>

                    
                    {isActive && (
                      <p className="pb-2 pl-10 pr-5 text-sm leading-6 text-black/70 sm:pl-12 sm:pr-8">
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

          
          <div className="w-full lg:col-span-7">
            <div className="relative w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">

              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80"
                alt="Three women practicing yoga together"
                className="h-[300px] w-full object-cover sm:h-[400px] md:h-[480px] lg:h-[600px]"
              />

              <div className="absolute inset-0 bg-black/5" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

