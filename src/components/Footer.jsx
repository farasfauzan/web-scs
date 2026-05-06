import React from 'react';
import LogoSVG from './LogoSVG';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <LogoSVG />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-extrabold text-xl leading-none tracking-tight">SCS</span>
                <span className="text-[7px] font-bold uppercase tracking-widest mt-0.5 text-slate-400">Sinar Cerah Sempurna</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Membangun masa depan Indonesia melalui infrastruktur berkelas dunia yang berkelanjutan, inovatif, dan berintegritas.
            </p>
            <div className="flex gap-4">
              {[<Facebook size={20}/>, <Twitter size={20}/>, <Instagram size={20}/>, <Linkedin size={20}/>].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Beranda', 'Tentang Kami', 'Portofolio', 'Layanan', 'Karir'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Layanan Utama</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Konstruksi Gedung', 'Infrastruktur Publik', 'Energi Terbarukan', 'Manajemen Fasilitas'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Berlangganan Buletin</h4>
            <p className="text-slate-400 text-sm mb-4">Dapatkan kabar terbaru dan insight industri langsung ke email Anda.</p>
            <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Berhasil berlangganan!'); }}>
              <input type="email" placeholder="Email Anda" className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-orange-500" required />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-r-lg font-bold transition-colors">Daftar</button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PT Sinar Cerah Sempurna. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
