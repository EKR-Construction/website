/**
 * Form validation utilities and constants
 * Shared validation logic for contact forms and other forms across the app
 */

// Security: Input length limits to prevent payload attacks
export const MAX_LENGTHS = {
  fullName: 100,
  email: 254, // RFC 5321 maximum email length
  phone: 30,
  projectDetails: 2000,
} as const;

// Validation regex patterns
export const VALIDATION_PATTERNS = {
  // Simple email validation - browser's type="email" does heavy lifting
  email: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[\d\s\-\(\)]+$/,
} as const;

// Form field types
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectDetails: string;
  website: string; // Honeypot field - should remain empty
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
}

// Field validation function
export const validateField = (
  name: keyof ContactFormData,
  value: string
): string => {
  switch (name) {
    case 'fullName':
      if (!value.trim()) return 'Full name is required';
      if (value.trim().length < 2)
        return 'Full name must be at least 2 characters';
      if (value.length > MAX_LENGTHS.fullName)
        return `Full name must be less than ${MAX_LENGTHS.fullName} characters`;
      return '';

    case 'email':
      if (!value.trim()) return 'Email address is required';
      if (!VALIDATION_PATTERNS.email.test(value))
        return 'Please enter a valid email address';
      if (value.length > MAX_LENGTHS.email)
        return `Email must be less than ${MAX_LENGTHS.email} characters`;
      return '';

    case 'phone':
      if (!value.trim()) return 'Phone number is required';
      if (!VALIDATION_PATTERNS.phone.test(value))
        return 'Please enter a valid phone number';
      if (value.length > MAX_LENGTHS.phone)
        return `Phone number must be less than ${MAX_LENGTHS.phone} characters`;
      return '';

    case 'projectDetails':
      if (!value.trim()) return 'Project details are required';
      if (value.trim().length < 10)
        return 'Please provide more details (at least 10 characters)';
      if (value.length > MAX_LENGTHS.projectDetails)
        return `Project details must be less than ${MAX_LENGTHS.projectDetails} characters`;
      return '';

    case 'website':
      // Honeypot field - should always be empty
      return '';

    default:
      return '';
  }
};

// Announce message to screen readers (accessibility helper)
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
};
