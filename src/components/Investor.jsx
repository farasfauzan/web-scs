import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Download, FileText, Activity } from 'lucide-react';

const Investor = () => {
  const [stockPrice, setStockPrice] = useState(6450);
  const [change, setChange] = useState(125);
  const [isUp, setIsUp] = useState(true);

  // Simulate real-time stock ticker
  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.floor(Math.random() * 30) - 10; // -10 to +20
      setStockPrice(prev => {
        const newPrice = prev + fluctuation;
        setChange(Math.abs(newPrice - 6325)); // Compare to mock "open" price
        setIsUp(newPrice >= 6325);
        return newPrice;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="investor" className="py-24 bg-[#f5f5f7] dark:bg-[#000000] relative overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end">
          <div className="mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 transition-colors duration-700">
              Hubungan<br/>Investor.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl transition-colors duration-700">
              Transparansi finansial dan tata kelola perusahaan (GCG) terbaik demi menciptakan nilai jangka panjang bagi pemegang saham.
            </p>
          </div>
          
          {/* Live Stock Ticker */}
          <div className="bg-white dark:bg-[#1d1d1f] p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-8 transition-colors duration-700 min-w-[300px]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 px-2 py-1 rounded-md tracking-widest transition-colors duration-700">IDX: SCSC</span>
                <span className="text-xs text-slate-500 flex items-center gap-1"><Activity size={12}/> Live</span>
              </div>
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter transition-colors duration-700">
                {stockPrice.toLocaleString('id-ID')}
              </div>
            </div>
            <div className={`flex flex-col items-end ${isUp ? 'text-emerald-500' : 'text-red-500'}`}>
              {isUp ? <TrendingUp size={28} className="mb-1" /> : <TrendingDown size={28} className="mb-1" />}
              <span className="font-bold text-lg">{isUp ? '+' : '-'}{change}</span>
              <span className="text-xs font-semibold">({((change/6325)*100).toFixed(2)}%)</span>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Laporan Tahunan Highlight */}
          <div className="lg:col-span-2 group bg-blue-900 dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 relative overflow-hidden transition-all duration-700">
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Laporan Keuangan & Tahunan 2025</h3>
                <p className="text-blue-100/80 text-lg max-w-xl leading-relaxed mb-8">
                  Kinerja finansial solid dengan rekor perolehan nilai kontrak baru. Unduh laporan terpadu untuk analisis mendalam atas pencapaian kami.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="interactive px-6 py-4 bg-white text-blue-900 rounded-full font-bold text-sm transition-all hover:bg-gray-100 flex items-center gap-2 shadow-lg">
                  <Download size={18} /> Laporan Tahunan 2025 (PDF)
                </button>
                <button className="interactive px-6 py-4 bg-blue-800/50 text-white border border-blue-400/30 rounded-full font-bold text-sm transition-all hover:bg-blue-800 flex items-center gap-2 backdrop-blur-md">
                  <Download size={18} /> Laporan Keberlanjutan 2025
                </button>
              </div>
            </div>
          </div>

          {/* Tata Kelola */}
          <div className="group bg-white dark:bg-[#1d1d1f] rounded-[3rem] p-10 relative overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-700">
            <div className="w-14 h-14 bg-[#f5f5f7] dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl flex items-center justify-center mb-6 transition-colors duration-700">
              <FileText size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-700">Tata Kelola (GCG)</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 transition-colors duration-700">
              Komitmen SCS terhadap transparansi, akuntabilitas, dan independensi. Akses dokumen Pedoman Perilaku (Code of Conduct) dan RUPS.
            </p>
            <ul className="space-y-4">
               {[ 'Aksi Korporasi', 'Informasi Dividen', 'Sistem Pelaporan Pelanggaran' ].map((item, i) => (
                 <li key={i}>
                   <a href="#" className="interactive flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors border-b border-slate-100 dark:border-slate-800 pb-3">
                     {item} <span className="text-lg">→</span>
                   </a>
                 </li>
               ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Investor;
