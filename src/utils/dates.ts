/**
 * Date utility functions for calculating business metrics
 */

/**
 * Calculate years of experience since a given start date
 * TODO: Verify June 2017 date with Mike
 * @param startDate - The start date for experience calculation
 * @returns Number of years of experience (rounded down)
 */
export function getYearsOfExperience(startDate: Date): number {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears);
}

/** Just returns the founded year */
export function getStartYear(startDate: Date): number {
  return startDate.getFullYear();
}

/**
 * Calculate years in business since company establishment
 * @param establishedDate - The date the company was established
 * @returns Number of full years in business
 */
export function getYearsInBusiness(establishedDate: Date): number {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - establishedDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears);
}

/**
 * Calculate years in married
 * @param marriedDate - The date Mike an Em tied the knot
 * @returns Number of full years married
 */
export function getYearsMarried(marriedDate: Date): number {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - marriedDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears);
}

/**
 * Get ordinal suffix for a number (1st, 2nd, 3rd, 4th, etc.)
 * @param num - The number to get the ordinal suffix for
 * @returns The ordinal suffix (st, nd, rd, or th)
 */
export function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;

  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
}

/**
 * Format a number with its ordinal suffix
 * @param num - The number to format
 * @returns Formatted string with ordinal suffix (e.g., "1st", "2nd", "3rd")
 */
export function formatOrdinal(num: number): string {
  return `${num}${getOrdinalSuffix(num)}`;
}

/**
 * Company milestone dates
 */
export const COMPANY_DATES = {
  // TODO: Verify this date with Mike
  EXPERIENCE_START: new Date('2017-06-01'),
  ESTABLISHED: new Date('2022-03-01'),
  MARRIED: new Date('2007-10-01'),
} as const;
