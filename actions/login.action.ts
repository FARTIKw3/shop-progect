"use server";

import { postLogin } from "@/api/strapi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginActions = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const userData = await postLogin({
      identifier: email,
      password: password,
    });

    if (!userData || !userData.jwt) {
      throw new Error("Invalid credentials");
    }

    const cookiesData = cookies();
    (await cookiesData).set("jwt", userData.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/");
  } catch (error: any) {
    return { error: "Неверный email или пароль" };
  }
};
