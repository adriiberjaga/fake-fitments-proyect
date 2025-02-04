import { useState } from "react";
import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <div className={styles.headerLogo}>
          <h1>Fake storage</h1>
        </div>
        <div className={styles.headerNav}>
          <nav className={styles.Nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
              }
              to={"/"}
            >
              Muebles
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
              }
              to={"/lavabo"}
            >
              Lavabo
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
              }
              to={"/exterior"}
            >
              Exterior
            </NavLink>
          </nav>
        </div>
        <div className={styles.headerCart}>
          <button className={styles.headerCartBtn}>Contactanós</button>
          <button className={styles.headerCartBtn}>CARRITO</button>
        </div>
      </div>

      <div className={styles.mobileHeader}>
        <div className={styles.headerLogo}>
          <h1>Fake storage</h1>
        </div>
        <button
    className={styles.menuButton}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? "✖" : "☰"} {/* Cambia el ícono según el estado */}
  </button>
        {isMenuOpen && (
  <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
            <div className={styles.headerNav}>
              <nav className={styles.Nav}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navlink} ${styles.active}`
                      : styles.navlink
                  }
                  to={"/"}
                >
                  Muebles
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navlink} ${styles.active}`
                      : styles.navlink
                  }
                  to={"/lavabo"}
                >
                  Lavabo
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navlink} ${styles.active}`
                      : styles.navlink
                  }
                  to={"/exterior"}
                >
                  Exterior
                </NavLink>
              </nav>
            </div>
            <div className={styles.headerCart}>
              <button className={styles.headerCartBtn}>Contactanós</button>
              <button className={styles.headerCartBtn}>CARRITO</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
