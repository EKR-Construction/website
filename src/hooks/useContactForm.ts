import { useState, FormEvent } from 'react';
import {
  ContactFormData,
  ContactFormErrors,
  validateField,
  announceToScreenReader,
} from '@/lib/formValidation';

/**
 * Custom hook for managing contact form state and logic
 * Handles validation, submission, and form state management
 * Includes honeypot spam prevention
 */

type SubmitStatus = 'idle' | 'success' | 'error';

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  submitStatus: SubmitStatus;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectDetails: '',
    website: '', // Honeypot field
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  // Handle input change with validation
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field if it exists (skip honeypot field)
    if (name !== 'website' && errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle blur to show validation errors
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Skip honeypot field
    if (name === 'website') return;

    const error = validateField(name as keyof ContactFormData, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Validate all fields
  const validateForm = (): { isValid: boolean; errors: ContactFormErrors } => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((key) => {
      // Skip honeypot field validation
      if (key === 'website') return;

      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key as keyof ContactFormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return { isValid, errors: newErrors };
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Security: Check honeypot field - if filled, it's a bot
    if (formData.website) {
      console.warn('Honeypot triggered - potential bot submission');
      // Silently fail to avoid revealing the honeypot to bots
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
      }, 1500);
      return;
    }

    const validation = validateForm();
    if (!validation.isValid) {
      // Announce validation errors to screen readers
      const errorCount = Object.keys(validation.errors).length;
      const announcement = `Form has ${errorCount} error${errorCount !== 1 ? 's' : ''}. Please correct the errors and try again.`;
      announceToScreenReader(announcement);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Monday.com via API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Success
      setSubmitStatus('success');
      announceToScreenReader(
        'Your message has been sent successfully. We will get back to you soon.'
      );

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectDetails: '',
        website: '',
      });
    } catch (error) {
      // Error
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      announceToScreenReader(
        'There was an error sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
