import { api } from "./api";
import { UnsplashApiPhoto } from "../types/unsplash";
import querystring from "querystring";
import config from "../consts/config";

export async function getRandomPhoto(): Promise<UnsplashApiPhoto> {
  const res = await api.get("/photos/random");

  return res.data as UnsplashApiPhoto;
}

export async function getFavoritePhotos(
  username: string
): Promise<Array<UnsplashApiPhoto>> {
  const res = await api.get(`/users/${username}/likes`);

  return res.data as Array<UnsplashApiPhoto>;
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

export const API_URL = "https://api.unsplash.com";
export const API_VERSION = "v1";
export const OAUTH_AUTHORIZE_URL = "https://unsplash.com/oauth/authorize";
export const OAUTH_TOKEN_URL = "https://unsplash.com/oauth/token";

export const getAuthenticationUrl = (scope = ["public"]) => {
  let querystrings = querystring.stringify({
    client_id: '6hDy-cTShVF1cCuYgQj8L9QecopJTKFH3kA1N4XPEnw',
    redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
    response_type: "code",
    scope: scope.length > 1 ? scope.join("+") : scope.toString()
  });

  return decodeURIComponent(`${OAUTH_AUTHORIZE_URL}?${querystrings}`);
};

export const userAuthentication = (code: string) => {
  const url = OAUTH_TOKEN_URL;

  return api.post(url, {
    client_id: this._accessKey,
    client_secret: this._secret,
    redirect_uri: this._callbackUrl,
    grant_type: "authorization_code",
    code
  });
};

export default function auth(): Object {
  return {
    setBearerToken: (accessToken: string) => {
      if (accessToken) {
        this._bearerToken = accessToken;
      }
    }
  };
}
