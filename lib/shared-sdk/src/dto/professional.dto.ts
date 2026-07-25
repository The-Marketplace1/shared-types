import type { Professional, Location } from "../types/professional.js";

// --- Requests ---

export type CreateProfessionalProfileRequest = {
  bio: string;
  skills: string[];
  location: Location;
  hourlyRate?: number;
  currency?: string;
  availabilityZoneKm?: number;
};

export type UpdateProfessionalProfileRequest = {
  bio?: string;
  skills?: string[];
  location?: Location;
  hourlyRate?: number;
  currency?: string;
  availabilityZoneKm?: number;
};

export type SearchProfessionalsRequest = {
  lat?: number;
  lng?: number;
  radiusKm?: number;
  skills?: string[];
  minRating?: number;
  maxHourlyRate?: number;
  currency?: string;
  page?: number;
  limit?: number;
};

// --- Responses ---

export type ProfessionalResponse = Professional;

export type SearchProfessionalsResponse = {
  items: Professional[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};
