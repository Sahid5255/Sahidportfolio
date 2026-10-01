function Education() {
  const education = [
    {
      year: "University",
      title: "B.Sc. Mathematics",
      school: "Osun State University",
      description:
        "Studied Mathematics, developing strong analytical, logical, and problem-solving skills that support my approach to software development.",
    },
    {
      year: "Professional Training",
      title: "Web Development",
      school: "Aptech Computer Education",
      description:
        "Developed practical skills in web development, including building responsive websites and working with modern frontend technologies.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            My Educational Journey
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            My academic background and professional training have helped me
            develop the analytical and technical skills I use in web
            development.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {item.year}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 font-medium text-cyan-400">
                {item.school}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

