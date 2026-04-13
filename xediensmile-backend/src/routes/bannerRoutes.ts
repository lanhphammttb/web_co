import express from 'express';
import { getBanners, getBannerById, createBanner, updateBanner, deleteBanner } from '../controllers/bannerController';
import { upload } from '../config/cloudinary';

const router = express.Router();

router.route('/')
  .get(getBanners)
  .post(upload.single('image'), createBanner);

router.route('/:id')
  .get(getBannerById)
  .put(upload.single('image'), updateBanner)
  .delete(deleteBanner);

export default router;
