import { StrapiType } from "@/interfaces/strapiData";
import ky from "ky";

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

interface IReview {
  description: string;
}

export const postReview = (review: IReview): Promise<IReview> => {
  return strapiApi
    .post("api/reviews", {
      json: {
        data: review,
      },
    })
    .json();
};
