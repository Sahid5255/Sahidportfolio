function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Turning ideas into digital experiences.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="leading-8 text-slate-400">
              I'm a frontend developer who enjoys creating clean, responsive
              and interactive websites. I work mainly with HTML, CSS,
              JavaScript, React and Tailwind CSS.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I focus on building websites that are not only visually
              attractive but also easy to use, responsive across devices and
              structured for real-world business needs.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I'm also expanding my backend development skills with Node.js
              and modern backend technologies so I can build complete
              full-stack applications.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-semibold">Frontend</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Building modern and responsive interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-semibold">Responsive</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Websites that work across phones, tablets and desktops.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Clean code and optimized user experiences.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-lg font-semibold">Learning</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Constantly improving my development skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;