import Image from 'next/image';

/**
 * TeamCard component for displaying team member information
 * Reusable component with image, name, and description
 */

interface TeamCardProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function TeamCard({
  name,
  description,
  imageSrc,
  imageAlt,
}: TeamCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-carbon-black-500 shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-cornflower-blue-400">
          {name}
        </h3>
        <p className="mt-2 text-sm text-eggshell-500">{description}</p>
      </div>
    </div>
  );
}
