import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import TeamCard from './TeamCard';

/**
 * About section component showcasing company story and team
 * Two-column layout: company information on left, featured team member on right
 */
export default function About() {
  return (
    <section
      id="about"
      className="bg-eggshell-50 py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Company Story */}
          <div className="flex flex-col justify-center">
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

            {/* Feature Badges */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3 rounded-lg border-2 border-cornflower-blue-500 bg-eggshell-50 px-4 py-3">
                <Icon
                  icon={faCircleCheck}
                  className="text-xl text-cornflower-blue-500"
                  ariaLabel="Certified"
                />
                <span className="font-semibold text-carbon-black-500">
                  Certified Union Welders
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border-2 border-cornflower-blue-500 bg-eggshell-50 px-4 py-3">
                <Icon
                  icon={faCircleCheck}
                  className="text-xl text-cornflower-blue-500"
                  ariaLabel="Advantage"
                />
                <span className="font-semibold text-carbon-black-500">
                  Small And Nimble
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Team Member */}
          <div className="flex items-center justify-center">
            <TeamCard
              name="Eddie Kilar"
              description="Union-trained journeyman in stainless TIG welding with certifications in process piping and structural welding. Committed to precision in every project."
              imageSrc="/images/team-eddie.jpg"
              imageAlt="Eddie Kilar welding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
