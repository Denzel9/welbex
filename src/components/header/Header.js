import styles from "./Header.module.css";
import logo from "./logo.png";
import telegram from "../../img/telegram.png";
import viber from "../../img/viber.png";
import whatsapp from "../../img/whatsapp.png";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.img} src={logo} alt="logo" />
            <span className={styles.desc}>
              крупный интегратор CRM в Росcии и ещё 8 странах
            </span>
          </div>
          <ul className={styles.nav}>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Кейсы</li>
            <li>Сертификаты</li>
          </ul>
          <div className={styles.contacts}>
            <a className={styles.number} href="tel:+75555555555">
              +7 555 555-55-55
            </a>
            <ul className={styles.social}>
              <li>
                <img src={telegram} alt="telegram" />
              </li>
              <li>
                <img src={viber} alt="viber" />
              </li>
              <li>
                <img src={whatsapp} alt="whatsapp" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
