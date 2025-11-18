export interface Product {
  id: number;
  name: string;
  price: number;
  old_price?: number | null;
  images: { Image_URL?: string; image_url?: string }[];
  marks: { Mark_Name: string; color_code: string }[];
}

export interface Category {
  Category_ID: number;
  Category_Name: string;
  Category_Image: string;
  category_images?: { url: string }[] | null;
}