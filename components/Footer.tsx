import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-harbor text-cream/80 font-sans">
      <div className="container-wide py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <p className="font-display text-cream text-xl mb-3">
              The Quissett Landing
            </p>
            <p className="text-sm leading-relaxed text-cream/60">
              245 Woods Hole Road<br />
              Falmouth, MA 02540
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              {[
                ["The Property", "/property"],
                ["The Area", "/area"],
                ["Our Story", "/about"],
                ["Book Direct", "/book"],
                ["Contact", "/contact"],
                ["Policies", "/policies"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-4">Get in touch</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:6173475660" className="hover:text-cream transition-colors">
                  617-347-5660
                </a>
              </li>
              <li>
                <a href="mailto:thequissettlanding@gmail.com" className="hover:text-cream transition-colors break-all">
                  thequissettlanding@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Also on</p>
              <div className="flex gap-4 text-sm">
                <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                  Airbnb
                </a>
                <a href="https://www.vrbo.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                  VRBO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} The Quissett Landing. All rights reserved.</p>
          <Link href="/policies" className="hover:text-cream/60 transition-colors">
            Policies & House Rules
          </Link>
        </div>
      </div>
    </footer>
  );
}
