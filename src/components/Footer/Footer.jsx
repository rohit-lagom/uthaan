import {
  LogoFooter,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "../../assets/assets.js";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Home", url: "#home" },
      { label: "About Us", url: "#about" },
      { label: "Contact", url: "#contact" },
    ],
  },
  {
    title: "Other pages",
    links: [
      { label: "Services", url: "#services" },
      { label: "Blog", url: "#blog" },
      { label: "404", url: "/404" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Landscaping works", url: "#landscaping" },
      { label: "Irrigation systems", url: "#irrigation" },
      { label: "Garden design", url: "#design" },
    ],
  },
];

const socialIcons = [
  {
    icon: Facebook,
    alt: "Facebook",
    url: "#",
  },
  {
    icon: Twitter,
    alt: "Twitter",
    url: "#",
  },
  {
    icon: Instagram,
    alt: "Instagram",
    url: "#",
  },
  {
    icon: Youtube,
    alt: "YouTube",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 text-slate-900 pt-24 pb-16 px-6 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-2xl" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container  max-w-7xl mx-auto lg:px-6 relative z-10">
        <div className=" bg-white/60 backdrop-blur-xl border border-white/90 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col gap-8 max-w-sm">
            <a href="/" aria-label="Home">
              <img src={LogoFooter} alt="Uthaan Logo" className="w-40" />
            </a>
            <p className="text-slate-700 leading-relaxed">
              Unleash the full potential of your{" "}
              <span className="lg:block sm:inline">outdoor space.</span>
            </p>
            <div className="flex gap-5 mt-2">
              {socialIcons.map(({ icon, alt, url }) => (
                <a
                  key={alt}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                >
                  <img
                    src={icon}
                    alt={`${alt} Icon`}
                    className="w-5 h-5 hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-grow">
            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h4 className="mb-6 font-semibold text-xl text-slate-900">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map(({ label, url }) => (
                    <li key={label}>
                      <a
                        href={url}
                        className="text-slate-700 hover:text-emerald-600 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
