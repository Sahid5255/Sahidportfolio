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

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
    </section>
  );
}

export default Skills;