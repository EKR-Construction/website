export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ekr.construction',
    name: 'EKR Construction',
    description:
      'Woman-owned, veteran-operated welding and fabrication services. Specializing in stainless steel, process piping, and mobile welding.',
    url: 'https://ekr.construction',
    telephone: '+1-814-720-9860',
    email: 'mike@ekr.construction',
    address: {
      '@type': 'PostalAddress',
      postOfficeBoxNumber: '171',
      addressLocality: 'Linesville',
      addressRegion: 'PA',
      postalCode: '16424',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.6414,
      longitude: -80.4273,
    },
    image: 'https://ekr.construction/og-image.png',
    logo: 'https://ekr.construction/images/EKR_eggshell.png',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
        description: 'Emergency calls available 24/7',
      },
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Northwestern Pennsylvania',
      description: 'Serving from Erie to I-80 corridor',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Welding & Fabrication Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Welding & Repair',
            description:
              'Expert welding services for structural steel, aluminum, and specialty materials.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Piping',
            description:
              'Custom process pipe fabrication and installation for industrial and commercial applications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sanitary Piping',
            description:
              'Sanitary stainless steel piping for food, beverage, pharmaceutical, and high-purity applications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Welding Services',
            description: 'On-site welding and fabrication services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stainless Steel Fabrication',
            description:
              'Specialized stainless steel fabrication for sanitary, high-purity, and corrosion-resistant applications.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
