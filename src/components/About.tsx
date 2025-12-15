import {
  faGraduationCap,
  faPersonDress,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
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
                EKR Construction is a woman-owned, veteran-operated business
                founded on bringing military discipline, integrity, and
                accountability to every weld and fabrication. As a certified
                union shop, we uphold the highest standards of craftsmanship
                with unwavering attention to detail.
              </p>
              <p>
                By operating without a large fabrication shop and maintaining a
                lean, experienced team, we keep overhead low and pass those
                savings directly to our clients—without sacrificing capability.
                From small repairs to full custom fabrication and major
                installations, our family-run business prioritizes quality over
                volume, ensuring every job receives focused, professional
                attention.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <Icon
                  icon={faGraduationCap}
                  className="text-lg text-cornflower-blue-500"
                  ariaLabel="Certified"
                />
                <span className="text-sm font-semibold text-carbon-black-500">
                  Certified Union Welders
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon={faPersonDress}
                  className="text-lg text-cornflower-blue-500"
                  ariaLabel="Advantage"
                />
                <span className="text-sm font-semibold text-carbon-black-500">
                  Woman Owned
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon={faShield}
                  className="text-lg text-cornflower-blue-500"
                  ariaLabel="Advantage"
                />
                <span className="text-sm font-semibold text-carbon-black-500">
                  Veteran Operated
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About the mission */}
          <div className="flex items-center justify-center">
            <TeamCard
              name="STRIKE HOLD"
              description="Strike Hold defines how we work. We execute clean cuts, precise welds, and disciplined fabrication. Then we hold the standard, delivering work that withstands pressure, load, and time. No shortcuts. No weak joints. Just work that lasts."
              imageSrc="/images/about-welder.jpg"
              imageAlt="Mike Miller welding and fabricating"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
