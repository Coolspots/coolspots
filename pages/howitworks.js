import Layout from "../components/Layout/Layout";
import styles from "../styles/HowItWorks.module.scss";
import Image from "next/image";

const howItWorks = () => {
  return (
    <Layout>
      <div className={styles.howItWorksPage}>
        <h1>What can I book with Coolspots?</h1>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <h4>Co-working spaces</h4>
            <Image
              src="/howitworks-coworking.jpg"
              alt="coworking"
              width={220}
              height={160}
            />
            {/* <img src="/howitworks-coworking.jpg" alt="coworking" /> */}
          </div>
          <div className={styles.card}>
            <h4>Co-working spaces</h4>
            <Image
              src="/howitworks-coffeeshop.jpg"
              alt="coffeeshop"
              width={220}
              height={160}
            />
          </div>
          <div className={styles.card}>
            <h4>Co-working spaces</h4>
            <Image
              src="/howitworks-meeting-room.jpg"
              alt="meetingroom"
              width={220}
              height={160}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default howItWorks;
