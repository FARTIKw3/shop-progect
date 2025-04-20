import { getReviews } from "@/api/strapi";
import Rating from "@/components/rating";
import { IReview } from "./../../interfaces/strapiData";

export default async function ReviewsReting() {
  const { data }: { data: IReview[] } = await getReviews();
  const formattedData = data.map((item) => ({
    id: item.id,
    username: item.username,
    description: item.description,
    rating: item.rating,
    createdAt: item.createdAt,
  }));
  return (
    <div>
      <Rating data={formattedData} />
    </div>
  );
}
