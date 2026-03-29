
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
      <section className="py-20 sm:py-24 border-b border-gray-100 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 sm:mb-8 text-gray-900 dark:text-white">
                TALK TO <br /><span className="text-red-600">THE CORE.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 mb-10 md:mb-12 max-w-full sm:max-w-lg">
                Have a query about a mechanic? Interested in a partnership? Or just want to talk shop? We're listening.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Electronic Mail</h3>
                  <p className="text-2xl font-bold hover:text-red-600 transition-colors cursor-pointer">hello@onenessgames.com</p>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Headquarters</h3>
                  <p className="text-2xl font-bold">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 focus:ring-1 focus:ring-red-600 outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-400 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 focus:ring-1 focus:ring-red-600 outline-none transition-all" placeholder="Enter email" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-400 mb-2">Subject</label>
                  <select className="w-full bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 focus:ring-1 focus:ring-red-600 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Customer Support</option>
                    <option>Retail Partnerships</option>
                    <option>Press & Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-400 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 focus:ring-1 focus:ring-red-600 outline-none transition-all" placeholder="Tell us everything..."></textarea>
                </div>
                <button className="w-full bg-gray-900 text-white font-black tracking-widest uppercase py-5 rounded-lg hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/20">
                  Transmit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
