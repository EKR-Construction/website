export default function Home() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold text-carbon-black-500">
          Building Excellence, One Project at a Time
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-carbon-black-400">
          Welcome to EKR Construction. We deliver professional construction
          services for residential and commercial projects with quality
          craftsmanship and reliable service you can trust.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contact"
            className="rounded bg-cornflower-blue-500 px-6 py-3 text-eggshell-50 transition-colors hover:bg-cornflower-blue-600 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-700 focus:ring-offset-2"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="rounded border-2 border-dusty-grape-500 bg-transparent px-6 py-3 text-dusty-grape-500 transition-colors hover:bg-dusty-grape-50 focus:outline-none focus:ring-2 focus:ring-dusty-grape-700 focus:ring-offset-2"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Placeholder sections with proper heading hierarchy */}
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

      <section id="contact" className="mt-20" aria-labelledby="contact-heading">
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
    </main>
  );
}
