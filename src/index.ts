import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import express from 'express'
import { Product } from './types/product.type'
import path from 'path';
import multer from 'multer';

const prisma = new PrismaClient().$extends(withAccelerate());

const storage: multer.StorageEngine = multer.diskStorage({
  destination: path.join(__dirname, 'public/images'),
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const app = express();

app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/product', async (req, res) => {
  const products: Product[] = await prisma.product.findMany();
  res.status(200).json(products);
});

app.post('/product', upload.single('img'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imgPath: string | null = req.file ? `images/${req.file.filename}` : null;

    const newProduct: Product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        img: `${imgPath}`
      }
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Could not create product' });
  }
});

app.listen(3000, () => console.log('🚀 Server ready at: http://localhost:3000'));
