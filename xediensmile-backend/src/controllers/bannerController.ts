import { Request, Response } from 'express';
import Banner from '../models/Banner';

// Lấy danh sách Banner
export const getBanners = async (req: Request, res: Response): Promise<void> => {
  try {
    const banners = await Banner.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi fetch banners' });
  }
};

// Lấy 1 banner cụ thể
export const getBannerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      res.status(404).json({ message: 'Banner không tìm thấy' });
      return;
    }
    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

// Tạo Banner mới
export const createBanner = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, linkTo, isActive, order } = req.body;
    let imageUrl = '';

    if (req.file) {
      imageUrl = req.file.path;
    }

    if (!title || !imageUrl) {
      res.status(400).json({ message: 'Title và Banner Image là bắt buộc' });
      return;
    }

    const newBanner = new Banner({
      title,
      imageUrl,
      linkTo: linkTo || '#',
      isActive: isActive === 'true' || isActive === true,
      order: order ? parseInt(order, 10) : 0,
    });

    const savedBanner = await newBanner.save();
    res.status(201).json(savedBanner);
  } catch (error) {
    console.error('Lỗi khi tạo banner:', error);
    res.status(500).json({ message: 'Lỗi server khi lưu banner' });
  }
};

// Cập nhật Banner
export const updateBanner = async (req: Request, res: Response): Promise<void> => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      res.status(404).json({ message: 'Banner không tìm thấy' });
      return;
    }

    const { title, linkTo, isActive, order } = req.body;

    banner.title = title ?? banner.title;
    banner.linkTo = linkTo ?? banner.linkTo;
    banner.isActive = isActive !== undefined
      ? (isActive === 'true' || isActive === true)
      : banner.isActive;
    banner.order = order !== undefined ? parseInt(order, 10) : banner.order;

    if (req.file) {
      banner.imageUrl = req.file.path;
    }

    const updatedBanner = await banner.save();
    res.status(200).json(updatedBanner);
  } catch (error) {
    console.error('Lỗi khi cập nhật banner:', error);
    res.status(500).json({ message: 'Lỗi server khi cập nhật banner' });
  }
};

// Xóa Banner
export const deleteBanner = async (req: Request, res: Response): Promise<void> => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) {
      res.status(404).json({ message: 'Lỗi: Không tìm thấy Banner' });
      return;
    }
    res.status(200).json({ message: 'Banner đã được xóa thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi xóa banner' });
  }
};
