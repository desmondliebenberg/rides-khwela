
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
