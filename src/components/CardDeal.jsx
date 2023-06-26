import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          better card deal <br className="sm:block hidden" />
          in few steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ad vitae voluptas accusamus veniam officiis nihil reiciendis,
          delectus velit ipsa doloribus cum recusandae deleniti quae, error quisquam quasi reprehenderit ea at?</p>

          <Button styles="mt-10 rounded-[10px]"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal