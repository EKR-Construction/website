'use client';

import { useState } from 'react';
import { faFire, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#our-team', label: 'Our Team' },
  ];

  return (
    <header className="bg-carbon-black-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-tomato-jam-500">
            <Icon
              icon={faFire}
              className="text-2xl text-eggshell-500"
              ariaLabel="EKR Construction logo"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-eggshell-500">
              EKR<span className="hidden sm:inline"> CONSTRUCTION</span>
            </h1>
            <p className="text-sm font-semibold text-cornflower-blue-400">
              STRIKE HOLD
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-eggshell-500 transition-colors hover:text-cornflower-blue-500 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500 focus:ring-offset-2 focus:ring-offset-carbon-black-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contact" variant="accent" ariaLabel="Get a quote">
                Contact EKR
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-eggshell-500 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <Icon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-carbon-black-400 bg-carbon-black-600 md:hidden"
        >
          <ul className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-eggshell-500 transition-colors hover:text-cornflower-blue-500 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#contact"
                variant="accent"
                className="w-full text-center"
                ariaLabel="Contact EKR"
              >
                Contact EKR
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
