
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES_LIST, FEATURED_GAME } from '../constants';
import { Clan, GamePhase } from '../types';

const SetupGuide: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="bg-white dark:bg-slate-800 dark:border-slate-700 p-8 rounded-3xl border border-gray-100 dark:border-emerald-700 shadow-sm transition-colors">
      <h5 className="text-red-600 font-black uppercase tracking-widest text-xs mb-6">4 Players Setup</h5>
      <div className="flex justify-between items-center bg-gray-50 dark:bg-slate-700 p-6 rounded-2xl mb-4">
        <div className="text-center">
          <p className="text-2xl font-black">2</p>
          <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-300">Surya</p>
        </div>
        <div className="h-8 w-px bg-gray-200 dark:bg-slate-700"></div>
        <div className="text-center">
          <p className="text-2xl font-black">2</p>
          <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-300">Chandra</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-300 italic text-center">Use Rank 1 & 2 of both Clans.</p>
    </div>
    <div className="bg-white dark:bg-slate-800 dark:border-slate-700 p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-lg uppercase">Special</div>
      <h5 className="text-red-600 font-black uppercase tracking-widest text-xs mb-6">7 Players Setup</h5>
      <div className="flex justify-between items-center bg-gray-50 dark:bg-slate-700 p-6 rounded-2xl mb-4">
        <div className="text-center">
          <p className="text-2xl font-black">3</p>
          <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-300">Surya</p>
        </div>
        <div className="h-8 w-px bg-gray-200 dark:bg-slate-700"></div>
        <div className="text-center">
          <p className="text-2xl font-black">3</p>
          <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-300">Chandra</p>
        </div>
        <div className="h-8 w-px bg-gray-200 dark:bg-slate-700"></div>
        <div className="text-center">
          <p className="text-2xl font-black">1</p>
          <p className="text-[10px] uppercase font-bold text-red-600">Maayavi</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-300 italic text-center">Use Rank 1, 2 & 3 cards + the Maayavi card.</p>
    </div>
  </div>
);

const StepBlock: React.FC<{ title: string; children: React.ReactNode; num: string }> = ({ title, children, num }) => (
  <div className="relative pl-12 pb-12 border-l border-gray-100 last:border-0 last:pb-0">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-xs shadow-lg shadow-red-600/20">
      {num}
    </div>
    <h5 className="text-lg font-black uppercase tracking-tight mb-4">{title}</h5>
    <div className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{children}</div>
  </div>
);

