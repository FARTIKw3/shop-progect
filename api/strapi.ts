import { Icredentials, IProfile } from "@/interfaces/auth";
import { StrapiType } from "@/interfaces/strapiData";
import ky from "ky";
import { json } from "stream/consumers";

export const strapiApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_API,
});

export const fetchProducts = async <T>(
  populate: string
): Promise<StrapiType<T[]>> => {
  return strapiApi
    .get(`api/laptops`, {
      searchParams: {
        populate: populate || "",
      },
    })
    .json();
};

export const fetchProductById = async <T>(
  documentId: string,
  populate: string
): Promise<StrapiType<T>> => {
  return strapiApi
    .get(`api/laptops`, {
      searchParams: {
        "filters[documentId][$eq]": documentId,
        populate: populate || "",
      },
    })
    .json();
};

export const postLogin = (credentials: Icredentials): Promise<IProfile> => {
  return strapiApi
    .post("api/auth/local", {
      json: credentials,
    })
    .json();
};

export const postRegister = (credentials: {
  username: string;
  email: string;
  password: string;
}): Promise<IProfile> => {
  return strapiApi
    .post("api/auth/local/register", {
      json: credentials,
    })
    .json();
};

export const fetchProfile = async (
  token: string
): Promise<IProfile["user"]> => {
  return await strapiApi
    .get("api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
};

export const postOrder = (orderData: {
  name: string;
  lastName: string;
  number: string;
  email: string;
  country: string;
  city: string;
  street: string;
  mailIndex: string;
}): Promise<any> => {
  return strapiApi
    .post("api/orders", {
      json: {
        data: orderData,
      },
    })
    .json();
};
