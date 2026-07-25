import { z } from "zod";

const LocationSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const CreateProfessionalProfileSchema = z.object({
  bio: z.string().min(20, "Bio must be at least 20 characters").max(2000),
  skills: z.array(z.string().min(1)).min(1, "At least one skill is required"),
  location: LocationSchema,
  hourlyRate: z.number().positive().optional(),
  currency: z.string().length(3).toUpperCase().optional(),
  availabilityZoneKm: z.number().positive().max(500).default(25),
});

export const UpdateProfessionalProfileSchema = z.object({
  bio: z.string().min(20).max(2000).optional(),
  skills: z.array(z.string().min(1)).min(1).optional(),
  location: LocationSchema.optional(),
  hourlyRate: z.number().positive().optional(),
  currency: z.string().length(3).toUpperCase().optional(),
  availabilityZoneKm: z.number().positive().max(500).optional(),
});

export const SearchProfessionalsSchema = z.object({
  lat: z.coerce.number().min(-90).max(90).optional(),
  lng: z.coerce.number().min(-180).max(180).optional(),
  radiusKm: z.coerce.number().positive().max(500).optional(),
  skills: z.array(z.string()).optional(),
  minRating: z.coerce.number().min(1).max(5).optional(),
  maxHourlyRate: z.coerce.number().positive().optional(),
  currency: z.string().length(3).optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type CreateProfessionalProfileInput = z.infer<typeof CreateProfessionalProfileSchema>;
export type UpdateProfessionalProfileInput = z.infer<typeof UpdateProfessionalProfileSchema>;
export type SearchProfessionalsInput = z.infer<typeof SearchProfessionalsSchema>;
