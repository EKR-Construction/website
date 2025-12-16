import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      <About />

      <Services />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
