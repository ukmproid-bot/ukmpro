export function TransformationSection() {
  const beforeItems = [
    "Semua dikerjain sendiri, dari admin sampai kurir 🏃‍♀️",
    "Promosi andelin status WA & mulut ke mulut 📱",
    "Waktu habis, tenaga terkuras, hasil ya segitu aja 😴",
    "Stuck di pasar lokal, bingung cara berkembang 📍"
  ];

  const afterItems = [
    "AI jadi asisten pribadi, kerjaan rutin beres otomatis 🤖",
    "Konten promosi dibuatkan, jangkauan pasar lebih luas 🚀",
    "Kerja lebih cerdas, fokus strategi, omzet meroket 📈",
    "Siap bersaing, bahkan sampai ke pasar global 🌍"
  ];

  return (
    <section id="transformation" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-lg">TRANSFORMASI TOTAL</span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-6">
            Dari <span className="text-danger">UMKM Jadul</span> Jadi{" "}
            <span className="text-gradient">UMKM Canggih!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Liat perbedaannya! Ini yang bakal terjadi sama bisnis Anda setelah pake UKMPRO.ID
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Before Card */}
          <div className="animate-fade-in-left">
            <div className="glass-card p-8 rounded-2xl border-t-4 border-danger h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-danger/20 rounded-full mb-4">
                  <span className="text-3xl">😵</span>
                </div>
                <h3 className="text-2xl font-bold text-danger mb-2">
                  UMKM Model Lama
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "Usaha Mak-mak ke Mak-mak"
                </p>
              </div>
              
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-danger rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-danger/10 rounded-lg border border-danger/20">
                <p className="text-sm text-danger font-medium text-center">
                  💀 Hasil: Stress tinggi, profit rendah
                </p>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="animate-fade-in-right">
            <div className="glass-card p-8 rounded-2xl border-t-4 border-success h-full relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-primary opacity-20 rounded-full blur-2xl"></div>
              
              <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-success mb-2">
                  UMKM Powered by AI
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "Usaha Milenial Kekinian Mendunia"
                </p>
              </div>
              
              <div className="space-y-4 relative z-10">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20 relative z-10">
                <p className="text-sm text-gradient-primary font-bold text-center">
                  ✨ Hasil: Work-life balance, profit maksimal!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl text-muted-foreground mb-6">
            Pilihan ada di tangan Anda. Mau tetap stuck atau siap <strong>naik derajat</strong>?
          </p>
          <div className="inline-flex items-center gap-4 p-4 glass-card rounded-2xl">
            <span className="text-2xl">⏰</span>
            <p className="text-sm text-muted-foreground">
              Kompetitor gak akan nungguin Anda buat upgrade!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}