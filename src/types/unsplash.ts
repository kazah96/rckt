export interface Links {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface Location {
  city?: any;
  country?: any;
  name?: any;
  position?: any;
  title?: any;
}

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface DifferentSizesImage {
  small: string
  medium: string
  large: string
}

export interface User {
  accepted_tos?: boolean;
  bio: string;
  first_name: string;
  id: string;
  instagram_username: string;
  last_name: string;
  // links: Object { self: "https://api.unsplash.com/users/albert_s", html: "https://unsplash.com/@albert_s", photos: "https://api.unsplash.com/users/albert_s/photos", … }
  location?: string;
  name: string;
  portfolio_url?: string;
  profile_image: DifferentSizesImage
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username?: string;
  updated_at: string;
  username: string;
}

export interface UnsplashApiPhoto {
  alt_description: string;
  categories: Array<string>;
  color: string;
  created_at: string;
  current_user_collections: Array<any>;
  description?: string;
  downloads: number;
  exif: Record<string, any>;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  location?: Location;
  promoted_at: string;
  updated_at: string;
  urls: Urls;
  user: User;
  views: number;
  width: number;
}
