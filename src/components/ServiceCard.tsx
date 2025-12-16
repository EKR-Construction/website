import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

/**
 * ServiceCard component for displaying services in vertical layout
 * Used in 3-column grid with icon, title, description, and checklist
 */

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="rounded-lg bg-dusty-grape-500 p-6">
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded bg-tomato-jam-500">
          <Icon
            icon={icon}
            className="text-2xl text-eggshell-500"
            ariaLabel={title}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-bold uppercase text-eggshell-500">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm text-eggshell-400">{description}</p>

      {/* Features Checklist */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Icon
              icon={faCheck}
              className="mt-0.5 text-sm text-eggshell-500"
              ariaLabel="Included"
            />
            <span className="text-sm text-eggshell-400">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
