import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      {/* Placeholder sections with proper heading hierarchy */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section
          id="services"
          className="mt-20"
          aria-labelledby="services-heading"
        >
          <h3
            id="services-heading"
            className="text-3xl font-bold text-carbon-black-500"
          >
            Our Services
          </h3>
          <p className="mt-4 text-carbon-black-400">
            Comprehensive construction services coming soon.
          </p>
        </section>

        <section id="about" className="mt-20" aria-labelledby="about-heading">
          <h3
            id="about-heading"
            className="text-3xl font-bold text-carbon-black-500"
          >
            About Us
          </h3>
          <p className="mt-4 text-carbon-black-400">
            Learn more about our company and team.
          </p>
        </section>

        <section
          id="contact"
          className="mt-20"
          aria-labelledby="contact-heading"
        >
          <h3
            id="contact-heading"
            className="text-3xl font-bold text-carbon-black-500"
          >
            Contact Us
          </h3>
          <p className="mt-4 text-carbon-black-400">
            Get in touch for your next project.
          </p>
        </section>
      </div>
    </main>
  );
}
