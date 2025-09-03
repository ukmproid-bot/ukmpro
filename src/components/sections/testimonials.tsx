export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rina Sari",
      role: "Owner Kopi Senja",
      avatar: "https://i.pravatar.cc/100?u=rina",
      content: "Setelah pakai BrandOwner AI, konten promosi saya jadi profesional banget! Video iklan, caption, banner semua auto keren. Omzet naik 300% dalam 2 bulan. Customer bilang brand saya keliatan premium!",
      rating: 5,
      highlight: "Omzet naik 300%"
    },
    {
      name: "Budi Pratama",
      role: "Juragan Kaos Kreatif", 
      avatar: "https://i.pravatar.cc/100?u=budi",
      content: "Dulu saya habiskan 8 jam sehari cuma buat bikin konten. Sekarang BrandOwner AI bikinin semua dalam 30 menit! Waktu lebih banyak buat produksi, hasil penjualan meningkat drastis.",
      rating: 5,
      highlight: "Hemat 7.5 jam/hari!"
    },
    {
      name: "Siti Aminah",
      role: "Founder Gaya Hijab",
      avatar: "https://i.pravatar.cc/100?u=siti", 
      content: "Berkat kelas ekspor UKMPRO.ID, produk hijab saya sekarang sampai ke Malaysia dan Brunei! BrandOwner AI bantu buat konten yang cocok buat pasar internasional. Alhamdulillah rezeki makin berkah!",
      rating: 5,
      highlight: "Ekspor ke Malaysia!"
    },
    {
      name: "Dedy Kurniawan",
      role: "Owner Warung Nasi Gudeg",
      avatar: "https://i.pravatar.cc/100?u=dedy",
      content: "Konten promosi yang dibuat BrandOwner AI bikin warung saya keliatan modern dan profesional. Dari sepi jadi rame, omzet naik 250%. Bahkan ada turis asing yang datang karena liat konten kita!",
      rating: 5,
      highlight: "Omzet naik 250%"
    },
    {
      name: "Maya Indri",
      role: "Cake & Bakery Maya",
      avatar: "https://i.pravatar.cc/100?u=maya",
      content: "Dulu saya stress tiap hari bikin konten IG dan TikTok. Sekarang BrandOwner AI yang handle semua! Saya tinggal fokus baking. Waktu luang jadi banyak, order meningkat 400%!",
      rating: 5,
      highlight: "Order naik 400%"
    },
    {
      name: "Agus Santoso", 
      role: "Toko Elektronik Agus",
      avatar: "https://i.pravatar.cc/100?u=agus",
      content: "Ikut kelas ekspor pak Dony, sekarang produk elektronik saya udah sampai Singapura! BrandOwner AI bantu buat konten yang sesuai standar internasional. Bisnis naik level banget!",
      rating: 5,
      highlight: "Ekspor ke Singapura!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-success font-semibold text-lg">TESTIMONI NYATA</span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-6">
            Kata Mereka yang Udah{" "}
            <span className="text-gradient">#NaikDerajat</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jangan percaya kata kami. Dengerin langsung cerita sukses mereka yang udah rasain dampaknya!
          </p>
        </div>

        {/* Video Testimonial */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-4 rounded-2xl">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/apyx58CbvVw" 
                title="UKMPRO.ID Success Stories"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                🎬 Liat langsung gimana UKMPRO.ID mengubah bisnis mereka
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`glass-card-hover p-8 rounded-2xl animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-warning text-lg">⭐</span>
                ))}
              </div>
              
              {/* Highlight Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary/20 text-primary text-xs font-semibold mb-4">
                {testimonial.highlight}
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bergabung dengan <span className="text-gradient">1000+ UMKM</span> Lainnya!
            </h3>
            <p className="text-muted-foreground mb-6">
              Mereka udah mulai, kapan giliran Anda? Jangan sampai ketinggalan kereta cuan!
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold border-2 border-background">
                  +1K
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">1000+ UMKM</p>
                <p className="text-xs text-muted-foreground">Udah upgrade bisnis mereka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}