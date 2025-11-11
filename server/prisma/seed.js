import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...\n');

  console.log('Clearing existing data...');
  await prisma.payment.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.roomType.deleteMany();
  await prisma.property.deleteMany();
  await prisma.user.deleteMany();
  console.log('Existing data cleared\n');

  console.log('Creating admin user...');
  const admin = await prisma.user.create({
    data: {
      clerkUserId: 'user_admin_test_001',
      email: 'admin@skybridge.com',
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN'
    }
  });
  console.log('Admin user created:', admin.email, '\n');

  console.log('Creating hotel owner user...');
  const owner = await prisma.user.create({
    data: {
      clerkUserId: 'user_owner_test_001',
      email: 'owner@example.com',
      firstName: 'Hotel',
      lastName: 'Owner',
      role: 'HOTEL_OWNER'
    }
  });
  console.log('Hotel owner created:', owner.email, '\n');

  console.log('Creating properties...\n');

  const propertiesData = [
    {
      name: 'Cebu Seaside Resort',
      description: 'Experience luxury beachfront living at Cebu Seaside Resort. Located in the heart of Cordova, our resort offers stunning ocean views, world-class amenities, and exceptional service. Perfect for families, couples, and business travelers seeking a peaceful retreat just minutes from Mactan-Cebu International Airport.',
      propertyType: 'RESORT',
      address: '123 Barangay Poblacion, Cordova, Cebu',
      city: 'Cordova, Cebu',
      latitude: 10.2456,
      longitude: 123.9512,
      contactEmail: 'info@cebuseaside.com',
      amenities: ['Free WiFi', 'Swimming Pool', 'Beach Access', 'Restaurant', 'Parking', 'Room Service', 'Spa', 'Bar'],
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4'
      ],
      checkInTime: '14:00',
      checkOutTime: '12:00',
      houseRules: 'No smoking in rooms. No pets allowed. Quiet hours from 10 PM to 7 AM.',
      status: 'PUBLISHED',
      submissionDate: new Date('2024-08-15'),
      reviewedDate: new Date('2024-08-20'),
      reviewedById: admin.id,
      ownerId: owner.id,
      roomTypes: [
        {
          name: 'Deluxe Ocean View Room',
          description: 'Spacious room with stunning ocean views, king-size bed, and private balcony.',
          bedConfiguration: '1 King Bed',
          maxAdults: 2,
          maxChildren: 1,
          pricePerNight: 3500,
          availableRooms: 10,
          images: [
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427'
          ],
          amenities: ['Ocean View', 'Air Conditioning', 'Mini Bar', 'Safe', 'TV']
        },
        {
          name: 'Family Suite',
          description: 'Large suite perfect for families with separate living area and two bedrooms.',
          bedConfiguration: '1 King Bed + 2 Single Beds',
          maxAdults: 4,
          maxChildren: 2,
          pricePerNight: 5500,
          availableRooms: 5,
          images: [
            'https://images.unsplash.com/photo-1591088398332-8a7791972843'
          ],
          amenities: ['Ocean View', 'Air Conditioning', 'Kitchen', 'Living Room', 'Balcony']
        }
      ]
    },
    {
      name: 'Cordova Beach Hotel',
      description: 'A modern beachfront hotel offering comfortable accommodations and easy access to Cordova\'s pristine beaches. Ideal for budget-conscious travelers who don\'t want to compromise on quality and location.',
      propertyType: 'HOTEL',
      address: '456 Barangay Gilutongan, Cordova, Cebu',
      city: 'Cordova, Cebu',
      latitude: 10.2534,
      longitude: 123.9601,
      contactEmail: 'reservations@cordovabeach.com',
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Beach Access', 'Air Conditioning'],
      images: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
        'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
        'https://images.unsplash.com/photo-1596436889106-be35e843f974'
      ],
      checkInTime: '14:00',
      checkOutTime: '11:00',
      houseRules: 'No smoking. No parties or events. Check-in requires valid ID.',
      status: 'PUBLISHED',
      submissionDate: new Date('2024-09-01'),
      reviewedDate: new Date('2024-09-03'),
      reviewedById: admin.id,
      ownerId: owner.id,
      roomTypes: [
        {
          name: 'Standard Room',
          description: 'Comfortable room with modern amenities and garden view.',
          bedConfiguration: '1 Queen Bed',
          maxAdults: 2,
          maxChildren: 1,
          pricePerNight: 2200,
          availableRooms: 15,
          images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32'
          ],
          amenities: ['Air Conditioning', 'TV', 'Free WiFi', 'Safe']
        },
        {
          name: 'Deluxe Room',
          description: 'Spacious room with partial sea view and upgraded amenities.',
          bedConfiguration: '1 King Bed',
          maxAdults: 2,
          maxChildren: 1,
          pricePerNight: 2800,
          availableRooms: 8,
          images: [
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39'
          ],
          amenities: ['Partial Sea View', 'Air Conditioning', 'Mini Bar', 'Balcony', 'TV']
        }
      ]
    },
    {
      name: 'Palm View Inn',
      description: 'Cozy guesthouse perfect for budget travelers. Clean, comfortable, and conveniently located near local attractions and dining options. Friendly staff and homely atmosphere.',
      propertyType: 'GUESTHOUSE',
      address: '789 Barangay Buagsong, Cordova, Cebu',
      city: 'Cordova, Cebu',
      latitude: 10.2398,
      longitude: 123.9489,
      contactEmail: 'info@palmviewinn.com',
      amenities: ['Free WiFi', 'Parking', 'Air Conditioning', 'Fan'],
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7'
      ],
      checkInTime: '13:00',
      checkOutTime: '11:00',
      houseRules: 'No smoking indoors. Respect quiet hours. No visitors after 10 PM.',
      status: 'PUBLISHED',
      submissionDate: new Date('2024-09-10'),
      reviewedDate: new Date('2024-09-11'),
      reviewedById: admin.id,
      ownerId: owner.id,
      roomTypes: [
        {
          name: 'Standard Room',
          description: 'Simple and clean room with essential amenities.',
          bedConfiguration: '1 Double Bed',
          maxAdults: 2,
          maxChildren: 0,
          pricePerNight: 1200,
          availableRooms: 8,
          images: [
            'https://images.unsplash.com/photo-1595576508898-0ad5c879a061'
          ],
          amenities: ['Air Conditioning', 'Free WiFi', 'Fan']
        }
      ]
    }
  ];

  for (const propertyData of propertiesData) {
    const { roomTypes, ...propertyInfo } = propertyData;

    const property = await prisma.property.create({
      data: {
        ...propertyInfo,
        roomTypes: {
          create: roomTypes
        }
      },
      include: {
        roomTypes: true
      }
    });

    console.log(`Created: ${property.name}`);
    console.log(`   - Status: ${property.status}`);
    console.log(`   - Room types: ${property.roomTypes.length}`);
    console.log(`   - Price range: ${Math.min(...property.roomTypes.map(rt => rt.pricePerNight))} - ${Math.max(...property.roomTypes.map(rt => rt.pricePerNight))}`);
    console.log('');
  }

  console.log('Seeding Summary:');
  const userCount = await prisma.user.count();
  const propertyCount = await prisma.property.count();
  const roomTypeCount = await prisma.roomType.count();

  console.log(`   - Users: ${userCount}`);
  console.log(`   - Properties: ${propertyCount}`);
  console.log(`   - Room Types: ${roomTypeCount}`);
  console.log('\nDatabase seeding completed successfully!\n');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
