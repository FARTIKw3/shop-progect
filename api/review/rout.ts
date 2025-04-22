// app/api/review/route.ts или pages/api/review.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"; // Для работы с cookie
import { fetchProfile, postReview } from "@/api/strapi"; // Твои API-запросы

// Обработчик POST-запроса (отправка отзыва)
export async function POST(req: NextRequest) {
  try {
    // Получаем данные из тела запроса
    const { description, rating } = await req.json();

    // Извлекаем токен из cookies
    const token = cookies().get("jwt")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Получаем информацию о пользователе по токену
    const user = await fetchProfile(token);
    if (!user?.username) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Отправляем отзыв в базу данных
    await postReview({ description, rating, username: user.username });

    return NextResponse.json({ success: true }); // Ответ, если всё прошло успешно
  } catch (err) {
    console.error("Review post error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 }); // Ошибка, если что-то пошло не так
  }
}
