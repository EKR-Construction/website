'use client';

import Button from './Button';
import StatCard from './StatCard';
import Badge from './Badge';
import {
  getYearsOfExperience,
  getYearsInBusiness,
  formatOrdinal,
  COMPANY_DATES,
  getStartYear,
} from '@/utils/dates';

/**
 * Hero section component with dynamic statistics
 * Displays main heading, subtitle, CTA buttons, and company metrics
 */
export default function Hero() {
  const yearsExperience = getYearsOfExperience(COMPANY_DATES.EXPERIENCE_START);
  const yearsInBusiness = getYearsInBusiness(COMPANY_DATES.ESTABLISHED);
  const yearEstablished = getStartYear(COMPANY_DATES.ESTABLISHED);

  return (
    <section
      className="relative flex min-h-[600px] items-center bg-carbon-black-500 bg-cover bg-center sm:min-h-[700px]"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
      aria-labelledby="hero-heading"
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-carbon-black-900 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Established Badge */}
          <div className="mb-6">
            <Badge variant="hero">Established {yearEstablished}</Badge>
          </div>

          {/* Main Heading */}
          <h2
            id="hero-heading"
            className="text-4xl font-bold uppercase leading-tight text-eggshell-500 sm:text-5xl lg:text-6xl"
          >
            Precision Welding
            <br />& Fabrication
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-base text-eggshell-500 sm:text-lg lg:text-xl">
            Union-trained expertise meets military discipline. Specializing in
            stainless steel, process piping, and mobile welding services for
            projects of all sizes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href="#contact"
              variant="accent"
              ariaLabel="Request a quote for your project"
            >
              Request Quote
            </Button>
            <Button
              href="#services"
              variant="primary"
              ariaLabel="View our welding and fabrication services"
            >
              Our Services
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid w-full grid-cols-1 gap-8 border-t border-eggshell-500 border-opacity-30 pt-12 sm:grid-cols-3">
            <StatCard
              value={yearsExperience}
              suffix="+"
              label="Years Experience"
            />
            <StatCard value="100%" label="Certified Welders" />
            <StatCard
              value={formatOrdinal(yearsInBusiness)}
              label="Year in Business"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
