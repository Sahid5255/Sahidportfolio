function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Saheed Yusuf. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/Sahid5255"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;