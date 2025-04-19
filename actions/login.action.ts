"use server";

import { postLogin } from "@/api/strapi";
import { cookies } from "next/headers";

export const loginActions = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const userData = await postLogin({
    identifier: email,
    password: password,
  });
  if (userData) {
    const cookiesData = await cookies();
    cookiesData.set("jwt", userData.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  }
};
