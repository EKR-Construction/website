export default function Header() {
  return (
    <header className="border-b border-carbon-black-200 bg-eggshell-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-carbon-black-500">
            EKR Construction
          </h1>
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <a
                href="#services"
                className="text-carbon-black-500 hover:text-cornflower-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-carbon-black-500 hover:text-cornflower-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-carbon-black-500 hover:text-cornflower-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
