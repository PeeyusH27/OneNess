
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Narrative */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-red-600 font-black tracking-[0.4em] uppercase text-xs sm:text-sm mb-4">Our Genesis</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-gray-100 tracking-tighter leading-tight md:leading-none mb-8 md:mb-12">
              ONE VISION. <br />
              ONE GAME. <br />
              <span className="italic font-serif text-red-600">ONENESS.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              Oneness Games was founded on the belief that board games are more than just entertainment—they are vessels for cosmic stories and tactical evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { title: "UNCOMPROMISING ART", desc: "Every card, token, and board is a masterpiece designed to immerse you in a living world." },
              { title: "STRATEGIC DEPTH", desc: "We build systems that reward foresight, intuition, and the ability to read the unspoken word." },
              { title: "GLOBAL UNITY", desc: "Our games bring together people of all backgrounds to establish a new common ground." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-10 h-1 bg-red-600 mb-6 sm:mb-8 group-hover:w-24 transition-all"></div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-500 dark:text-gray-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Workspace */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" 
               className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
               alt="Design Studio"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-8 tracking-tighter">WHERE LEGENDS ARE DRAWN.</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              In our studio, silence is often broken by the clacking of dice and the spirited debates of designers refining a single mechanic for months. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              We don't chase trends; we build the monuments that players will visit for decades to come. Every playtest is a step toward perfection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
