import { GoStarFill } from "react-icons/go";
// import { GoStar } from "react-icons/go";

export const renderStars = (rating: number) => {
  return (
    <>
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <GoStarFill key={i} color="#F4C319" />
        ) : (
          <GoStarFill key={i} color="#EDEDED" />
        )
      )}
    </>
  );
};
