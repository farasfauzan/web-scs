import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const newsItems = [
  {
    category: "Siaran Pers",
    date: "28 April 2026",
    title: "SCS Catatkan Perolehan Kontrak Baru Rp2,76 Triliun pada Kuartal I 2026, Tumbuh Signifikan",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Berita",
    date: "15 April 2026",
    title: "Sinergi BUMN: SCS Siap Bangun Kawasan Industri Terpadu Bertaraf Internasional",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Penghargaan",
    date: "02 April 2026",
    title: "SCS Raih Penghargaan 'Most Sustainable Construction Company 2026'",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
  }
];

const News = () => {
  return (
    <section id="news" className="py-24 bg-white dark:bg-[#000000] relative overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 transition-colors duration-700">
              Pusat<br/>Media.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl transition-colors duration-700">
              Ikuti terus perkembangan terbaru, siaran pers, dan pencapaian PT Sinar Cerah Sempurna di berbagai lini.
            </p>
          </div>
          <button className="interactive group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center gap-2 flex-shrink-0">
            Lihat Semua Berita <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider shadow-sm transition-colors duration-700">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="px-2">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-3 transition-colors duration-700">{item.date}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Announcement Banner */}
        <div className="mt-16 bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-700">
           <div>
             <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2 block">Pengumuman Terkini</span>
             <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-700">Materi Rapat Umum Pemegang Saham Tahunan (RUPST) Tahun Buku 2025</h4>
           </div>
           <button className="interactive w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center flex-shrink-0 shadow-sm hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700">
             <ArrowUpRight size={24} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default News;
