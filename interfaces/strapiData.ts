export interface StrapiType<T> {
  data: T[];
  meta?: any;
}

export interface IProduct {
  id: number;
  documentId: string;
  name: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image[];
}
export interface IReview {
  id: number;
  description: string;
  rating: number;
  username: string;
  createdAt: string;
}
export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
