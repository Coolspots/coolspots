import Layout from "../components/Layout/Layout";
import styles from "../styles/HowItWorks.module.scss";
import Image from "next/image";

const howItWorks = () => {
  return (
    <div className={styles.howItWorksPage}>
      <Layout
        headerText="Social, comfy workspaces with discounts for remote workers, nomads,
            entrepreneurs and students"
      >
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
          </div>
          <div className={styles.card}>
            <h4>Coffeeshops</h4>
            <Image
              src="/howitworks-coffeeshop.jpg"
              alt="coffeeshop"
              width={220}
              height={160}
            />
          </div>
          <div className={styles.card}>
            <h4>Meeting rooms</h4>
            <Image
              src="/howitworks-meeting-room.jpg"
              alt="meetingroom"
              width={220}
              height={160}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default howItWorks;
