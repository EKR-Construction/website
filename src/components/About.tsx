import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import TeamCard from './TeamCard';
import Badge from './Badge';

/**
 * About section component showcasing company story and team
 * Two-column layout: company information on left, featured team member on right
 */
export default function About() {
  return (
    <section
      id="about"
      className="bg-eggshell-500 py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Company Story */}
          <div className="flex flex-col justify-center">
            {/* About Badge */}
            <div className="mb-4 self-start">
              <Badge variant="section">About EKR</Badge>
            </div>

            <h2
              id="about-heading"
              className="text-3xl font-bold uppercase leading-tight text-carbon-black-500 sm:text-4xl"
            >
              Military Precision.
              <br />
              Union Excellence.
            </h2>

            <div className="mt-6 space-y-4 text-base text-carbon-black-500 sm:text-lg">
              <p>
                EKR Welding & Fabrication was founded on bring military
                discipline and commitment to every weld and fabrication. As a
                certified union shop, we combine the highest standards of
                craftsmanship with unwavering attention to detail.
              </p>
              <p>
                With no large fabrication shop and a lean team, we&apos;re
                perfectly positioned to handle both small repairs and major
                installations. Our family-run business prioritizes quality over
                quantity. We stay lean so priorities always stay set on quality
                of work.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <Icon
                  icon={faCircleCheck}
                  className="text-lg text-cornflower-blue-500"
                  ariaLabel="Certified"
                />
                <span className="text-sm font-semibold text-carbon-black-500">
                  Certified Union Welders
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon={faCircleCheck}
                  className="text-lg text-cornflower-blue-500"
                  ariaLabel="Advantage"
                />
                <span className="text-sm font-semibold text-carbon-black-500">
                  Small And Nimble
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Team Member */}
          <div className="flex items-center justify-center">
            <TeamCard
              name="Eddie Kilar"
              description="'Strike Hold' - our motto reflecting commitment to precision. Union-trained journeyman in stainless TIG welding with certifications in process piping and structural welding. Every weld executed with military discipline."
              imageSrc="/images/about-welder.jpg"
              imageAlt="Eddie Kilar welding with blue arc"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
