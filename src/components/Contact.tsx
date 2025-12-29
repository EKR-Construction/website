'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { MAX_LENGTHS } from '@/lib/formValidation';
import ContactInfo from './ContactInfo';
import FormInput from './form/FormInput';
import FormTextarea from './form/FormTextarea';
import FormStatus from './form/FormStatus';
import HoneypotField from './form/HoneypotField';

/**
 * Contact section component with accessible form for client inquiries
 * Features two-column layout with contact info and quote request form
 * Includes honeypot spam prevention and input length limits
 */

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="bg-eggshell-500 py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info */}
          <ContactInfo />

          {/* Right Column - Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Request a quote form"
            >
              <FormInput
                id="fullName"
                name="fullName"
                label="Full Name"
                type="text"
                value={formData.fullName}
                error={errors.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={MAX_LENGTHS.fullName}
                placeholder="John Doe"
              />

              <FormInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={MAX_LENGTHS.email}
                placeholder="mike@ekr.construction"
              />

              <FormInput
                id="phone"
                name="phone"
                label="Phone Number"
                type="tel"
                value={formData.phone}
                error={errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={MAX_LENGTHS.phone}
                placeholder="(814) 720-9860"
              />

              <FormTextarea
                id="projectDetails"
                name="projectDetails"
                label="Project Details"
                value={formData.projectDetails}
                error={errors.projectDetails}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                maxLength={MAX_LENGTHS.projectDetails}
                placeholder="Tell us about your project..."
              />

              <HoneypotField value={formData.website} onChange={handleChange} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded bg-tomato-jam-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-tomato-jam-600 focus:outline-none focus:ring-2 focus:ring-tomato-jam-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <FormStatus status={submitStatus} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
