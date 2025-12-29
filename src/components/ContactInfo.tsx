import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from './Badge';

/**
 * Contact information sidebar component
 * Displays company contact details with icons
 */

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-4">
        <Badge variant="section">Get In Touch</Badge>
      </div>

      <h2
        id="contact-heading"
        className="mb-6 text-4xl font-bold uppercase leading-tight text-carbon-black-500 sm:text-5xl"
      >
        Request A <span className="text-tomato-jam-500">Quote</span>
      </h2>

      <p className="mb-8 text-base leading-relaxed text-carbon-black-400 sm:text-lg">
        Ready to start your project? Contact us today for a free consultation
        and quote. We&apos;re here to serve with precision and professionalism.
      </p>

      {/* Contact Information */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <FontAwesomeIcon
            icon={faPhone}
            className="mt-1 h-5 w-5 text-cornflower-blue-500"
            aria-hidden="true"
          />
          <div>
            <div className="text-sm text-carbon-black-400">Call Us</div>
            <a
              href="tel:+18147209860"
              className="text-lg font-semibold text-carbon-black-500 hover:text-cornflower-blue-500 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500 focus:ring-offset-2"
            >
              (814) 720-9860
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mt-1 h-5 w-5 text-cornflower-blue-500"
            aria-hidden="true"
          />
          <div>
            <div className="text-sm text-carbon-black-400">Email Us</div>
            <a
              href="mailto:mike@ekr.construction"
              className="text-lg font-semibold text-carbon-black-500 hover:text-cornflower-blue-500 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500 focus:ring-offset-2"
            >
              mike@ekr.construction
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mt-1 h-5 w-5 text-cornflower-blue-500"
            aria-hidden="true"
          />
          <div>
            <div className="text-sm text-carbon-black-400">Location</div>
            <div className="text-lg font-semibold text-carbon-black-500">
              Linesville, PA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
