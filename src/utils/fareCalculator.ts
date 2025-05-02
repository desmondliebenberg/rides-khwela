
/**
 * Utility for calculating and rounding fares
 */

// Base calculation constants
const BASE_RATE = 25; // Base fare in Rand
const RATE_PER_KM = 12; // AA rate per km + R2
const COMPANY_FEE = 10; // Fixed company fee per trip

/**
 * Calculate fare based on distance
 * @param distance Distance in kilometers
 * @param isCash Whether the payment is cash or digital
 * @returns Fare details including both calculated and rounded amounts
 */
export const calculateFare = (distance: number, isCash: boolean = false) => {
  // Calculate the base fare
  const baseFare = BASE_RATE + (distance * RATE_PER_KM);
  const totalFare = baseFare + COMPANY_FEE;
  
  // For cash payments, round to the nearest R10 tier
  let roundedFare = null;
  if (isCash) {
    // Round up to the next R10
    roundedFare = Math.ceil(totalFare / 10) * 10;
    
    // Ensure cash fare is always higher than digital fare
    if (roundedFare <= totalFare) {
      roundedFare += 10;
    }
  }
  
  return {
    baseRate: BASE_RATE,
    ratePerKm: RATE_PER_KM,
    companyFee: COMPANY_FEE,
    distance,
    calculatedFare: totalFare,
    roundedFare,
    isCash
  };
};

/**
 * Format currency as Rand
 * @param amount Amount to format
 * @returns Formatted string (e.g., "R120.00")
 */
export const formatCurrency = (amount: number) => {
  return `R${amount.toFixed(2)}`;
};
