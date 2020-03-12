import { api } from "./api";
import { UnsplashApiPhoto } from "../types/unsplash";

export async function getRandomPhoto(): Promise<UnsplashApiPhoto> {
  const res = await api.get("/photos/random");

  return res.data as UnsplashApiPhoto;
}

export async function searchPhoto(
  query: string
): Promise<Array<UnsplashApiPhoto>> {
  const res = await api.get("/search/photos", {
    params: {
      query
    }
  });

  return res.data.results as Array<UnsplashApiPhoto>;
}
