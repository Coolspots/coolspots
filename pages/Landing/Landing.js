import styles from "./Landing.module.scss";
import Link from "next/link";

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <img src="/coolspots-mini.svg" alt="coolspots-logo" />
            <span className={styles.coolspotsLogo}>coolspots</span>
          </li>
          <div className={styles.loggBtnsWrapper}>
            <li>
              <Link href="/auth">
                <button className={styles.loginBtn}>Log in</button>
              </Link>
            </li>
            <li>
              <Link href="/auth">
                <button className="logBtn">Sign up</button>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <section className={styles.mainSectionLanding}>
        <div className={styles.textWrapper}>
          <h1 className={styles.landingTitle}>Work anywhere, together</h1>
          <p>
            Book coffeeshops and co-working spaces all over the world with a
            single subscription
          </p>
          <button className="logBtn">Get Started</button>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/landing/landing-main.png" alt="landing-1" />
        </div>
      </section>
      <section className={styles.stepContainer}>
        <div className={styles.textWrapper}>
          <h3>Step 1</h3>
          <h4>Browse for cool spots all over the world</h4>
          <p>
            Every location has been selected specifically for their great
            working environment. This means reliable and fast wifi connection,
            access to amenities like power plugs and bathrooms, as well as a
            cozy and comfy ambient. Cafès, lounges and bars…
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/landing/landing1.png" alt="landing-1" />
        </div>
      </section>
      <section className={styles.stepContainer}>
        <div className={styles.textWrapper}>
          <h3>Step 2</h3>
          <h4>Book a cool spot</h4>
          <p>
            Once you’ve found the perfect place, go ahead and book just for how
            long you want. Half-day, full day, every spot includes different
            offers based on value and location.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/landing/landing2.png" alt="landing-2" />
        </div>
      </section>
      <section className={styles.stepContainer}>
        <div className={styles.textWrapper}>
          <h3>Step 3</h3>
          <h4>Get access to special deals and a community of digital nomads</h4>
          <p>
            Whether you’re exploring a new city, or you just want a change of
            space fo the week, you can access different spots and locations to
            network with new people and try out a different life.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/landing/landing3.png" alt="landing-3" />
        </div>
      </section>
      <footer className={styles.footer}>
        <p>
          &copy; <span>{new Date().getFullYear()}</span>. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Landing;
