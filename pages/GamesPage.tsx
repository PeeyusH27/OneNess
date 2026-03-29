
import React from 'react';
import { Link } from 'react-router-dom';
import { GAMES_LIST } from '../constants';

const GamesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">
            THE <span className="text-red-600">ARMORY</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg max-w-full sm:max-w-xl">
            Browse our curated collection of strategic masterpieces. Filter by genre, difficulty, or clan affiliation.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {GAMES_LIST.map((game) => (
            <Link 
              key={game.id} 
              to={`/game/${game.id}`}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-red-100"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={game.bannerImage} 
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {game.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 mb-6">
                  {game.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6">
                  <span className="text-red-600 font-bold text-sm tracking-wider uppercase">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
