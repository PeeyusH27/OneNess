
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_GAME } from '../constants';

const HomePage: React.FC = () => {
  const featuredImageRef = useRef<HTMLDivElement | null>(null);
  const [featuredInView, setFeaturedInView] = useState(false);

  useEffect(() => {
    if (!featuredImageRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(featuredImageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 bg-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-slate-900">
        <div className="absolute top-0 right-0 w-0 md:w-1/2 h-full bg-red-600/5 dark:bg-red-500/10 -skew-x-12 transform translate-x-0 md:translate-x-20 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 dark:text-white leading-tight md:leading-[0.9] mb-6 tracking-tighter">
              BATTLE FOR <br />
              <span className="text-red-600 dark:text-red-400">ULTIMATE</span> <br />
              DOMINION.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 mx-auto md:mx-0 max-w-xl md:max-w-lg font-medium leading-relaxed">
              Step into the world's most immersive strategic board game ecosystem. Where legends are forged in cardboard and steel.
            </p>
            <Link 
              to="/games"
              className="inline-block w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-red-600 text-white font-black text-base sm:text-lg tracking-widest uppercase rounded-xl shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:bg-red-700 hover:-translate-y-1 transition-all text-center"
            >
              Explore Games
            </Link>
          </div>
          <div className="w-full md:w-2/5 mt-8 md:mt-0 relative">
             <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-3 hover:md:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/herogame/800/1000" 
                  alt="Hero Game" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Game Banner */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-red-50/50 to-gray-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-0.5 w-12 bg-red-600"></div>
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-gray-400 dark:text-gray-300">Featured Legend</h2>
          </div>

          <Link 
            to={`/game/${FEATURED_GAME.id}`}
            className="group block relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl dark:shadow-none dark:border-slate-700 border border-gray-100 transition-all hover:shadow-2xl hover:border-red-100 dark:hover:border-red-500"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/5 p-12">
                <div
                  ref={featuredImageRef}
                  className={`relative transition-transform duration-700 ${featuredInView ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
                >
                  <img 
                    src={FEATURED_GAME.cardImage} 
                    alt={FEATURED_GAME.title}
                    className="w-full rounded-xl shadow-2xl transform -skew-y-3 group-hover:skew-y-0 transition-all duration-500"
                  />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-lg -z-10 animate-pulse"></div>
                </div>
              </div>
              <div className="md:w-3/5 p-12 md:pr-24">
                <div className="flex flex-wrap gap-2 mb-6">
                  {FEATURED_GAME.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-200 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-red-600 transition-colors">
                  {FEATURED_GAME.title}
                </h3>
                <p className="text-xl text-gray-500 dark:text-gray-300 mb-8 leading-relaxed font-serif italic">
                  "{FEATURED_GAME.subtitle}"
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-lg">
                  {FEATURED_GAME.description}
                </p>
                <div className="flex items-center text-red-600 font-black tracking-widest uppercase text-sm group-hover:translate-x-4 transition-transform">
                  Enter The Realm
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-10">We don't just sell games.<br /><span className="text-red-600 italic font-serif">We curate destinies.</span></h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 leading-relaxed">
            Our platform brings together the finest designers and the most passionate players. Every game in our collection is hand-picked for its mechanical depth, narrative weight, and visual splendor. Join our community and discover your next obsession.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
