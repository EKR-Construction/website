/**
 * Form status message component
 * Displays success or error messages with ARIA live region for accessibility
 */

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
}

export default function FormStatus({ status }: FormStatusProps) {
  if (status === 'idle') {
    return null;
  }

  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="mt-4">
      {status === 'success' && (
        <p className="rounded bg-green-50 p-3 text-sm text-green-800">
          Thank you for your message! We&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded bg-tomato-jam-50 p-3 text-sm text-tomato-jam-700">
          There was an error sending your message. Please try again or contact
          us directly.
        </p>
      )}
    </div>
  );
}
