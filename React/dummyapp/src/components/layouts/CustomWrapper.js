import styles from "../layouts/CustomWrapper.css";
function CustomWrapper(props) {
  return <div className={styles.intro}>{props.children}</div>;
}
export default CustomWrapper;
