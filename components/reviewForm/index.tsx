// import styles from "./styles.module.css";
// import { useState } from "react";
// import api from "@/lib/api";
// import { GoStar } from "react-icons/go";
// import Image from "next/image";

// export default function ReviewForm() {
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await api.post("reviews", {
//       json: { data: { name, text, rating } },
//     });
//     setSuccess(true);
//     setName("");
//     setText("");
//     setRating(0);
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             className={styles.input}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="имя"
//             required
//           />
//           <textarea
//             className={styles.textarea}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Отзыв должен состовлять не более чем 300 символов"
//             required
//           ></textarea>
//           <div className={styles.stars}>
//             {[1, 2, 3, 4, 5].map((star) => (
//               <GoStar
//                 key={star}
//                 size={40}
//                 onClick={() => setRating(star)}
//                 onMouseEnter={() => setHover(star)}
//                 onMouseLeave={() => setHover(0)}
//                 style={{
//                   cursor: "pointer",
//                   transition: "color 200ms",
//                   color: star <= (hover || rating) ? "#F4C319" : "transparent",
//                   stroke: "none",
//                 }}
//               />
//             ))}
//           </div>
//           <button className={styles.button} type="submit">
//             Опубликовать
//           </button>
//           {success && (
//             <span className={styles.success}> Спасибо за отзыв! </span>
//           )}
//         </form>
//         <div className={styles.imageBox}>
//           <Image
//             className={styles.image}
//             src="/rating.png"
//             width={640}
//             height={416}
//             alt="rating"
//           />
//         </div>
//       </div>
//     </>
//   );
// }
