import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { TransformationSection } from "@/components/sections/transformation";
import { SolutionSection } from "@/components/sections/solution";
import { ExpertsSection } from "@/components/sections/experts";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <SolutionSection />
        <ExpertsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="UKMPRO.ID Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-foreground">UKMPRO.ID</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-4">
                Memberdayakan UMKM Indonesia dengan kekuatan Artificial Intelligence untuk #NaikDerajat.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M8.5,18H6.5V9H8.5V18M7.5,8.2C6.67,8.2 6,7.53 6,6.7C6,5.87 6.67,5.2 7.5,5.2C8.33,5.2 9,5.87 9,6.7C9,7.53 8.33,8.2 7.5,8.2M18,18H16V13.37C16,12.27 15.96,10.87 14.5,10.87C13.04,10.87 12.79,12.05 12.79,13.29V18H10.79V9H12.7V9.92H12.75C13.25,9.06 14.17,8.77 15.2,8.77C17.43,8.77 18,10.26 18,12.89V18Z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07,3.252,0.148,4.771,1.691,4.919,4.919,0.058,1.265,0.069,1.645,0.069,4.85s-0.012,3.584-0.07,4.85c-0.148,3.227-1.669,4.771-4.919,4.919-1.266,0.058-1.644,0.07-4.85,0.07s-3.584-0.012-4.85-0.07c-3.252-0.148-4.771-1.691-4.919-4.919-0.058-1.265-0.07-1.645-0.07-4.85s0.012-3.584,0.07-4.85c0.148-3.227,1.669-4.771,4.919-4.919,1.266-0.057,1.645-0.069,4.85-0.069h0.002M12,0c-3.264,0-3.645,0.014-4.913,0.072-3.414,0.156-5.83,2.573-5.986,5.986-0.058,1.268-0.072,1.648-0.072,4.912s0.013,3.644,0.072,4.912c0.156,3.413,2.573,5.83,5.986,5.986,1.268,0.058,1.649,0.072,4.913,0.072s3.645-0.014,4.913-0.072c3.414-0.156,5.83-2.573,5.986-5.986,0.058-1.268,0.072-1.648,0.072-4.912s-0.013-3.644-0.072-4.912c-0.156-3.413-2.573-5.83-5.986-5.986-1.268-0.058-1.649-0.072-4.913-0.072h-0.001Z" />
                    <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162s2.759,6.162,6.162,6.162,6.162-2.759,6.162-6.162-2.759-6.162-6.162-6.162Zm0,10.162c-2.209,0-4-1.79-4-4s1.791-4,4-4,4,1.79,4,4-1.791,4-4,4Zm6.406-11.845c-0.74,0-1.344,0.604-1.344,1.344s0.604,1.344,1.344,1.344,1.344-0.604,1.344-1.344-0.604-1.344-1.344-1.344Z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.02 6.02,17.25 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Produk</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Fitur AI</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Harga</a></li>
                <li><a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kontak</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 UKMPRO.ID. Semua Hak Dilindungi.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Made with ❤️ for Indonesian UMKM 🇮🇩
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;