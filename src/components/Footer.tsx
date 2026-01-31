import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-carbon-black-200 bg-dusty-grape-500"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-eggshell-50">
              EKR Construction
            </h2>
            <p className="text-sm text-eggshell-100">
              Woman-owned, veteran-operated welding and fabrication in
              Linesville, PA. Union-certified craftsmanship for every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-eggshell-50">
              Quick Links
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#services"
                    className="text-eggshell-100 hover:text-eggshell-50"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-eggshell-100 hover:text-eggshell-50"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-eggshell-100 hover:text-eggshell-50"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-eggshell-50">
              Contact
            </h2>
            <address className="not-italic text-sm text-eggshell-100">
              <p>
                Email:{' '}
                <a
                  href="mailto:mike@ekr.construction"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500 focus:ring-offset-2 focus:ring-offset-carbon-black-500"
                >
                  mike@ekr.construction
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+18147209860"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500 focus:ring-offset-2 focus:ring-offset-carbon-black-500"
                >
                  (814) 720-9860
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-dusty-grape-400 pt-8 text-center">
          <Image
            src="/images/EKR_eggshell.png"
            alt="EKR Construction"
            width={102}
            height={64}
            className="mx-auto mb-4 h-16"
          />
          <p className="text-sm text-eggshell-100">
            &copy; {currentYear} EKR Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
