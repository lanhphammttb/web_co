import express from 'express';
import {
  getProducts,
  getProductById,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController';
import { upload } from '../config/cloudinary';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(upload.array('images', 5), createProduct);

// Slug lookup must come before /:id to avoid conflict
router.get('/slug/:slug', getProductBySlug);

router.route('/:id')
  .get(getProductById)
  .put(upload.array('images', 5), updateProduct)
  .delete(deleteProduct);

export default router;
