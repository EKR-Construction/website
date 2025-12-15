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
    <div className="overflow-hidden rounded-lg bg-carbon-black-700 shadow-lg">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold uppercase tracking-wide text-eggshell-500">
          {name}
        </h3>
        <p className="mt-2 text-sm text-eggshell-400">{description}</p>
      </div>
    </div>
  );
}
