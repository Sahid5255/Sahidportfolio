import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mzeplrdj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's work together.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Have a project, job opportunity, or an idea you'd like to discuss?
            Feel free to send me a message or reach out directly on WhatsApp.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">
              Have a project in mind?
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              I'm always open to discussing new projects, freelance
              opportunities, collaborations, and interesting ideas.
            </p>

            {/* Email */}
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Email
              </p>

              <a
                href="mailto:Sahidwebstudio@gmail.com"
                className="mt-2 inline-block text-lg font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Sahidwebstudio@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                WhatsApp
              </p>

              <a
                href="https://wa.me/2347072936929"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-green-400 transition hover:text-green-300"
              >
                Chat with me on WhatsApp
                <span>↗</span>
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2347072936929"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
            >
              WhatsApp Me
              <span>↗</span>
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                ></textarea>
              </div>

              {/* Success */}
              {status === "success" && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
                  Your message has been sent successfully. I'll get back to
                  you soon.
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

