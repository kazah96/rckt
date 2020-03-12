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

export interface User {}

export interface UnsplashApiPhoto {
  alt_description: string;
  categories: Array<string>;
  color: string;
  created_at: string;
  current_user_collections: Array<any>;
  description?: string;
  downloads: Number;
  exif: Object;
  height: Number;
  id: string;
  liked_by_user: Boolean;
  likes: Number;
  links: Links;
  location?: Location;
  promoted_at: string;
  updated_at: string;
  urls: Urls;
  user: User;
  views: Number;
  width: Number;
}
