import styles from "./Footer.module.css";
import telegram from "../../img/telegram.png";
import viber from "../../img/viber.png";
import whatsapp from "../../img/whatsapp.png";
import classNames from "classnames";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.company}>
            <h3>О компании</h3>
            <ul className={styles.companyList}>
              <li>Партнёрская программа</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3>Меню</h3>
            <ul className={styles.menuList}>
              <li>Расчёт стоимости</li>
              <li>Услуги</li>
              <li>Виджеты</li>
              <li>Интеграции</li>
              <li>Наши клиенты</li>
              <li>Кейсы</li>
              <li>Благодарственные письма</li>
              <li>Сертификаты</li>
              <li>Блог на Youtube</li>
              <li>Вопрос / Ответ</li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.alignRight}>Контакты</h3>
            <ul className={classNames(styles.contactsList, styles.alignRight)}>
              <li>+7 555 555-55-55</li>
              <li>
                <img src={telegram} alt="" />
                <img src={viber} alt="" />
                <img src={whatsapp} alt="" />
              </li>
              <li>Москва, Путевой проезд 3с1, к 902</li>
            </ul>
            <ul className={classNames(styles.desc, styles.alignRight)}>
              <li>©WELBEX 2022. Все права защищены.</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
