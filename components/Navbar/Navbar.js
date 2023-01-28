import { useRouter } from 'next/router';
import { useState } from 'react';
import classnames from 'classnames';
import Burger from './Burger/Burger';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useAuth } from '../../contexts/AuthContext';

const NavBar = () => {
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      await logout();
      router.push('/');
    } catch (err) {
      setError(err.message);
      alert(error);
    }
    setLoading(false);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.textLogo}>
          <Link href="/">coolspots</Link>
        </li>
        <li>
          {/* here we should render burger in landing and myProfile button */}
          <Burger handleOpenDropdown={handleOpenDropdown} isMenuOpen={isMenuOpen} />
        </li>
      </ul>

      <div className={classnames(styles.dropdownLinks, { [styles.isMenuOpen]: isMenuOpen })}>
        {currentUser ? (
          <button className="mainBtn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          // here we should render burger in landing and myProfile button
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
        )}
      </div>
    </nav>
  );
};

export default NavBar;
