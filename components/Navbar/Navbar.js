import { useRouter } from 'next/router';
import { useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import Burger from './Burger/Burger';

const NavBar = () => {
  const [error, setError] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { logout, currentUser } = useAuth();

  const handleOpenDropdown = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      setError('');
      await logout();
      router.push('/');
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.textLogo}>
          <Link href="/">coolspots</Link>
        </li>
        <li
          className={classnames(styles.menuButtonWrapper, { [styles.isLandingPage]: !currentUser })}
        >
          {!currentUser && (
            <Burger handleOpenDropdown={handleOpenDropdown} isMenuOpen={isMenuOpen} />
          )}

          {/* here we render burger in landing and profile button */}
          {currentUser && (
            <button
              className={classnames(styles.menuButton, { [styles.open]: isMenuOpen })}
              onClick={() => setMenuOpen((prevState) => !prevState)}
            >
              <Image src="/icons/openDropdownMenu.svg" height={30} width={30} />
            </button>
          )}
        </li>
      </ul>

      <div className={classnames(styles.dropdownWrapper, { [styles.isMenuOpen]: isMenuOpen })}>
        {currentUser ? (
          <>
            <button className={styles.dropdownButtons}>
              <p>{currentUser.email}</p>
              <p>See your profile</p>
            </button>
            <button className={styles.dropdownButtons}>Give Feedback</button>
            <button className={styles.dropdownButtons} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link href="/auth">
                  <button className={styles.loginBtn}>Log in</button>
                </Link>
              </li>
              <li>
                <Link href="/auth">
                  <button className={classnames('mainBtn', styles.signupBtn)}>Sign up</button>
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
