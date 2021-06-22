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
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Benefits</h3>
          <div>
            <h3>If you're a cafe owner</h3>
            <p>Fill your tables with new customers from our community</p>
          </div>
          <div>
            <h3>If you're a digital nomad</h3>
            <p>Fill your tables with new customers from our community</p>
          </div>
        </section>
        <section className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>How does it work?</h3>
            <ul className={styles.benefitList}>
              <li>
                <p>1. Browse our selection of cool spots</p>
                <p>
                  Each carefully selected for their suitability to remote
                  workers
                </p>
              </li>
              <li>
                <p>2. Choose a date to book a desk</p>
              </li>
              <li>
                <p>
                  3. Enjoy your working day with fellow remoters and take
                  advantage of our special deals for that spot
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <p>Join the remote work revolution</p>
          <p>
            Book through Coolspots to get guaranteed desk in all our locations
            and find a community of remote workers
          </p>
          <h3>Daily spots start as low as</h3>
          <span>€16</span>
          <p>per day</p>
        </section>
      </Layout>
    </div>
  );
};

export default howItWorks;
