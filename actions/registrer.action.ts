"use server";

import { postRegister } from "@/api/strapi";
import { cookies } from "next/headers";

export const registerAction = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log("Received data:", { username, email, password });
  const credentials = {
    username,
    email,
    password,
  };
  if (!username || !email || !password) {
    console.error("Missing required fields: username, email, or password");
    return;
  }
  const userData = await postRegister(credentials);
  console.log("Response from Strapi:", userData);
  if (userData) {
    const cookiesData = await cookies();
    cookiesData.set("jwt", userData.jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  }
};
