import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-20 floating-element blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-secondary opacity-15 floating-element blur-2xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-24 h-24 rounded-full bg-gradient-accent opacity-25 floating-element blur-lg" style={{ animationDelay: '4s' }} />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground mb-8">
            ✨ Revolusi AI untuk UMKM Indonesia
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-6">
            Berhenti Jadi{" "}
            <span className="text-gradient">"Chief of Everything"</span>
            <br />
            di Bisnis Sendiri!
          </h1>
          
          {/* Subheadline */}
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Capek kerja kayak kuda tapi omzet <strong>segitu-gitu aja</strong>? 
            <br className="hidden md:block" />
            Saatnya AI yang kerja, Anda tinggal <span className="text-gradient-primary font-bold">hitung cuan!</span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">UMKM Terbantu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-secondary">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Peningkatan Omzet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-accent">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <div className="text-sm text-muted-foreground">AI Bekerja</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild
              size="lg"
              className="btn-primary text-primary-foreground px-8 py-4 text-lg"
            >
              <a href="https://ukmpro.id/login-signup">
                🚀 Mulai Revolusi Bisnis Saya!
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="btn-secondary px-8 py-4 text-lg"
            >
              <a href="#demo">
                📺 Lihat Demo Dulu
              </a>
            </Button>
          </div>
          
          {/* Trust Signal */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            🔥 <strong>Promo Terbatas!</strong> Hanya untuk 100 pendaftar pertama
          </p>
        </div>
      </div>
    </section>
  );
}