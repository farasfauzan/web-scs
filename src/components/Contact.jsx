import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="contact-elem text-4xl md:text-5xl font-bold text-slate-900 mb-6">Hubungi Kami</h2>
            <p className="contact-elem text-lg text-slate-600 mb-12">Mari berkolaborasi untuk mewujudkan proyek impian Anda. Tim ahli kami siap memberikan konsultasi terbaik.</p>
            
            <div className="space-y-8">
              {[
                { icon: <MapPin />, title: "Kantor Pusat", detail: "Gedung Sinar Cerah Lt. 45, Jl. Sudirman Kav. 1, Jakarta 12190" },
                { icon: <Phone />, title: "Telepon", detail: "+62 21 555 8888" },
                { icon: <Mail />, title: "Email", detail: "contact@sinarcerahsempurna.co.id" },
              ].map((info, i) => (
                <div key={i} className="contact-elem flex items-start gap-6">
                  <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{info.title}</h4>
                    <p className="text-slate-600">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-elem bg-blue-900 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">Kirim Pesan</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Pesan berhasil dikirim! (Demo)"); }}>
                <div>
                  <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors" required />
                </div>
                <div>
                  <input type="email" placeholder="Alamat Email" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors" required />
                </div>
                <div>
                  <textarea placeholder="Pesan Anda" rows="4" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg">
                  <Send size={20} /> Kirim Sekarang
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
