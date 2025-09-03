import HeryAvatar from "@/assets/pakgelas.jpg";
import DonyAvatar from "@/assets/pakdoni.jpg";
import BalyaAvatar from "@/assets/kangbalya.jpg";

export function ExpertsSection() {
  const experts = [
    {
      name: "Bpk Hery / Pak Gelas",
      role: "Owner Piranhamasbot",
      speciality: "Bot dominasi pencarian Google secara otomatis, praktisi SEO & Iklan Gratis",
      avatar: HeryAvatar,
      highlight: "SEO & Ads Expert"
    },
    {
      name: "Bpk Dony",
      role: "Owner UKM Mendunia & UKM Express",
      speciality: "Pakar ekspor produk ke mancanegara, membuka jalan produk UMKM Indonesia go international",
      avatar: DonyAvatar,
      highlight: "Export Specialist"
    },
    {
      name: "Kang Balya",
      role: "Owner Santridigital.net",
      speciality: "Praktisi Facebook Marketplace dan AI Enthusiast, ahli optimasi FBMP organic",
      avatar: BalyaAvatar,
      highlight: "AI Enthusiast"
    }
  ];

  return (
    <section id="experts" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-lg">MENTOR TERBAIK</span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-6">
            Dibimbing Langsung oleh{" "}
            <span className="text-gradient">Praktisi Ahli</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Belajar dari mereka yang sudah terbukti sukses di bidangnya masing-masing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className={`glass-card-hover p-8 rounded-2xl text-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-primary/30 object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {expert.highlight}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-2">{expert.name}</h3>
              <p className="text-primary font-semibold mb-4">{expert.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {expert.speciality}
              </p>

              {/* Success indicator */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-sm font-medium text-foreground">Mentor Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Belajar Langsung dari <span className="text-gradient">Yang Terbaik!</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Tidak ada teori kosong. Semua pengalaman nyata dari praktisi yang sudah membuktikan kesuksesannya.
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-success">🎯</span>
                <span>Pengalaman Nyata</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">🚀</span>
                <span>Hasil Terbukti</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">💡</span>
                <span>Strategi Jitu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

