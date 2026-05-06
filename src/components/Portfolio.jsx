import React, { useState } from 'react';
import LiveProjectOrbit from './LiveProjectOrbit';
import ARBlueprint from './ARBlueprint';
import { ArrowRight, Building2, X, Filter } from 'lucide-react';

const projects = [
  {
    title: 'Apartemen Cerah',
    category: 'Residensial',
    desc: 'Hunian vertikal modern & nyaman di pusat kota.',
    fullDesc: 'Apartemen Cerah menawarkan gaya hidup modern dengan fasilitas lengkap seperti kolam renang infinity, pusat kebugaran 24 jam, dan taman atap (rooftop garden). Dirancang dengan standar keberlanjutan tinggi, bangunan ini meminimalisir jejak karbon dan memaksimalkan pencahayaan alami.',
    bg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    stats: { luas: '45,000 m²', status: 'Selesai 2024', nilai: 'Rp 1.2 Triliun' }
  },
  {
    title: 'Pusat Belanja Sinar',
    category: 'Komersial',
    desc: 'Destinasi ritel & hiburan yang ikonik & dinamis.',
    fullDesc: 'Lebih dari sekadar mal, Pusat Belanja Sinar adalah ruang publik komprehensif yang mengintegrasikan ruang hijau terbuka, area komersial premium, dan pusat hiburan keluarga. Konstruksinya menggunakan material daur ulang canggih.',
    bg: 'bg-gradient-to-br from-orange-400 to-red-500',
    stats: { luas: '80,000 m²', status: 'Tahap Akhir', nilai: 'Rp 2.5 Triliun' }
  },
  {
    title: 'Jembatan Masa Depan',
    category: 'Infrastruktur',
    desc: 'Infrastruktur penghubung strategis antar wilayah.',
    fullDesc: 'Sebuah mahakarya rekayasa sipil, Jembatan Masa Depan membentang sejauh 2 kilometer, menghubungkan dua zona ekonomi utama. Dilengkapi dengan sensor struktural IoT untuk pemantauan keamanan real-time.',
    bg: 'bg-gradient-to-br from-teal-400 to-emerald-600',
    stats: { panjang: '2.4 km', status: 'Dalam Pembangunan', nilai: 'Rp 3.8 Triliun' }
  },
  {
    title: 'Kawasan Perumahan',
    category: 'Residensial',
    desc: 'Kawasan hunian elite yang asri, aman, & terencana.',
    fullDesc: 'Kawasan terpadu (mixed-use) seluas 50 hektar yang mengusung konsep kota mandiri berkelanjutan. 40% dari total area didedikasikan untuk ruang terbuka hijau dan danau resapan.',
    bg: 'bg-gradient-to-br from-gray-400 to-gray-600',
    stats: { luas: '50 Hektar', status: 'Tahap 1 Selesai', nilai: 'Rp 5.0 Triliun' }
  },
  {
    title: 'Menara Korporat',
    category: 'Komersial',
    desc: 'Gedung perkantoran grade A dengan sertifikasi Platinum.',
    fullDesc: 'Menara perkantoran cerdas yang dilengkapi sistem manajemen gedung otomatis (BMS) dan fasad kaca low-E untuk efisiensi termal.',
    bg: 'bg-gradient-to-br from-slate-700 to-slate-900',
    stats: { lantai: '60 Lantai', status: 'Selesai 2023', nilai: 'Rp 4.1 Triliun' }
  },
  {
    title: 'Jalur Tol Trans-Hub',
    category: 'Infrastruktur',
    desc: 'Akses bebas hambatan pengurai kemacetan ibu kota.',
    fullDesc: 'Proyek tol layang sepanjang 15km yang dibangun tanpa mengganggu arus lalu lintas di bawahnya berkat metode konstruksi sosrobahu.',
    bg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    stats: { panjang: '15 km', status: 'Selesai 2022', nilai: 'Rp 7.5 Triliun' }
  },
  {
    title: 'Eco-Resort Bali',
    category: 'Residensial',
    desc: 'Vila mewah berkonsep menyatu dengan alam tropis.',
    fullDesc: 'Pengembangan resor tepi tebing yang mempertahankan 80% kontur tanah asli. Dilengkapi dengan unit pengolahan air mandiri dan panel surya.',
    bg: 'bg-gradient-to-br from-green-400 to-emerald-700',
    stats: { luas: '12 Hektar', status: 'Tahap Desain', nilai: 'Rp 800 Miliar' }
  },
  {
    title: 'Stadion Utama Sinar',
    category: 'Komersial',
    desc: 'Arena olahraga multifungsi berstandar internasional.',
    fullDesc: 'Stadion berkapasitas 45.000 penonton dengan atap membran fleksibel dan sistem pencahayaan LED cerdas untuk siaran 4K.',
    bg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    stats: { kapasitas: '45k Kursi', status: 'Penyelesaian', nilai: 'Rp 3.0 Triliun' }
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('Semua');

  const categories = ['Semua', 'Residensial', 'Komersial', 'Infrastruktur'];
  
  const filteredProjects = activeTab === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="relative w-full min-h-screen py-24 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-700">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 transition-colors duration-700">
              Proyek<br/>Unggulan.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl">
              Lihatlah portofolio proyek-proyek ikonik kami yang telah selesai dengan keunggulan dan presisi tinggi.
            </p>
          </div>
        </div>

        {/* Content Tabs (Sort by Category) */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-gray-400 mr-4 font-semibold text-sm uppercase tracking-widest">
            <Filter size={16} /> Kategori:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'interactive bg-transparent text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="interactive group relative bg-white dark:bg-[#1d1d1f] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 border-0 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-48 ${proj.bg} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <Building2 className="absolute bottom-4 right-4 text-white opacity-20 group-hover:opacity-100 group-hover:text-yellow-300 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" size={32} />
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-space-grey dark:text-white mb-2 transition-colors duration-700">{proj.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1 transition-colors duration-700">{proj.desc}</p>
                
                <button 
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 rounded-full border-2 border-orange-500 text-orange-600 font-semibold text-sm hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-white dark:bg-[#1d1d1f] p-8 rounded-[3rem] shadow-sm flex flex-col justify-center items-center transition-colors duration-700">
             <h3 className="text-2xl font-bold mb-8 w-full text-space-grey dark:text-white transition-colors duration-700">Status Proyek Real-Time</h3>
             <LiveProjectOrbit progress={78} projectName="Neo-Tokyo Tower" />
          </div>

          <div className="bg-slate-900 p-8 rounded-[3rem] shadow-sm text-white flex flex-col justify-center items-center relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-4 w-full">Blueprint Interaktif</h3>
             <p className="text-gray-400 mb-8 w-full">Proyeksikan model cetak biru skala penuh langsung di meja Anda.</p>
             <ARBlueprint />
          </div>

        </div>

      </div>

      {/* MODAL OVERLAY FOR PROJECT DETAILS */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div 
            className="bg-white dark:bg-slate-900 rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative transition-colors duration-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="interactive absolute top-6 right-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors z-10"
            >
              <X size={24} className="text-gray-800 dark:text-white" />
            </button>

            {/* Modal Header Image */}
            <div className={`w-full h-64 md:h-80 ${selectedProject.bg} relative flex items-center justify-center`}>
              <Building2 className="text-white/20" size={100} />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-700">
                {selectedProject.fullDesc}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {Object.entries(selectedProject.stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-3xl border border-gray-100 dark:border-slate-700 transition-colors duration-700">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1 block">{key}</span>
                    <span className="text-2xl font-bold text-blue-900 dark:text-blue-400">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
