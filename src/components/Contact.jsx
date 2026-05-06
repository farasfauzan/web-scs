import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  
  // State form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
      alert("Maaf, terjadi kesalahan saat mengirim pesan. Pastikan Anda sudah mengatur konfigurasi Firebase dengan benar.");
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#f5f5f7] dark:bg-[#000000] relative transition-colors duration-700">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="contact-elem text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 transition-colors duration-700">Hubungi<br/>Kami.</h2>
            <p className="contact-elem text-lg text-slate-600 dark:text-slate-400 mb-12 transition-colors duration-700">Mari berkolaborasi untuk mewujudkan proyek impian Anda. Tim ahli kami siap memberikan konsultasi terbaik.</p>
            
            <div className="space-y-8">
              {[
                { icon: <MapPin />, title: "Kantor Pusat", detail: "Gedung Sinar Cerah Lt. 45, Jl. Sudirman Kav. 1, Jakarta 12190" },
                { icon: <Phone />, title: "Telepon", detail: "+62 21 555 8888" },
                { icon: <Mail />, title: "Email", detail: "contact@sinarcerahsempurna.co.id" },
              ].map((info, i) => (
                <div key={i} className="contact-elem flex items-start gap-6">
                  <div className="w-14 h-14 bg-white dark:bg-[#1d1d1f] shadow-sm text-slate-900 dark:text-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-700">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-700">{info.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors duration-700">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-elem bg-white dark:bg-[#1d1d1f] rounded-[3rem] p-10 md:p-14 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-700">
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-600/30 dark:bg-blue-500/10 rounded-full blur-3xl z-0 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-700">Kirim Pesan</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Lengkap" className="interactive w-full bg-[#f5f5f7] dark:bg-[#000000] border border-slate-200 dark:border-slate-700 rounded-[2rem] px-8 py-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors duration-700" required disabled={status === 'loading'} />
                </div>
                <div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Alamat Email" className="interactive w-full bg-[#f5f5f7] dark:bg-[#000000] border border-slate-200 dark:border-slate-700 rounded-[2rem] px-8 py-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors duration-700" required disabled={status === 'loading'} />
                </div>
                <div>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Pesan Anda" rows="4" className="interactive w-full bg-[#f5f5f7] dark:bg-[#000000] border border-slate-200 dark:border-slate-700 rounded-[2rem] px-8 py-5 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors duration-700 resize-none" required disabled={status === 'loading'}></textarea>
                </div>
                <button type="submit" disabled={status === 'loading' || status === 'success'} className="interactive w-full bg-slate-900 dark:bg-white hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed text-white dark:text-slate-900 font-bold text-lg py-5 rounded-[2rem] flex items-center justify-center gap-2 transition-all shadow-md mt-4">
                  {status === 'idle' && <><Send size={20} /> Kirim Sekarang</>}
                  {status === 'loading' && <><Loader2 size={20} className="animate-spin" /> Mengirim...</>}
                  {status === 'success' && <><CheckCircle2 size={20} /> Terkirim!</>}
                  {status === 'error' && <><Send size={20} /> Coba Lagi</>}
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
