function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 px-6 pt-24 text-white"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left Side */}
        <div>
          {/* Availability Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400"></span>

            <span className="text-sm font-medium text-green-400">
              Available for Collaboration
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Frontend Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">Saheed Yusuf</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            I build modern websites that bring ideas to life.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I'm a frontend developer focused on creating responsive,
            user-friendly and high-performance web experiences using React,
            JavaScript and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              View My Work
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Let's Talk
            </a>

            {/* Resume */}
            <a
              href="/Saheed-Yusuf-Resume.pdf"
              download
              className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Download Resume
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="mt-1 text-sm text-slate-500">
                Projects
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                React
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Main Stack
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                100%
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Responsive
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-2xl" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl shadow-cyan-400/10">
              <img
                src="/profile.jpg"
                alt="Saheed Yusuf"
                className="h-[450px] w-[320px] object-cover object-top sm:h-[500px] sm:w-[360px]"
              />
            </div>

            {/* Small Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 shadow-xl">
              <p className="text-xs text-slate-400">
                Currently building
              </p>

              <p className="mt-1 font-semibold text-cyan-400">
                React & Full Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

