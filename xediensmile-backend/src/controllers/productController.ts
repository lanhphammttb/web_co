import { Request, Response } from 'express';
import Product from '../models/Product';

// @desc    Fetch all products (with optional category & search filters)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;
    const filter: Record<string, any> = {};

    if (category) {
      filter.category = new RegExp(category as string, 'i');
    }
    if (search) {
      filter.name = new RegExp(search as string, 'i');
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product by slug
// @route   GET /api/products/slug/:slug
// @access  Public
export const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, slug, description, price, discountPrice, category, countInStock } = req.body;
    let images: { url: string; public_id: string }[] = [];

    if (req.files && Array.isArray(req.files)) {
      images = req.files.map((file: any) => ({
        url: file.path,
        public_id: file.filename,
      }));
    }

    const product = new Product({
      name,
      slug,
      description,
      price: price || 0,
      discountPrice: discountPrice || 0,
      category,
      countInStock: countInStock || 0,
      images,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid product data' });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, slug, description, price, discountPrice, category, countInStock } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    product.name = name ?? product.name;
    product.slug = slug ?? product.slug;
    product.description = description ?? product.description;
    product.price = price !== undefined ? price : product.price;
    product.discountPrice = discountPrice !== undefined ? discountPrice : product.discountPrice;
    product.category = category ?? product.category;
    product.countInStock = countInStock !== undefined ? countInStock : product.countInStock;

    // Append new images if uploaded
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      const newImages = req.files.map((file: any) => ({
        url: file.path,
        public_id: file.filename,
      }));
      product.images = [...product.images, ...newImages];
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Update failed' });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json({ message: 'Sản phẩm đã được xóa thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
