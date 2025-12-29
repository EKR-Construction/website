import { ReactNode } from 'react';
import Image from 'next/image';

/**
 * TwoColumnCallout component for displaying content with an image
 * Responsive layout: stacked on mobile, two columns on desktop
 */

type CalloutVariant = 'primary';

interface TwoColumnCalloutProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  variant?: CalloutVariant;
  className?: string;
}

const variantStyles: Record<CalloutVariant, string> = {
  primary: 'bg-dusty-grape-500',
};

export default function TwoColumnCallout({
  children,
  imageSrc,
  imageAlt,
  variant = 'primary',
  className = '',
}: TwoColumnCalloutProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg ${variantStyles[variant]} ${className}`}
    >
      <div className="grid grid-cols-1 gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-8">
        {/* Left Column: Content */}
        <div className="flex flex-col">{children}</div>

        {/* Right Column: Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={300}
            className="h-[200px] w-auto rounded-lg sm:h-[250px] lg:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
