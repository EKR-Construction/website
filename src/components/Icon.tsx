import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  className?: string;
  ariaLabel?: string;
}

export default function Icon({ icon, className = '', ariaLabel }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  );
}
