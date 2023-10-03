import Mainmenu from "../layouts/Mainmenu";
import Styles from "./Layout.module.css";
function Layout(props) {
  return (
    <div className={Styles.main}>
      <main>
        <Mainmenu />
      </main>
      {props.children}
    </div>
  );
}
export default Layout;
