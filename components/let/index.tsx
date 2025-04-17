// import { fetchProfile } from "@/api/strapi";
// import { cookies } from "next/headers";
// import React from "react";

// export const Profile = async () => {
//   const token = (await cookies()).get("jwt")?.value;
//   let username = "";
//   let email = "";
//   if (token) {
//     const profile = await fetchProfile(token);
//     username = profile.username;
//     email = profile.email;
//   }

//   return (
//     <div>
//       {username && email ? (
//         <div>
//           <h1>{username}!</h1>
//           <h2>{email}</h2>
//         </div>
//       ) : (
//         <div>go</div>
//       )}
//     </div>
//   );
// };