const RulesSection: React.FC<{ phases: GamePhase[] }> = ({ phases }) => {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 border-t border-gray-100 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl lg:max-w-8xl mx-auto">
          <header className="mb-20">
            <h2 className="text-red-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Tactical Manual</h2>
            <h3 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-6">The Path to Enlightenment</h3>
            <p className="text-xl text-gray-500 dark:text-gray-300 leading-relaxed max-w-2xl font-medium">
              A game of Order of Dharma is played in rounds. Each round is a team effort, but the victory is individual.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h4 className="text-2xl font-black mb-10 flex items-center">
                <span className="w-2 h-10 bg-red-600 mr-4"></span>
                PREPARATION
              </h4>
              <SetupGuide />
              <div className="bg-gray-950 text-white p-10 rounded-[2.5rem] shadow-2xl">
                 <h5 className="text-red-500 font-black uppercase text-xs mb-6 tracking-widest">Initialization</h5>
                 <p className="text-sm opacity-80 leading-relaxed mb-8">
                   Shuffle the Ability Cards deck and place it at the center alongside the Game Tracker board. Players sit facing each other—enemies hidden in plain sight.
                 </p>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-sm italic opacity-90">"Each player receives a PHASES Card, placed face-up. This marks your life force in the sacred ritual."</p>
                 </div>
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-2xl font-black mb-10 flex items-center">
                <span className="w-2 h-10 bg-gray-900 mr-4"></span>
                DRAFTING PROTOCOL
              </h4>
              <StepBlock num="1" title="Clan Drafting">
                Deal one face-down CLAN card to each player. You may look at your own card, but revealing it to others is a violation of the sacred oath.
              </StepBlock>
              <StepBlock num="2" title="Ability Card Distribution">
                Deal three random Ability cards. Keep one, pass two to the right. From the three now in hand, keep two and discard one face-down to the center.
              </StepBlock>
              <StepBlock num="3" title="Ability Ranks">
                To play a card, place it face-up. The rank determines the order. All cards are resolved in ascending rank order (1–8).
              </StepBlock>
              <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                <h6 className="text-red-600 font-black uppercase text-[10px] mb-2">Important Rule</h6>
                <p className="text-red-900 text-sm font-bold">
                  Skipped Ability cards cannot be played later in the round. If eliminated, flip your PHASES card immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Merged Interactive Carousel Section */}
          <div className="mb-32">
             <header className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                   <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">Gameplay Sequence</h2>
                   <h3 className="text-4xl font-black tracking-tighter uppercase">THE 6 RITUAL PHASES</h3>
                </div>
                <p className="text-gray-400 dark:text-gray-300 text-sm max-w-sm">Explore each phase of the ritual and the ancient abilities that can be unleashed.</p>
             </header>
             <PhaseCarousel phases={phases} />
          </div>

          {/* Endgame Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">Winning the Round</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  The Clan with the highest-ranked surviving player wins. Every member of that Clan advances on the Game Tracker—even those who fell in battle.
                </p>
                <div className="flex items-center space-x-4">
                   <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-xs font-black uppercase">Rank 1 = Highest</div>
                   <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-xs font-black uppercase">Tie-Breaker: Next Surviving</div>
                </div>
             </div>
             <div className="bg-red-600 text-white p-12 rounded-[3rem] shadow-xl shadow-red-600/20">
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">Winning the Game</h4>
                <p className="text-white/80 leading-relaxed mb-8">
                  Reach the 5th stage on the Game Tracker to establish your Dharma as the dominant path. If multiple players reach it simultaneously, they share the glory of the new world.
                </p>
                <div className="bg-white/10 p-6 rounded-2xl">
                   <p className="text-sm font-bold">"Maayavi Rule: If alive at Nirnay, choose a clan. If they win, you advance with them."</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClanCard: React.FC<{ clan: Clan }> = ({ clan }) => {
  const themeClasses = clan.theme === 'sun' 
    ? 'from-red-600 via-orange-500 to-yellow-400' 
    : 'from-blue-900 via-indigo-700 to-white';

  return (
    <div className="relative w-full aspect-[3/4] max-h-[400px] sm:max-h-[460px] md:max-h-[520px] cursor-pointer group overflow-hidden rounded-3xl border border-white/20 shadow-2xl transition-all hover:shadow-2xl dark:border-slate-700">
      <img
        src={clan.image}
        alt={clan.name}
        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
      />

      <div className={`absolute inset-0 bg-gradient-to-t ${themeClasses} opacity-40`}></div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-3xl font-black text-white tracking-tighter mb-2 drop-shadow-lg">{clan.name}</h3>
        <div className="h-1 w-20 bg-white/30 rounded"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-0 overflow-hidden bg-gradient-to-t from-slate-950 to-slate-950/60 rounded-t-2xl transition-all duration-500 group-hover:h-2/3">
        <div className="h-full p-6 pt-10 flex flex-col justify-start gap-3 text-white">
          <p className="text-sm font-bold uppercase tracking-wider opacity-90">"{clan.philosophy}"</p>
          <p className="text-base font-medium leading-relaxed text-white/95">{clan.description}</p>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-2 text-white/80">Core Strengths</h4>
            <ul className="space-y-1 text-xs font-semibold text-white/90">
              {clan.strengths.map(s => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhaseCarousel: React.FC<{ phases: GamePhase[] }> = ({ phases }) => {
  const [activePhaseIndex, setActivePhaseIndex] = React.useState(0);
  const activePhase = phases[activePhaseIndex];

  if (!phases || phases.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden transition-colors duration-300">
      <div className="w-full max-w-screen-xl mx-auto flex border-b border-gray-100 dark:border-slate-700 overflow-x-auto scrollbar-hide">
        {phases.map((phase, idx) => (
          <button
            key={phase.id}
            onClick={() => setActivePhaseIndex(idx)}
            className={`flex-1 min-w-[160px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] py-3 sm:py-4 px-4 sm:px-2 text-center transition-all border-b-4 ${
              activePhaseIndex === idx 
              ? 'bg-red-100 dark:bg-red-900/40 border-red-600 dark:border-red-400 text-red-800 dark:text-red-100' 
              : 'bg-transparent dark:bg-transparent hover:bg-gray-50 dark:hover:bg-slate-700 border-transparent text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className={`block text-[10px] font-black uppercase mb-1 ${activePhaseIndex === idx ? 'text-red-600 dark:text-red-200' : 'text-gray-400 dark:text-gray-300'}`}>
              Phase 0{idx + 1}
            </span>
            <span className={`block font-black uppercase tracking-widest ${activePhaseIndex === idx ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-300'}`}>
              {phase.name}
            </span>
          </button>
        ))}
      </div>

      <div className="p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <h4 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-4 tracking-tighter uppercase">{activePhase.name} Ritual</h4>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed mb-8">{activePhase.description}</p>
            <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-2xl border border-gray-100 dark:border-slate-700">
               <h6 className="text-lg font-black uppercase text-red-600 mb-2">Phase Strategy</h6>
               <p className="text-xs text-gray-500 dark:text-gray-300 italic">"During {activePhase.name}, table discussion is encouraged. Bluff, reveal, or manipulate. Your choices here define the Nirnay resolution."</p>
            </div>
          </div>
          <div className="lg:col-span-9">
            <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
              {activePhase.cards.map((card) => (
                <div key={card.id} className="min-w-[220px] sm:min-w-[240px] snap-center px-2">
                  <div className="relative group rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1">
                    <div className="h-56 sm:h-64 overflow-hidden">
                      <img src={card.image} alt={card.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* <div className="absolute left-0 right-0 bottom-0 h-0 group-hover:h-2/3 bg-gradient-to-t from-slate-950/95 to-transparent transition-[height] duration-500">
                      <div className="h-full p-4 flex flex-col justify-end gap-2 text-white">
                        <span className="text-[10px] font-black uppercase tracking-wider text-red-300">{card.type}</span>
                        <h5 className="text-base font-extrabold leading-tight">{card.name}</h5>
                        <p className="text-xs text-white/90 leading-snug line-clamp-3">{card.description}</p>
                      </div>
                    </div> */}

                    <div className="p-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600 dark:text-red-400">{card.type}</span>
                      <h5 className="font-black text-gray-900 dark:text-white text-lg mt-1">{card.name}</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-300 leading-tight line-clamp-2">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GameDetailPage: React.FC = () => {
  const { id } = useParams();
  const game = GAMES_LIST.find(g => g.id === id) || FEATURED_GAME;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
      {/* Cinematic Banner */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden flex items-center justify-center text-center">
        <img src={game.bannerImage} alt={game.title} className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-5xl">
           <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter mb-4 uppercase">{game.title}</h1>
           <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-serif italic mb-8 md:mb-10 tracking-wide">{game.subtitle}</p>
           <div className="flex items-center justify-center space-x-6">
             <div className="h-px w-20 bg-red-600"></div>
             <span className="text-xs font-black text-white uppercase tracking-[0.5em]">The Oneness Prophecy</span>
             <div className="h-px w-20 bg-red-600"></div>
           </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 sm:py-24 md:py-32 bg-white dark:bg-slate-800 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-xs sm:text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4 sm:mb-6">Introduction</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight md:leading-[1.1] tracking-tighter">
              UNITE THE CLANS. <br />
              <span className="italic font-serif text-red-600">REWRITE</span> YOUR DHARMA.
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
              {game.description} Embark on a journey that defines the future of tabletop gaming. This isn't just a game; it's a cinematic experience brought to life through elegant mechanics and stunning art.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-red-600 text-white font-black tracking-widest uppercase rounded-full shadow-2xl hover:bg-red-700 hover:-translate-y-1 transition-all">
                Order Your Box
              </button>
              <Link to="/games" className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-gray-100 text-gray-900 font-black tracking-widest uppercase rounded-full hover:border-red-600 hover:text-red-600 transition-all text-center">
                Return to Armory
              </Link>
            </div>
          </div>
          <div className="relative">
             <img src={game.cardImage} alt="Game Box" className="rounded-[3rem] shadow-2xl w-full object-cover max-h-[700px] border-8 border-white transform rotate-3" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-sm uppercase text-center p-6 tracking-tighter shadow-xl">
               Award Winning Strategy
             </div>
          </div>
        </div>
      </section>

      {/* Pillars of Duality section - Reordered to be immediately after Introduction */}
      {game.clans && game.clans.length > 0 && (
        <section className="py-28 sm:py-32 bg-gray-950 text-white dark:bg-slate-900 dark:text-gray-200 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-sm font-black text-red-500 uppercase tracking-[0.4em] mb-4">Allegiance System</h2>
              <h3 className="text-5xl font-black tracking-tighter mb-6 uppercase">The Pillars of Duality</h3>
              <p className="text-gray-400 dark:text-gray-300 text-lg leading-relaxed font-medium">
                Every strategist must choose a side. But in Order of Dharma, your true allegiance is a secret even from those you fight beside.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-full lg:max-w-6xl mx-auto">
              {game.clans.map((clan, i) => (
                <ClanCard key={i} clan={clan} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comprehensive Rules Section (Merged Carousel Inside) */}
      {game.id === 'order-of-dharma' && <RulesSection phases={game.phases || []} />}

      {/* High-Impact Footer CTA */}
      <section className="py-20 sm:py-24 md:py-28 bg-red-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="hidden lg:block text-[20rem] xl:text-[25rem] font-black tracking-tighter leading-none transform -rotate-12 select-none">DHARMA</span>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 sm:mb-8 leading-tight uppercase">
            ESTABLISH YOUR <br />SUPREMACY.
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto font-medium opacity-90 leading-relaxed">
            The ritual has begun. The clans are gathering. Will you be the one to reach the 5th stage of the Game Tracker?
          </p>
          <button className="bg-white text-red-600 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-base sm:text-xl tracking-widest uppercase shadow-2xl hover:scale-105 transition-all">
            Secure Your Destiny
          </button>
        </div>
      </section>
    </div>
  );
};

export default GameDetailPage;
