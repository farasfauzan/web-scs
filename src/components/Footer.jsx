import React from 'react';
import LogoSVG from './LogoSVG';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#000000] pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <LogoSVG />
              </div>
              <div className="flex flex-col text-slate-900 dark:text-white transition-colors duration-700">
                <span className="font-extrabold text-xl leading-none tracking-tight">SCS</span>
                <span className="text-[7px] font-bold uppercase tracking-widest mt-0.5 text-slate-400">Sinar Cerah Sempurna</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Membangun masa depan Indonesia melalui infrastruktur berkelas dunia yang berkelanjutan, inovatif, dan berintegritas.
            </p>
            <div className="flex gap-4">
              {[<Facebook size={20}/>, <Twitter size={20}/>, <Instagram size={20}/>, <Linkedin size={20}/>].map((icon, i) => (
                <a key={i} href="#" className="interactive w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm transition-colors duration-700">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-700">
              {[
                {name: 'Beranda', id: 'home'}, 
                {name: 'Tentang Kami', id: 'about'}, 
                {name: 'Portofolio', id: 'portfolio'}, 
                {name: 'Layanan', id: 'services'}, 
                {name: 'Kontak', id: 'contact'}
              ].map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'})}
                    className="interactive hover:text-orange-500 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm transition-colors duration-700">Layanan Utama</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-700">
              {[
                {name: 'Konstruksi Gedung', id: 'services'}, 
                {name: 'Infrastruktur Publik', id: 'services'}, 
                {name: 'Energi Terbarukan', id: 'services'}, 
                {name: 'Manajemen Fasilitas', id: 'services'}
              ].map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'})}
                    className="interactive hover:text-orange-500 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm transition-colors duration-700">Berlangganan Buletin</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 transition-colors duration-700">Dapatkan kabar terbaru dan insight industri langsung ke email Anda.</p>
            <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Berhasil berlangganan!'); }}>
              <input type="email" placeholder="Email Anda" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors duration-700" required />
              <button type="submit" className="interactive bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-r-lg font-bold transition-colors">Daftar</button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PT Sinar Cerah Sempurna. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="interactive hover:text-slate-900 dark:hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="interactive hover:text-slate-900 dark:hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
