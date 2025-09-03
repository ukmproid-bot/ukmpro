export function ProblemSection() {
  const problems = [
    {
      emoji: "😤",
      title: "Kerja Bagai Kuda, Hasil Segitu Aja",
      description: "Begadang tiap hari, weekend gak ada, tapi omzet mentok-mentok aja. Kapan kayanya?"
    },
    {
      emoji: "🤯", 
      title: "Semua Harus Dikerjain Sendiri",
      description: "Admin, CS, marketing, accounting, kurir... Literally jadi 'Chief of Everything Officer'!"
    },
    {
      emoji: "💸",
      title: "Rekrut Tim Mahal, Hasil Zonk",
      description: "Udah keluar modal buat gaji, tapi kerjanya gak sesuai harapan. Males banget!"
    },
    {
      emoji: "📱",
      title: "Bingung Cara Promosi Kekinian", 
      description: "Masih andalin WA status sama mulut ke mulut? Kompetitor udah pake strategi canggih!"
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-danger font-semibold text-lg">REALITA PAHIT</span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-6">
            Masih Mau Jadi{" "}
            <span className="text-gradient">Budak Korporat</span>
            <br />
            di Bisnis Sendiri?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kalo salah satu ini yang lagi Anda alami, berarti Anda butuh perubahan <strong>DRASTIS!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`glass-card-hover p-8 rounded-2xl border-l-4 border-danger animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{problem.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Hook */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-danger/10 to-warning/10 border border-danger/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              "Kayak Gini Terus Sampai Kapan?"
            </h3>
            <p className="text-lg text-muted-foreground">
              Liat kompetitor udah pake AI, otomatisasi, dan teknologi canggih. 
              Sementara Anda masih stuck di cara lama yang <strong>bikin lelah dan gak untung</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}