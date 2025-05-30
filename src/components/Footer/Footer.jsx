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
    url: "https://facebook.com", 
  },
  {
    icon: Twitter,
    alt: "Twitter",
    url: "https://twitter.com", 
  },
  {
    icon: Instagram,
    alt: "Instagram",
    url: "https://instagram.com", 
  },
  {
    icon: Youtube,
    alt: "YouTube",
    url: "https://youtube.com", 
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200  px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className="flex flex-col gap-8 max-w-sm pr-20">
          <a href="/" aria-label="Home">
            <img src={LogoFooter} alt="Gardener Logo" className="w-40" />
          </a>
          <p className="text-gray-600 leading-relaxed">
            Unleash the full potential of your{" "}
            <span className="lg:block sm:inline">outdoor space.</span>
          </p>
          <div className="flex gap-6 mt-2">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-grow">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-6 font-semibold text-xl text-gray-900">{title}</h4>
              <ul className="space-y-4">
                {links.map(({ label, url }) => (
                  <li key={label}>
                    <a
                      href={url}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
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
    </footer>
  );
};

export default Footer;
