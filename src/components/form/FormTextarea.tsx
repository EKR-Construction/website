/**
 * Reusable textarea component with validation and accessibility features
 * Used for longer text inputs like messages or descriptions
 */

interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextarea({
  id,
  name,
  label,
  value,
  error,
  placeholder,
  rows = 5,
  maxLength,
  required = true,
  onChange,
  onBlur,
}: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-carbon-black-500"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        maxLength={maxLength}
        className={`w-full rounded border px-4 py-2.5 text-carbon-black-500 placeholder-carbon-black-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          error
            ? 'border-tomato-jam-500 focus:border-tomato-jam-500 focus:ring-tomato-jam-500'
            : 'border-carbon-black-200 focus:border-cornflower-blue-500 focus:ring-cornflower-blue-500'
        }`}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-tomato-jam-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
