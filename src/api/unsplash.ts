import { api } from "./api";
import { UnsplashApiPhono } from "../types/unsplash";

export async function getRandomPhoto(): Promise<UnsplashApiPhono> {
  const res = await api.get("/photos/random");

  return res.data as UnsplashApiPhono;
}
