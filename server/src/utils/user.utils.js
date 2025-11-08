import prisma from '../config/database.js';

export async function findOrCreateUser(clerkUserId, clerkData) {
  if (!clerkUserId) {
    throw new Error('clerkUserId is required');
  }

  if (!clerkData || !clerkData.email) {
    throw new Error('clerkData with email is required');
  }

  try {
    let user = await prisma.user.findUnique({
      where: { clerkUserId }
    });

    if (user) {
      return user;
    }

    user = await prisma.user.create({
      data: {
        clerkUserId,
        email: clerkData.email,
        firstName: clerkData.firstName || null,
        lastName: clerkData.lastName || null,
        role: 'CUSTOMER'
      }
    });

    console.log(`✅ New user created: ${user.email} (${user.id})`);
    return user;

  } catch (error) {
    console.error('Error in findOrCreateUser:', error);
    throw error;
  }
}
