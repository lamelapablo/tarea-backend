import { PrismaClient, Prisma } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const prodcutData: Prisma.ProductCreateInput[] = [
  {
    name: "Wireless Headphones",
    price: "$4,990",
    img: "images/headphones.png",
    description: "Noise-cancelling headphones with long battery life and sleek design."
  },
  {
    name: "Running Sneakers",
    price: "$12,500",
    img: "images/sneakers.webp",
    description: "Lightweight sneakers with breathable mesh and cushioned soles."
  },
  {
    name: "Smartwatch",
    price: "$9,800",
    img: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    description: "Track your fitness and receive notifications with this stylish smartwatch."
  },
  {
    name: "Travel Backpack",
    price: "$6,200",
    img: "https://images.pexels.com/photos/374574/pexels-photo-374574.jpeg",
    description: "Durable backpack with anti-theft features and USB charging port."
  },
  {
    name: "LED Desk Lamp",
    price: "$3,450",
    img: "https://images.pexels.com/photos/716661/pexels-photo-716661.jpeg",
    description: "Smart LED lamp with adjustable brightness and color modes."
  }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const product of prodcutData) {
    const createdProduct = await prisma.product.create({ data: product });
    console.log(`Created product with id: ${createdProduct.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });