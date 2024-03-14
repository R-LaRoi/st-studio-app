import styles from "./Styles/home.module.css";

export default function Home() {
  return (
    <>

    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.primary}>projects</p>
          <p className={styles.secondary}>projects</p>
        </div>
      </div>
    </div>
  

 
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.primary}>connect</p>
          <p className={styles.secondary}>meet_rachel</p>
        </div>
      </div>
    </div>


    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.primary}>studio</p>
          <p className={styles.secondary}>art&design</p>
        </div>
      </div>
    </div>
   
</>
  );
}