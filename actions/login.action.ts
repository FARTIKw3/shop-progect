"use server";

import { postLogin } from "@/api/strapi";
import { cookies } from "next/headers";

export const loginActions = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const userData = await postLogin({
      identifier: email,
      password,
    });

    if (!userData?.jwt) {
      return { error: "Неверный email или пароль" };
    }

    const cookieStore = cookies();
    (await cookieStore).set("jwt", userData.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true };
  } catch (error) {
    return { error: "Ошибка при входе" };
  }
};
