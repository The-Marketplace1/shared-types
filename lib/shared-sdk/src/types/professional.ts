export type Location = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  country?: string;
};

export type Professional = {
  id: string;
  userId: string;
  bio: string;
  skills: string[];
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  location: Location;
  hourlyRate?: number;
  currency?: string;
  availabilityZoneKm: number;
  createdAt: string;
  updatedAt: string;
};
