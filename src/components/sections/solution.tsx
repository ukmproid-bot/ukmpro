export function SolutionSection() {
  const features = [
    {
      icon: "💾",
      title: "Auto Simpan Profil Usaha",
      description: "AI otomatis nyimpen semua detail bisnis & produk Anda"
    },
    {
      icon: "🎬", 
      title: "Replikasi Video & Banner",
      description: "Gandakan konten iklan dalam hitungan detik"
    },
    {
      icon: "🤖",
      title: "Avatar Brand Ambassador", 
      description: "AI avatar yang jadi spokeperson bisnis Anda"
    },
    {
      icon: "🎨",
      title: "Flyer & Banner Otomatis",
      description: "Gak perlu pusing mikir design, AI yang bikin"
    },
    {
      icon: "🎥",
      title: "Prompt Video Sinematik",
      description: "Buat video kayak sutradara profesional"
    },
    {
      icon: "🔍",
      title: "Paket SEO Lengkap",
      description: "Judul clickbait + hashtag viral otomatis"
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-lg">SOLUSI REVOLUSIONER</span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-6">
            Kenalan Sama{" "}
            <span className="text-gradient">"BrandOwner AI"</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI canggih dari UKMPRO.ID yang bakal jadi <strong>asisten marketing terbaik</strong> 
            yang pernah Anda punya. Biarkan AI yang kerja, Anda fokus produksi dan hitung cuan!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card-hover p-6 rounded-2xl group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Special Feature Highlight */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  🎁 <span className="text-gradient">Bonus Melimpah!</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Kelola puluhan akun video, buat 1000 video Veo3/bulan <strong>GRATIS</strong>, 
                  plus otomatisasi & Capcut Pro website gratis! Dapet semua tools premium tanpa bayar lagi.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">Video/Bulan</div>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-secondary">∞</div>
                    <div className="text-xs text-muted-foreground">Akun Video</div>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-accent">24/7</div>
                    <div className="text-xs text-muted-foreground">Otomatisasi</div>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-primary">FREE</div>
                    <div className="text-xs text-muted-foreground">Pro Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}