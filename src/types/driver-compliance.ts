
export type DocumentStatus = "valid" | "warning" | "expired";

export interface DriverDocument {
  id: number;
  name: string;
  type: string;
  status: DocumentStatus;
  uploadDate: string;
  expiryDate: string | null;
  fileName: string;
}

export interface BadgeStatus {
  level: "Gold" | "Silver" | "None";
  complianceScore: number;
  safetyScore: number;
  completedTrips: number;
  onTime: number;
}

// Cash Fare types
export interface FareDetails {
  baseRate: number;
  ratePerKm: number;
  companyFee: number;
  distance: number;
  calculatedFare: number;
  roundedFare: number | null;
  isCash: boolean;
}

// Facial Recognition types
export interface FacialVerification {
  driverId: number;
  lastVerificationTime: string;
  verificationStatus: "verified" | "failed" | "pending";
  verificationMethod: "scheduled" | "random" | "manual";
}

// QR Code Verification types
export interface TripVerification {
  tripId: number;
  driverVerified: boolean;
  riderVerified: boolean;
  driverVerificationTime: string | null;
  riderVerificationTime: string | null;
  status: "pending" | "started" | "completed" | "failed";
}

// Admin types
export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: "admin" | "supervisor" | "support";
  lastLogin: string;
}

export interface AdminMetrics {
  totalDrivers: number;
  activeDrivers: number;
  totalRiders: number;
  activeRiders: number;
  tripsToday: number;
  tripsThisWeek: number;
  tripsThisMonth: number;
  revenue: {
    today: number;
    week: number;
    month: number;
  };
}

export interface FlaggedUser {
  id: number;
  name: string;
  userType: "driver" | "rider";
  reason: string;
  date: string;
  status: "pending" | "reviewed" | "resolved";
  severity: "low" | "medium" | "high";
}
