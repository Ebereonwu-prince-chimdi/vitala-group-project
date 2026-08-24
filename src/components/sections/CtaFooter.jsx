
const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["For employers", "For employees", "Resources"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Accessibility"],
  },
];

export default function CtaFooter() {
  return (
    <footer className="bg-[#1C1C1A] text-white">
      {/* CTA */}
      <section className="px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#DF4F3D] px-6 py-12 md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Better care starts here
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Give your team a healthier way forward.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Bring personalized healthcare and wellbeing support to your
              organization.
            </p>

            <button
              type="button"
              className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1C1C1A] transition hover:bg-[#FFF5EB]"
            >
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-2xl font-semibold text-white"
            >
              Vitala
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
              Functional medicine built for healthier, stronger workplaces.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">
                {column.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="flex flex-col gap-4 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vitala. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

