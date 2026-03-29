
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 dark:text-gray-300 border-t border-gray-100 dark:border-slate-700 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 -ml-2 flex justify-start">
              <Logo className="h-20" variant="red" />
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Empowering strategists and storytellers since 2024. Your gateway to cinematic tabletop experiences.
            </p>
            <div className="flex space-x-4">
              {['FB', 'TW', 'IG', 'YT'].map(platform => (
                <div key={platform} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300">
                  <span className="text-[10px] font-black">{platform}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'New Arrivals', 'Top Rated', 'Board Games', 'Card Games'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-600 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Community</h4>
            <ul className="space-y-4">
              {['Discord', 'Tournaments', 'Leaderboard', 'Blog', 'Support'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-600 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Subscribe</h4>
            <p className="text-gray-500 text-sm mb-4">Get the latest strategy guides and game releases.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-50 border border-gray-200 rounded-l px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-red-600 text-sm"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-r text-sm font-bold hover:bg-red-700 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 Oneness Games Entertainment. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600">Privacy Policy</a>
            <a href="#" className="hover:text-red-600">Terms of Service</a>
            <a href="#" className="hover:text-red-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
