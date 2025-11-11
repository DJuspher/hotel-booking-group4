import { Router } from 'express';
import {
  createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking
} from '../controllers/booking.controller.js';
import { requireAuth } from '../middleware/clerkAuth.js';
import { validateBody } from '../middleware/validate.js';
import { createBookingSchema } from '../schemas/booking.schema.js';

const router = Router();

router.post('/', requireAuth, validateBody(createBookingSchema), createBooking);
router.get('/my-bookings', requireAuth, getMyBookings);
router.get('/:id', requireAuth, getBookingById);
router.patch('/:id/cancel', requireAuth, cancelBooking);

export default router;
