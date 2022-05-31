import classes from "../../styles/hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}><Image src="/images/site/justin.jpg" alt="An image of me" width={300} height={300}/></div>
      <h1>Hi, I'm Justin</h1>
      <p>I blog about webdev, frontend, and backend development.</p>
    </section>
  );
}
