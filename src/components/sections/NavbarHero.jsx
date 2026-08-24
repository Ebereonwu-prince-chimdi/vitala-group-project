function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#2b160c] sm:min-h-[650px] lg:min-h-[700px]">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1586554774726-f6a092243d72?auto=format&fit=crop&w=1600&q=80"
        alt="Woman"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* NAVBAR */}
      <nav className="relative z-50 flex w-full items-center justify-between gap-2 px-3 py-5 sm:px-6 md:px-10 lg:px-12">
        
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-1 text-xs font-semibold text-white sm:gap-2 sm:text-sm"
        >
          <span className="text-base sm:text-lg">✣</span>
          <span>Vitala</span>
        </a>

        {/* NAVIGATION LINKS - ALWAYS VISIBLE */}
        <div className="flex items-center gap-2 whitespace-nowrap text-[7px] uppercase tracking-wide text-white sm:gap-3 sm:text-[8px] md:gap-5 md:text-[10px] lg:gap-8">
          <a href="#about" className="transition hover:text-white/70">
            Why Vitala
          </a>

          <a href="#approach" className="transition hover:text-white/70">
            Impact
          </a>

          <a href="#company" className="transition hover:text-white/70">
            Company
          </a>

          <a href="#stories" className="transition hover:text-white/70">
            Stories
          </a>
        </div>

        {/* BOOK A DEMO BUTTON */}
        <a
          href="#contact"
          className="shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1.5 text-[7px] font-medium text-black transition hover:bg-white/80 sm:px-4 sm:py-2 sm:text-[9px] md:px-5 md:text-[10px]"
        >
          Book a Demo
        </a>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 px-4 pt-16 sm:px-6 sm:pt-20 md:px-10 md:pt-24 lg:px-12 lg:pt-28">
        <div className="max-w-[600px]">
          
          <h1 className="text-4xl font-medium leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Treat the cause.
            <br />
            Not the symptom.
          </h1>

          <p className="mt-5 max-w-[430px] text-xs leading-relaxed text-white/75 sm:text-sm">
            Vitala brings clinically-proven functional medicine to your whole
            workforce, reversing chronic conditions before they turn into claims.
          </p>

          {/* HERO BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-[10px] font-medium text-black transition hover:bg-white/85 sm:px-6 sm:py-3 sm:text-xs"
            >
              Book a Demo
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/40 px-5 py-2.5 text-[10px] font-medium text-white transition hover:bg-gray-200 hover:text-black sm:px-6 sm:py-3 sm:text-xs"
            >
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* TRUSTED USERS */}
      <div className="absolute bottom-5 left-4 z-30 flex items-center gap-2 sm:bottom-8 sm:left-6 sm:gap-3 md:left-10 lg:left-12">
        
        <div className="flex -space-x-2">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User 1"
            className="h-6 w-6 rounded-full border-2 border-[#3a1c0d] object-cover sm:h-8 sm:w-8"
          />

          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="User 2"
            className="h-6 w-6 rounded-full border-2 border-[#3a1c0d] object-cover sm:h-8 sm:w-8"
          />

          <img
            src="https://i.pravatar.cc/100?img=47"
            alt="User 3"
            className="h-6 w-6 rounded-full border-2 border-[#3a1c0d] object-cover sm:h-8 sm:w-8"
          />
        </div>

        <p className="text-[9px] text-white/80 sm:text-xs">
          Trusted by 10k+ people
        </p>
      </div>

      

          <div className="p-2 sm:p-3">
            <p className="text-[7px] uppercase tracking-wide text-black/60 sm:text-[9px]">
              Your health is more
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-wide text-black/60 sm:text-[9px]">
              than your symptoms
            </p>
          </div>
    </section>
  );
}

export default Hero;