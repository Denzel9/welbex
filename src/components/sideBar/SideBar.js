import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <h3 className={styles.title}>
        Вместе с <span>бесплатной консультацией</span> мы дарим:
      </h3>
      <ul className={styles.sideBarList}>
        <li className={styles.item}>
          <h4>Виджеты</h4>
          <span>30 готовых решений</span>
        </li>
        <li className={styles.item}>
          <h4>Dashboard</h4>
          <span>с показателями вашего бизнеса</span>
        </li>
        <li className={styles.item}>
          <h4>Skype Аудит</h4>
          <span>отдела продажи &nbsp;CRM системы</span>
        </li>
        <li className={styles.item}>
          <h4>35 дней</h4>
          <span>использования CRM</span>
        </li>
      </ul>
      <button className={styles.btn}>Получить консультацию</button>
    </div>
  );
}

export default SideBar;
