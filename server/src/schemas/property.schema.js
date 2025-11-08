import { z } from 'zod';

export const roomTypeSchema = z.object({
  name: z.string().min(3, 'Room type name must be at least 3 characters'),
  description: z.string().optional(),
  bedConfiguration: z.string().min(1, 'Bed configuration is required'),
  maxAdults: z.number().int().min(1, 'Max adults must be at least 1'),
  maxChildren: z.number().int().min(0, 'Max children must be at least 0'),
  pricePerNight: z.number().positive('Price per night must be a positive number'),
  availableRooms: z.number().int().min(1, 'Available rooms must be at least 1'),
  images: z.array(z.string().url('Each image must be a valid URL')).optional(),
  amenities: z.array(z.string()).optional()
});

export const createPropertySchema = z.object({
  name: z.string().min(3, 'Property name must be at least 3 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  propertyType: z.enum(['HOTEL', 'RESORT', 'APARTMENT', 'GUESTHOUSE'], {
    errorMap: () => ({ message: 'Property type must be HOTEL, RESORT, APARTMENT, or GUESTHOUSE' })
  }),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  latitude: z.number().min(-90).max(90, 'Latitude must be between -90 and 90'),
  longitude: z.number().min(-180).max(180, 'Longitude must be between -180 and 180'),
  contactEmail: z.string().email('Contact email must be a valid email address'),
  amenities: z.array(z.string()).min(1, 'At least one amenity is required'),
  images: z.array(z.string().url('Each image must be a valid HTTPS URL'))
    .min(3, 'At least 3 images are required')
    .max(8, 'Maximum 8 images allowed'),
  checkInTime: z.string().min(1, 'Check-in time is required'),
  checkOutTime: z.string().min(1, 'Check-out time is required'),
  houseRules: z.string().optional(),
  roomTypes: z.array(roomTypeSchema)
    .min(1, 'At least one room type is required')
    .max(2, 'Maximum 2 room types allowed for MVP')
});

export const updatePropertySchema = createPropertySchema;

export const validateImageUrls = (images) => {
  return images.every(url => url.startsWith('https://'));
};
