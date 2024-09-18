import { PageBlock } from "../../components"
import style from './styles.module.css';

export const About = () => {
    return (
      <>
        <PageBlock className={style['about-container']}>
          <div className={style['about-title', 'content-column-title']}>
            <h3>Более 5 лет создаем мебель для вашего комфорта</h3>
          </div>
          <div className={style['about-content', 'content-column-details']}>
            <div>
              <p>Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</p>
              <p>Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</p>
              <p>В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</p>
            </div>
            <div>
              <strong>1 год</strong>
              <br/>
              гарантии на всю продукцию
            </div>
            <div>
              <strong>300+</strong>
              <br/>
              выполненных проектов
            </div>
            <div>
              <strong>15 дней</strong>
              <br/>
              срок производства
            </div>
          </div>
        </PageBlock>
      </>
    )
}
