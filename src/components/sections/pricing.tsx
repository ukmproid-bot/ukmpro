import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set random countdown between 6-12 hours
    const randomHours = Math.floor(Math.random() * 7) + 6;
    let totalSeconds = randomHours * 3600;

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ hours, minutes, seconds });
      totalSeconds--;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    "Belajar bareng praktisi ahli (Pak Hery, Pak Dony, Kang Balya)",
    "Materi lengkap buat iklan video AI yang converting",
    "Panduan konten kreator video & gambar profesional", 
    "Website gratis tanpa koding + domain & hosting",
    "Materi ekspor mudah, jual produk ke seluruh dunia",
    "Trial BrandOwner AI selama 7 hari GRATIS",
    "Daily Google Meet dengan materi premium",
    "Template & script iklan yang terbukti viral",
    "Komunitas eksklusif sesama entrepreneur",
    "Support 24/7 dari tim UKMPRO.ID"
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-warning font-semibold text-lg">INVESTASI TERBAIK</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mt-4 mb-6">
            Investasi Sekali,{" "}
            <span className="text-gradient">Cuan Selamanya!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harga launching super special! Setelah promo berakhir, harga naik jadi Rp 1.999.999
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-3xl border-2 border-primary relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Glow Effects */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-secondary opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Side - Price & Urgency */}
                <div className="text-center lg:text-left">
                  {/* Scarcity Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-danger/20 border border-danger/30 text-danger font-bold mb-6">
                    🔥 PROMO TERBATAS - HANYA 100 SLOT!
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                    PAKET LENGKAP UMKM NAIK DERAJAT
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-2">
                      <span className="text-6xl md:text-7xl font-black text-gradient">
                        49K
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        1.999.999
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      *Harga normal Rp 1.999.999 (Diskon 97%!)
                    </p>
                  </div>

                  {/* Countdown Timer */}
                  <div className="glass-card p-6 rounded-2xl bg-danger/10 border border-danger/20 mb-8 max-w-sm mx-auto lg:mx-0">
                    <p className="text-sm font-semibold text-danger mb-3">⏰ Promo Berakhir Dalam:</p>
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {String(timeLeft.hours).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-muted-foreground">JAM</div>
                      </div>
                      <div className="text-2xl font-bold text-foreground">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {String(timeLeft.minutes).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-muted-foreground">MENIT</div>
                      </div>
                      <div className="text-2xl font-bold text-foreground">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-muted-foreground">DETIK</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full lg:w-auto btn-primary text-primary-foreground px-12 py-4 text-lg mb-4"
                  >
                    <a href="https://ukmpro.id/login-signup/#signup" target="_blank" rel="noopener noreferrer">
                      🚀 AMBIL PROMO 49K SEKARANG!
                    </a>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    ✅ Garansi 30 hari uang kembali jika tidak puas
                  </p>
                </div>

                {/* Right Side - Features */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center lg:text-left">
                    Yang Anda Dapatkan:
                  </h4>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-white" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Value Calculator */}
                  <div className="mt-8 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      💰 Total Nilai Jika Beli Terpisah:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>• Kursus Marketing: Rp 500K</div>
                      <div>• AI Tools: Rp 300K/bulan</div>
                      <div>• Website Builder: Rp 200K</div>
                      <div>• Mentoring: Rp 1M</div>
                    </div>
                    <div className="border-t border-primary/20 mt-2 pt-2">
                      <p className="text-sm font-bold text-gradient-primary">
                        Total: Rp 2.000.000++ 🤯
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-success">🔒</span>
              <span>Pembayaran Aman</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">📱</span>
              <span>Akses Selamanya</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">🏆</span>
              <span>Garansi Puas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">👥</span>
              <span>Komunitas Ekslusif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
