import React from 'react';
import { Leaf, Heart, Recycle, Sun } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-24 bg-white dark:bg-[#000000] relative overflow-hidden transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 transition-colors duration-700">
            Tumbuh Bersama<br/>Bumi.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto transition-colors duration-700">
            Mewujudkan aspirasi keberlanjutan 2030 (SCS Sustainability 2030). Kami mengintegrasikan kepedulian lingkungan dan pemberdayaan masyarakat sebagai fondasi setiap proyek infrastruktur.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Card - Green Construction */}
          <div className="md:col-span-2 group bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[3rem] p-10 md:p-14 relative overflow-hidden transition-all duration-700 flex flex-col justify-end min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200" 
              alt="Green Construction" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-md bg-opacity-80">
                <Leaf size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Green Construction</h3>
              <p className="text-gray-200 max-w-xl text-lg leading-relaxed">
                Menekan emisi karbon hingga 30% dalam operasional proyek. Menerapkan daur ulang material ekstrem dan standar sertifikasi LEED Platinum pada seluruh kawasan perkantoran komersial.
              </p>
            </div>
          </div>

          {/* Side Card - Energi Terbarukan */}
          <div className="group bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[3rem] p-10 relative overflow-hidden transition-all duration-700 flex flex-col min-h-[400px]">
             <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600" 
              alt="Solar Panels" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20"></div>
            
            <div className="relative z-10 mt-auto">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-md bg-opacity-80">
                <Sun size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Energi Terbarukan</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Investasi pada panel surya berkapasitas 50 MWp di atas semua fasilitas operasional kami untuk menggerakkan mesin secara mandiri.
              </p>
            </div>
          </div>

          {/* Side Card 2 - Circular Economy */}
          <div className="group bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[3rem] p-10 relative overflow-hidden transition-all duration-700">
             <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
             <div className="relative z-10">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
                <Recycle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-700">Ekonomi Sirkular</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-700">
                Mengurangi limbah konstruksi (*zero waste to landfill*) dengan mengolah sisa baja dan beton menjadi material turunan sekunder bernilai tinggi.
              </p>
            </div>
          </div>

          {/* CSR / TJSL Card */}
          <div className="md:col-span-2 group bg-[#f5f5f7] dark:bg-[#1d1d1f] rounded-[3rem] p-10 md:p-14 relative overflow-hidden transition-all duration-700 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 relative z-10">
              <div className="w-14 h-14 bg-rose-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Heart size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-700">Desa Sejahtera SCS</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6 transition-colors duration-700">
                Program TJSL (Tanggung Jawab Sosial & Lingkungan) unggulan yang memberdayakan lebih dari 120 desa terpencil. Kami membangun puskesmas, menyediakan akses air bersih, dan membina UMKM lokal untuk tumbuh mandiri.
              </p>
              <button className="interactive px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm transition-all hover:scale-105">
                Laporan CSR 2025
              </button>
            </div>
            <div className="w-full md:w-2/5 aspect-square rounded-[2rem] overflow-hidden relative shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1593113589914-07553f1ba63f?auto=format&fit=crop&q=80&w=800" 
                alt="CSR Program" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sustainability;
