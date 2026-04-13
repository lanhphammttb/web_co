import mongoose, { Document, Schema } from 'mongoose';

export interface IBanner extends Document {
  title: string;
  imageUrl: string;
  linkTo?: string;  // Nơi banner dẫn đến khi click (vd: /xe-may-dien-yadea)
  isActive: boolean;
  order: number;    // Vị trí/Thứ tự xuất hiện
  createdAt: Date;
}

const BannerSchema: Schema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  linkTo: { type: String, default: '#' },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Banner || mongoose.model<IBanner>('Banner', BannerSchema);
