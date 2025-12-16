import {
  faFire,
  faWrench,
  faTruck,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import Badge from './Badge';
import ServiceCard from './ServiceCard';
import ServiceCardWide from './ServiceCardWide';

/**
 * Services section component showcasing EKR's comprehensive welding solutions
 * Features grid layout with vertical and horizontal service cards
 */

export default function Services() {
  return (
    <section
      id="services"
      className="bg-carbon-black-500 py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <Badge variant="hero">Our Services</Badge>
          </div>

          <h2
            id="services-heading"
            className="text-3xl font-bold uppercase leading-tight text-eggshell-500 sm:text-4xl"
          >
            Comprehensive Solutions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-eggshell-400 sm:text-lg">
            Delivering certified union craftsmanship and precision welding
            services from small repairs to large-scale installations. Pride in
            every weld, quality you can trust.
          </p>
        </div>

        {/* Row 1: Three Service Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ServiceCard
            icon={faFire}
            title="Welding & Repair"
            description="Expert welding services for structural steel, aluminum, and specialty materials. From minor repairs to major fabrication projects."
            features={[
              'MIG, TIG & Stick Welding',
              'Structural & Architectural',
              'Emergency Repairs',
            ]}
          />

          <ServiceCard
            icon={faWrench}
            title="Pipe Fabrication"
            description="Custom pipe fabrication and installation for industrial, commercial, and residential applications with precision and reliability."
            features={[
              'Custom Pipe Fabrication',
              'Industrial & Commercial',
              'High-Purity Applications',
            ]}
          />

          <ServiceCard
            icon={faTruck}
            title="Mobile Services"
            description="On-site welding and fabrication services bringing our expertise directly to your location for maximum convenience and efficiency."
            features={[
              'On-Site Welding',
              'Field Repairs',
              'Emergency Response',
            ]}
          />
        </div>

        {/* Row 2: Two Wide Service Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ServiceCardWide
            icon={faFire}
            title="Stainless Steel Fabrication"
            description="Specialized stainless steel fabrication for sanitary, high-purity, and corrosion-resistant applications. Expert TIG welding for food grade, pharmaceutical, and industrial projects requiring the highest standards of cleanliness and precision."
          />

          <ServiceCardWide
            icon={faClipboardList}
            title="Project Management"
            description="Comprehensive project oversight from initial consultation through final installation. Coordinating all aspects of fabrication, delivery, and on-site work to ensure projects are completed on time, within budget, and to exact specifications."
          />
        </div>
      </div>
    </section>
  );
}
