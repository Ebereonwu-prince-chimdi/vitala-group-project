function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#2b160c]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1586554774726-f6a092243d72?auto=format&fit=crop&w=1600&q=80"
        alt="Woman"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-white"
        >
          <span className="text-lg">✣</span>
          <span>Vitala</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 text-[10px] uppercase tracking-wider text-white/80 md:flex">
          <a href="#about" className="hover:text-white">
            Why Vitala
          </a>

          <a href="#approach" className="hover:text-white">
            Impact
          </a>

          <a href="#journal" className="hover:text-white">
            Company
          </a>

          <a href="#contact" className="hover:text-white">
            Stories
          </a>
        </div>

        {/* Book Button */}
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-[10px] font-medium text-black transition hover:bg-white/80"
        >
          Book a Demo
        </a>
          </nav>
       {/* HERO CONTENT */}
      <div className="relative z-10 px-6 pt-24 md:px-10 md:pt-28">
        <div className="max-w-[520px]">
          <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-white md:text-7xl">
            Treat the cause.
            <br />
            Not the symptom.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
                      Vitala brings clinically-proven functional medicine to your whole
                      workforce, reversing chronic conditions before theyturn into claims. 
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-medium text-black transition hover:bg-white/85"
            >
              Book a Demo
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/40 px-6 py-3 text-xs font-medium text-white transition hover:bg-gray-200 hover:text-black"
            >
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* TRUSTED USERS */}
      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 md:left-10">
        <div className="flex -space-x-2">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-[#3a1c0d]"
          />

          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-[#3a1c0d]"
          />

          <img
            src="https://i.pravatar.cc/100?img=47"
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-[#3a1c0d]"
          />
        </div>

        <p className="text-xs text-white/80">
          Trusted by 10k+ people
        </p>
      </div>

      

          <div className="p-3">
            <p className="text-[9px] uppercase tracking-wide text-black/60">
              Your health is more
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-wide text-black/60">
              than your symptoms
            </p>
          </div>
        
      
    </section>
  );
}

export default Hero;