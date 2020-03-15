import { api } from "./api";
import { UnsplashApiPhoto } from "../types/unsplash";

interface PhotoQuery {
  query: string;
  page?: number;
}

export async function getRandomPhoto(): Promise<UnsplashApiPhoto> {
  const res = await api.get("/photos/random");

  return res.data as UnsplashApiPhoto;
}

export async function searchPhoto(
  query: PhotoQuery
): Promise<Array<UnsplashApiPhoto>> {
  let res;

  res = await api.get("/search/photos", {
    params: {
      ...query
    }
  });

  return res.data.results as Array<UnsplashApiPhoto>;
}
