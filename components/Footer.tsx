
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 dark:text-gray-300 border-t border-gray-100 dark:border-slate-700 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="mb-6 -ml-2 flex justify-start">
              <Logo className="h-20" variant="red" />
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Empowering strategists and storytellers since 2024. Your gateway to cinematic tabletop experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.4v-2.9h2.4V9.4c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.61 8.61 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9 12.15 12.15 0 0 1-8.83-4.48 4.27 4.27 0 0 0 1.32 5.72 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.59 8.59 0 0 1 2 18.58a12.13 12.13 0 0 0 6.57 1.92c7.89 0 12.2-6.54 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 22.46 6"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-to-tr from-pink-500 to-purple-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.3 1 .7 1.4 1.4.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.3.6-.7 1-1.4 1.4-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.3-1-.7-1.4-1.4-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.3-.6.7-1 1.4-1.4.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.6.1-.9.1-1.4.2-1.7.4-.4.2-.7.5-.9.9-.2.2-.4.8-.4 1.7-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1.9.2 1.4.4 1.7.2.4.5.7.9.9.2.2.8.4 1.7.4 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.5.9-.9.2-.2.4-.8.4-1.7.1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-.9-.2-1.4-.4-1.7-.2-.4-.5-.7-.9-.9-.2-.2-.8-.4-1.7-.4-1.2-.1-1.5-.1-4.6-.1z"/><path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"/><circle cx="18.4" cy="5.6" r="1.1"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.4c-.3-1.2-1.3-2.2-2.5-2.4C18.7 3.5 12 3.5 12 3.5s-6.7 0-8.9.5c-1.2.3-2.2 1.3-2.5 2.4-.4 1.8-.4 5.6-.4 5.6s0 3.8.4 5.6c.3 1.2 1.3 2.2 2.5 2.4 2.2.5 8.9.5 8.9.5s6.7 0 8.9-.5c1.2-.3 2.2-1.3 2.5-2.4.4-1.8.4-5.6.4-5.6s0-3.8-.4-5.6zM9.8 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
              </a>
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
              <button className="w-full md:w-auto bg-red-600 text-white px-6 py-3 rounded-r text-sm font-bold hover:bg-red-700 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs text-gray-400 gap-3 md:gap-0">
          <p className="text-center md:text-left">© 2025 Oneness Games Entertainment. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-4 md:mt-0">
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
