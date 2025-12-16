import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon from './Icon';

/**
 * ServiceCardWide component for displaying services in horizontal layout
 * Used in 2-column grid with icon on left and content on right
 */

interface ServiceCardWideProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function ServiceCardWide({
  icon,
  title,
  description,
}: ServiceCardWideProps) {
  return (
    <div className="rounded-lg bg-dusty-grape-500 p-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
        {/* Icon Column */}
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-tomato-jam-500">
            <Icon
              icon={icon}
              className="text-2xl text-eggshell-500"
              ariaLabel={title}
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-bold uppercase text-eggshell-500">
            {title}
          </h3>
          <p className="text-sm text-eggshell-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
