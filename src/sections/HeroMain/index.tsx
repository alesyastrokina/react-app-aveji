import { PageBlock } from "../../components"
import style from './styles.module.css';
import heroMainMichael from '../../assets/images/hero-main-michael.png';
import heroMainSpacejoy from '../../assets/images/hero-main-spacejoy.png';

export const HeroMain = () => {
    return (
    <>
        <PageBlock className={style['hero-main']}>
          <div className={style['hero-main__header-title']}>
            Эксклюзивная и нестандартная мебель для дома
          </div>
          <div className={style['hero-main__header-link']}>
            <a href="#">
              ЗАКАЗАТЬ ПРОЕКТ
            </a>
          </div>
        </PageBlock>
        <PageBlock className={style['hero-main']}>
          <div className={style['hero-main__details']}>
            <h6>Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</h6>
            <img className={style['hero-main__image-small']} src={heroMainMichael} alt="" />
          </div>
          <div className={style['hero-main__image']}>
            <img src={heroMainSpacejoy} alt="" />
          </div>
        </PageBlock>
        </>
    )
}
