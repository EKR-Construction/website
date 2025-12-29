/**
 * Honeypot field component for spam prevention
 * Hidden from real users, visible to bots
 * If filled out, the form submission is treated as spam
 */

interface HoneypotFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <div
      className="absolute"
      style={{
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <label htmlFor="website">Website (leave blank if you are human)</label>
      <input
        type="text"
        id="website"
        name="website"
        value={value}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
