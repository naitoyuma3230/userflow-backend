import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hospital1 = await prisma.hospital.create({
    data: {
      name: 'Hospital A',
      facility: {
        create: {
          name: 'Facility A',
        },
      },
      company: {
        create: {
          name: 'Company A',
        },
      },
    },
  });

  const hospital2 = await prisma.hospital.create({
    data: {
      name: 'Hospital B',
      facility: {
        create: {
          name: 'Facility B',
        },
      },
      company: {
        create: {
          name: 'Company B',
        },
      },
    },
  });

  const nursingHome1 = await prisma.nursingHome.create({
    data: {
      name: 'Nursing Home A',
      facility: {
        create: {
          name: 'Facility C',
        },
      },
      company: {
        create: {
          name: 'Company C',
        },
      },
    },
  });

  const nursingHome2 = await prisma.nursingHome.create({
    data: {
      name: 'Nursing Home B',
      facility: {
        create: {
          name: 'Facility D',
        },
      },
      company: {
        create: {
          name: 'Company D',
        },
      },
    },
  });

  await prisma.company.create({
    data: {
      name: 'Company E',
    },
  });

  await prisma.user.create({
    data: {
      name: 'User A',
      facilityId: hospital1.facilityId,
    },
  });

  await prisma.user.create({
    data: {
      name: 'User B',
      facilityId: hospital2.facilityId,
    },
  });

  await prisma.user.create({
    data: {
      name: 'User C',
      facilityId: nursingHome1.facilityId,
    },
  });

  await prisma.user.create({
    data: {
      name: 'User D',
      facilityId: nursingHome2.facilityId,
    },
  });

  console.log('Seed data created!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
