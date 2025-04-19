"use server";
import { IProfile } from "@/interfaces/auth";
import { cookies } from "next/headers";

export const getToken = async () => {
  const cookieData = await cookies();
  return cookieData.get("jwt")?.value;
};
export const isAuth = async () => {
  const token = await getToken();
  return !!token;
};

export const logout = async () => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "jwt",
    value: "",
    path: "/",
    httpOnly: true,
    maxAge: 0,
  });
};
