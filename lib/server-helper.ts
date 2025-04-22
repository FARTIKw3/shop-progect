"use server";
import { cookies } from "next/headers";

export const getToken = async (): Promise<string | undefined> => {
  const cookieData = await cookies();
  return cookieData.get("jwt")?.value;
};

export const isAuth = async (): Promise<boolean> => {
  const token = await getToken();
  return !!token;
};

export const logout = async (): Promise<void> => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "jwt",
    value: "",
    path: "/",
    httpOnly: true,
    maxAge: 0,
  });
};
