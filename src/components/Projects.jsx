function Projects() {
  const projects = [
    {
      title: "IFEOLUWA Website",
      description:
        "A modern product website built for a chemical and household products business, with product browsing and WhatsApp ordering.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://ifeoluwa-chemical-llxd.vercel.app/",
      image: "/ifeoluwa-dashboard.png",
    },
    {
      title: "SahidMovie Likes",
      description:
        "A movie discovery and watchlist platform where users can search for Studio Ghibli films, like movies, view details, and build their personal watchlist.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      link: "https://netflix-clone-one-ruby-54.vercel.app/",
      image: "/sahidmovie.png",
    },
    {
      title: "Music Lyrics Anime Promo",
      description:
        "A creative music promotion platform designed to showcase lyric videos, anime-style visuals, and promotional content for upcoming artists.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://music-lyrics-anime-promo.vercel.app/",
      image: "/music-promo.png",
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Some things I've built.
          </h2>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition hover:-translate-y-2 hover:border-cyan-400/50"
            >
              {/* Project Image */}
              <div className="h-40 overflow-hidden bg-slate-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl font-bold text-cyan-400">
                      &lt;/&gt;
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

