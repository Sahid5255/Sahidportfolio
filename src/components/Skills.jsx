function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST APIs",
    "Responsive Design",
    "Node.js",
  ];

  return (
    <section id="skills" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies I work with.
          </h2>
        </div>

        {/* Mobile - Moving Skills */}
        <div className="relative overflow-hidden sm:hidden">
          <div className="flex w-max animate-skill-scroll">
            {/* First set */}
            <div className="flex gap-4 pr-4">
              {skills.map((skill) => (
                <div
                  key={`first-${skill}`}
                  className="whitespace-nowrap rounded-xl border border-slate-800 bg-slate-900 px-6 py-4 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex gap-4 pr-4">
              {skills.map((skill) => (
                <div
                  key={`second-${skill}`}
                  className="whitespace-nowrap rounded-xl border border-slate-800 bg-slate-900 px-6 py-4 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop - Normal Grid */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center font-medium transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile animation */}
      <style>
        {`
          @keyframes skillScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-skill-scroll {
            animation: skillScroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Skills;

