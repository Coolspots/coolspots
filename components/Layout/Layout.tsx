import styles from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';
import Header from './Header/Header';
import CitiesFilter from './CitiesFilter/CitiesFilter';

type LayoutProps = {
  headerText: string;
  children: Element[] | React.ReactNode;
  areSpotsLoaded: boolean;
  handleSearch: (a: string) => void;
  handleFilterByCity: (a: string) => void;
  spotName?: string;
  shouldShowForm?: boolean;
  setShouldShowForm?: (a: boolean) => void;
  showHeader: boolean;
  showCitiesFilter: boolean;
};

const Layout = ({
  children,
  areSpotsLoaded,
  handleSearch,
  handleFilterByCity,
  headerText,
  showHeader,
  showCitiesFilter,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {showHeader && (
          <Header headerText={headerText} showHeader={areSpotsLoaded} handleSearch={handleSearch} />
        )}
        {showCitiesFilter && <CitiesFilter handleFilterByCity={handleFilterByCity} />}
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
