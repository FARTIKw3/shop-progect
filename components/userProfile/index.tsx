import styles from "./style.module.css";
import { getToken } from "@/lib/server-helper";
import { fetchProfile } from "@/api/strapi";
import Image from "next/image";

export const UserProfile = async () => {
  const token = await getToken();
  if (!token)
    return (
      <div className={styles.bot}>
        <h1>Вы не авторизованы</h1>
      </div>
    );
  const user = await fetchProfile(token);
  return (
    <div className={styles.container}>
      <div className={styles.blue}></div>
      <div className={styles.user}>
        <div className={styles.img}>
          <Image src="/userProfile.png" width={150} height={150} alt="avatar" />
        </div>
        <div className={styles.userText}>
          <h1 className={styles.name}>{user.username}</h1>
          <span className={styles.email}>{user.email}</span>
        </div>
      </div>
    </div>
  );
};
