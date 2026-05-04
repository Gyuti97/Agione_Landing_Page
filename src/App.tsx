import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Play, Check, Instagram, Linkedin, MessageCircle, ChevronRight, User, Briefcase, Tag, Target, Camera, SmartphoneCharging, Sparkles, Printer, Zap, Globe, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center group ${className}`}>
    <img 
      src="/2.png" 
      alt="Agi One Logo" 
      className="h-10 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
    />
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rólam', path: '/about' },
    { name: 'Szolgáltatások', path: '/services' },
    { name: 'Csomagok', path: '/packages' },
    { name: 'Referenciák', path: '/references' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-night/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all hover:text-gold-300 ${
                location.pathname === link.path ? 'text-gold-300 underline underline-offset-8' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="gold-chrome-bg text-black px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all gold-glow">
              Kérj ajánlatot!
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-charcoal border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase tracking-widest font-bold text-zinc-300 hover:text-gold-300"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gold-500 text-black py-4 font-black uppercase tracking-widest">
                Kérj ajánlatot!
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-night border-t border-white/5 py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
      <div className="col-span-1 md:col-span-2">
        <Logo className="mb-8 -ml-4" />
        <p className="text-zinc-500 max-w-sm text-sm font-medium leading-relaxed mb-8 uppercase tracking-wider">
          Prémium rövid formátumú videó rendszerek kisvállalkozások részére. Stratégia, kivitelezés, és mérhető növekedés.
        </p>
        <div className="flex gap-4">
          <a href="https://instagram.com/agi_one_content" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 text-zinc-400 hover:text-gold-300 hover:border-gold-300 transition-all">
            <Instagram size={18} />
          </a>
          <a href="#" className="p-2 border border-white/10 text-zinc-400 hover:text-gold-300 hover:border-gold-300 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="mailto:info@agione.hu" className="p-2 border border-white/10 text-zinc-400 hover:text-gold-300 hover:border-gold-300 transition-all">
            <Mail size={18} />
          </a>
          <a href="tel:+36306093966" className="p-2 border border-white/10 text-zinc-400 hover:text-gold-300 hover:border-gold-300 transition-all">
            <Phone size={18} />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6 underline decoration-gold-500 decoration-2 underline-offset-4">Oldaltérkép</h4>
        <ul className="flex flex-col gap-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
          <li><Link to="/about" className="hover:text-gold-300 transition-colors">Rólam</Link></li>
          <li><Link to="/services" className="hover:text-gold-300 transition-colors">Szolgáltatások</Link></li>
          <li><Link to="/packages" className="hover:text-gold-300 transition-colors">Csomagok</Link></li>
          <li><Link to="/references" className="hover:text-gold-300 transition-colors">Referenciák</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6 underline decoration-gold-500 decoration-2 underline-offset-4">Jogi</h4>
        <ul className="flex flex-col gap-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
          <li><a href="#" className="hover:text-gold-300 transition-colors">ÁSZF</a></li>
          <li><a href="#" className="hover:text-gold-300 transition-colors">Adatvédelem</a></li>
          <li><a href="#" className="hover:text-gold-300 transition-colors">Impresszum</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em]">
        © 2026 Agi One Content Lab. Minden jog fenntartva.
      </p>
      <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em]">
        Designed By <a href="https://ycreative.art" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">Y-Creative</a>
      </p>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => {
  const valueCards = [
    { title: 'Maximális Hatékonyság', desc: 'Egy forgatási napból több hétre elegendő profi videó anyag.', icon: Camera },
    { title: 'Pattogós Dinamika', desc: 'TikTok és Reels optimalizált vágás, ami megtartja a nézői figyelmet.', icon: Target },
    { title: 'Brand Konzisztencia', desc: 'Egységes arculati stílus, ami azonnal felismerhetővé teszi céged.', icon: Briefcase },
    { title: 'Ügyfélszerzés', desc: 'Konverzióra épített stratégiák, nem csak üres nézettség.', icon: Tag },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-night">
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1579165466541-744b48f9a513?q=80&w=2670&auto=format&fit=crop" 
            alt="Studío Background" 
            className="w-full h-full object-cover opacity-50 grayscale scale-110"
          />
        </div>

        <div className="container-max mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1.5 px-4 gold-chrome-bg text-black text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              Stratégiai Videógyártás
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-white break-words">
              Láthatóság.<br />
              <span className="gold-chrome">Konzisztencia.</span><br />
              Ügyfélszerzés.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
              Kisvállalkozásoknak építek tudatos videós rendszert TikTok és Instagram felületekre – nem esetleges posztokkal, hanem következetes tartalommal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <button className="group gold-chrome-bg text-black px-10 py-5 font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 active:scale-95 transition-all gold-glow">
                  Kérj ajánlatot <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/references">
                <button className="border-2 gold-chrome-border text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                  Munkáim megtekintése
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-charcoal">
        <div className="container-max mx-auto px-6">
          <div className="art-deco-line mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 border border-white/5 bg-night hover:border-gold-500/30 transition-all duration-500 min-h-[320px] flex flex-col justify-center"
              >
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-gold-500 mb-10 border-l-2 border-transparent group-hover:border-gold-500 transition-all">
                  <card.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-5 tracking-wider">{card.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const About = () => (
  <div className="pt-20 min-h-screen">
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-gold-500/20" />
          <div className="relative z-10 aspect-square overflow-hidden bg-zinc-900 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1544411047-c491e34a2450?q=80&w=2670&auto=format&fit=crop" 
              alt="Greyhound" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 gold-chrome-bg p-8 hidden md:block gold-glow">
            <span className="text-black font-black text-4xl tracking-tighter uppercase">Focus</span>
          </div>
        </div>
        
        <div>
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Történetünk</span>
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1]">
            A név, ami<br /> kötelez.
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-6">
            Az Agi One név személyes eredetű: a nevet az agaramról kapta. Aki ismeri ezeket a kutyákat, tudja: ők a sebesség, a fókusz, az ösztönös irányítás és a precizitás megtestesítői.
          </p>
          <div className="p-8 border-l border-gold-500/30 bg-white/5 mb-10">
            <p className="text-white text-lg font-medium italic text-editorial leading-relaxed">
              "Egy gyors, fókuszált és ösztönösen jól reagáló állat. Pontosan ilyen rendszereket építek az ügyfeleimnek is: lényegre törő, gyors és rendkívül eredményes."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Mintler Kíra — Alapító</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Services = () => (
  <div className="pt-20">
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto mb-20">
        <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Kínálatunk</span>
        <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-10">Teljes Körű<br /> Ökoszisztéma</h2>
        <div className="art-deco-line" />
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {[
          { title: 'Short-form Video', desc: 'TikTok, Reels és Shorts gyártás stratégiától a vágásig.' },
          { title: 'Social Management', desc: 'Konzisztens jelenlét és közösségépítés a platformokon.' },
          { title: 'Visual Identity', desc: 'Profi megjelenés és videós arculat kialakítása.' },
          { title: 'Printed Materials', desc: 'Prémium offline anyagok, amik támogatják a digitális jelenlétet.' },
          { title: 'Ad Strategy', desc: 'Fizetett hirdetések optimalizálása a valódi konverzióért.' },
          { title: 'Digital Solutions', desc: 'Webes és technikai háttér a tartalomrendszeredhez.' },
        ].map((s, i) => (
          <div key={s.title} className="group p-12 border border-white/5 bg-charcoal hover:bg-gold-500/5 transition-all duration-500">
            <div className="font-display text-4xl mb-8 group-hover:gold-chrome text-zinc-800 transition-colors">0{i+1}</div>
            <h3 className="text-xl font-bold mb-4 tracking-wider text-white uppercase">{s.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">{s.desc}</p>
            <ChevronRight className="gold-chrome opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all" size={20} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Packages = () => {
  const tiers = [
    { name: 'Basic', price: '120.000 Ft', desc: 'Kezdő szintű konzisztencia', features: ['4 videó / hó', 'Alap vágás', 'Feliratozás', '1 forgatási nap'] },
    { name: 'Growth', price: '180.000 Ft', desc: 'Aktív márkaépítés', features: ['8 videó / hó', 'Pro vágás (B-roll)', 'Trendelemzés', 'Statisztikai riport'], recommended: true },
    { name: 'Pro', price: '260.000 Ft', desc: 'Domináns piaci jelenlét', features: ['16 videó / hó', 'Teljes stratégia', 'Ads menedzsment', '2 forgatási nap'] },
    { name: 'Custom', price: 'Egyedi', desc: 'Komplex produkciók', features: ['Termékbevezetés', 'Dokumentum stílus', 'Egyedi tanácsadás', 'Prioritásos support'] },
  ];

  return (
    <div className="pt-20">
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Árazás</span>
          <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 uppercase">Növekedési<br /> Szintek</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm font-light uppercase tracking-widest leading-loose">
            Minden csomag havi kollaborációt, stratégiai tervezést és tartalom optimalizálást tartalmaz.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative p-12 border transition-all duration-500 flex flex-col ${
                tier.recommended ? 'gold-chrome-border bg-gold-500/10 gold-glow scale-105 z-10' : 'border-white/5 bg-charcoal'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-chrome-bg text-black text-[10px] font-black px-4 py-1 tracking-widest uppercase shadow-xl">
                  Ajánlott
                </div>
              )}
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-2">{tier.name}</h3>
              <div className={`text-4xl font-black mb-6 uppercase tracking-tighter ${tier.recommended ? 'gold-chrome' : 'text-white'}`}>{tier.price}</div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10 pb-6 border-b border-white/10">{tier.desc}</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.1em]">
                    <Check size={14} className="text-gold-500" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-auto">
                <button className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-100 ${
                  tier.recommended ? 'gold-chrome-bg text-black shadow-lg' : 'border border-white/20 text-white hover:gold-chrome-border hover:gold-chrome'
                }`}>
                  Kiválasztom
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Kiegészítő Szolgáltatások */}
        <div className="mt-40">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-white/10" />
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em]">Kiegészítő Szolgáltatások</span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Több, mint videók. <span className="gold-chrome">Teljes megjelenés.</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm leading-relaxed mb-4">
              A videós tartalom akkor működik igazán jól, ha minden elem egységesen támogatja. <span className="text-gold-400 font-bold">Ebben is tudok segíteni.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Közösségi Média Kezelés', desc: 'Következetes jelenlét és aktív kommunikáció.', items: ['Tartalomtervezés', 'Posztok & Sztorik', 'Profil optimalizálás', 'Interakciók'], icon: SmartphoneCharging },
              { title: 'Arculat és Megjelenés', desc: 'Vizuális egységesség minden felületen.', items: ['Arculati elemek', 'Vizuális irány', 'Szín- & Betűfókus', 'Design elemek'], icon: Sparkles },
              { title: 'Nyomtatott Anyagok', desc: 'Minőségi offline megoldások a márkádnak.', items: ['Szórólapok', 'Névjegykártyák', 'Brosúrák', 'Kiadványok'], icon: Printer },
              { title: 'Hirdetési Támogatás', desc: 'Hatékony hirdetések és stratégiai támogatás.', items: ['Optimalizált vágás', 'Kreatív koncepciók', 'A/B tesztelés', 'Stratégia'], icon: Zap },
              { title: 'Web és Digitális Megoldások', desc: 'Professzionális digitális ügyfélélmény.', items: ['Landing oldalak', 'Űrlapok', 'Design folyamat', 'Technikai háttér'], icon: Globe },
              { title: 'Tartalom Stratégia', desc: 'Hosszú távú tartalomfejlesztési terv.', items: ['Piacelemzés', 'Audience Research', 'Content Funnel', 'Growth Loops'], icon: Target },
            ].map((item, i) => (
              <div key={item.title} className="chrome-card p-12 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 mb-10 group-hover:gold-chrome-bg group-hover:text-black group-hover:scale-110 transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-sm font-black tracking-[0.3em] uppercase text-white mb-6 leading-relaxed group-hover:gold-chrome">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-8 font-medium">{item.desc}</p>
                <ul className="space-y-3">
                  {item.items.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefit Bar */}
          <div className="mt-8 p-10 bg-night border-t-2 gold-chrome-border grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="col-span-1 md:border-r border-white/10 pr-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-2">A fókusz minden esetben</h4>
              <p className="text-xl font-black text-white uppercase mb-4 leading-tight">A videós tartalom és az arra épülő rendszer.</p>
              <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-wider">A kiegészítő szolgáltatások ezt erősítik — <span className="text-gold-400">nem helyettesítik.</span></p>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Egységes Márka', desc: 'Minden felületen ugyanazt képviseli.' },
                { title: 'Több Bizalom', desc: 'Professzionális megjelenés.' },
                { title: 'Több Ügyfél', desc: 'Jobb kommunikáció és elérés.' },
                { title: 'Időt Spórolsz', desc: 'Mindent egy kézből kapsz meg.' },
              ].map(benefit => (
                <div key={benefit.title}>
                  <h5 className="text-[10px] font-black text-gold-300 uppercase tracking-widest mb-1">{benefit.title}</h5>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const References = () => (
  <div className="pt-20">
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto mb-20">
        <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Portfólió</span>
        <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-10 text-white">Eredmények &<br /> Referenciák</h2>
        <div className="art-deco-line" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          { client: 'Luxury Real Estate', outcome: '+300% Engagement', desc: 'Teljes videós arculatváltás és stratégiai Reels kampány.' },
          { client: 'Creative Studio', outcome: 'Consistent Pipeline', desc: 'Havi 8 videó, ami folyamatos bejövő érdeklődést generál.' },
          { client: 'High-end Gastronomy', outcome: 'Viral Reach', desc: 'Éttermi hangulatvideók, amik elérték a 100k+ megtekintést.' },
          { client: 'Personal Branding', outcome: 'Authority Building', desc: 'Szakértői tartalmak, amik pozicionálják a márkát.' },
        ].map(r => (
          <div key={r.client} className="group overflow-hidden bg-charcoal border border-white/5">
            <div className="aspect-video bg-zinc-900 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
               <Play className="text-gold-500 relative z-20 group-hover:scale-125 transition-transform" size={48} />
               <img src={`https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop`} alt="ref" className="absolute inset-0 w-full h-full object-cover grayscale" />
            </div>
            <div className="p-12">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white">{r.client}</h3>
                <span className="gold-chrome text-[11px] font-black uppercase tracking-widest bg-gold-500/10 px-4 py-1.5 border border-gold-500/20">{r.outcome}</span>
              </div>
              <p className="text-zinc-500 text-base leading-relaxed mb-10">{r.desc}</p>
              <div className="flex items-center gap-4 text-gold-500 text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer hover:gap-6 transition-all group/link">
                Esettanulmány megtekintése <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Contact = () => (
  <div className="pt-20 bg-night">
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Kapcsolat</span>
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1] text-white">Lépjünk<br /> Szintet</h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12 max-w-sm">
            Készen állsz a konzisztens videós jelenlétre? Vedd fel velünk a kapcsolatot, és keressünk egy időpontot a konzultációhoz.
          </p>
          <div className="flex flex-col gap-6">
            <a href="https://instagram.com/agi_one_content" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-gold-500 group-hover:text-gold-500 transition-all">
                <Instagram size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">@agi_one_content</span>
            </a>
            <a href="mailto:info@agione.hu" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-gold-500 group-hover:text-gold-500 transition-all">
                <Mail size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">info@agione.hu</span>
            </a>
            <a href="tel:+36306093966" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-gold-500 group-hover:text-gold-500 transition-all">
                <Phone size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">+36 30 609 3966</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-12 border border-white/5 bg-charcoal text-center">
          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gold-500 mb-8">
            <MessageCircle size={32} />
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4">Készen állsz a növekedésre?</h3>
          <p className="text-zinc-500 text-sm font-medium mb-12 max-w-xs uppercase tracking-wide">
            Kattints az alábbi gombra és vedd fel velünk a kapcsolatot közvetlenül emailben egy ingyenes stratégiai konzultációért.
          </p>
          <a 
            href="mailto:info@agione.hu" 
            className="w-full inline-block gold-chrome-bg text-black py-5 font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-100 transition-all gold-glow text-center"
          >
            Konzultáció Kérése
          </a>
          <p className="mt-8 text-[9px] text-zinc-600 uppercase tracking-[0.3em]">
            Válaszidő: Általában 24 órán belül
          </p>
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-night selection:bg-gold-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

