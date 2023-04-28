import SideBar from "../sideBar/SideBar";
import styles from "./Main.module.css";
import Purple from "../decoration/blur/purple/Purple";
import PlanetPurple from "../decoration/static/planetPurple/PlanetPurple";

function Main() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.main}>
          <div>
            <h1 className={styles.title}>
              Зарабатывайте больше <span>с WELBEX</span>{" "}
            </h1>
            <h6 className={styles.subTitle}>
              Развиваем и контролируем продажи за вас
            </h6>
          </div>
          <SideBar />
        </div>
      </div>
      <PlanetPurple />
      <Purple />
    </div>
  );
}

export default Main;
