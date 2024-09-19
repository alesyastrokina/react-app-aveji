import { PageBlock } from "../../components"
import style from './styles.module.css';
import icon from '../../assets/images/icon.png';

export const Reviews = () => {
    return (
      <>
        <PageBlock className={style['content-row', 'content-row--spaced', 'reviews-container']}>
          <div>
            <h3>Отзывы</h3>
          </div>
          <div className={style['reviews__list']}>
            <div className={style['review__card']}>
              <img className={style['project__image']} src={icon} alt="" />
              <br /><br /><strong>Игорь Антонов</strong><br />
              <p>Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</p>
            </div>
            <div className={style['review__card']}>
              <img className={style['project__image']} src={icon} alt="" />
              <br /><br /><strong>Ольга Иванова</strong><br />
              <p>После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</p>
            </div>
            <div className={style['review__card']}>
              <img className={style['project__image']} src={icon} alt="" />
              <br /><br /><strong>Аркадий Макаров</strong><br />
              <p>Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</p>
            </div>
          </div>
        </PageBlock>
      </>
    )
}
