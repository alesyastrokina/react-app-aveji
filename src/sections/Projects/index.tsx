import { PageBlock } from "../../components"
import style from './styles.module.css';
import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
import project6 from '../../assets/images/project-6.png';

export const Projects = () => {
    return (
      <>
        <PageBlock className={style['content-row', 'content-row--spaced', 'projects-container']}>
          <div className={style['projects__header-title']}>
            <h3>Проекты</h3>
          </div>
          <div className={style['projects__gallery']}>
            <img className={style['project__image']} src={project1} alt="" />
            <img className={style['project__image']} src={project2} alt="" />
            <img className={style['project__image']} src={project3} alt="" />
          </div>
          <div className={style['projects__gallery']}>
            <img className={style['project__image']} src={project4} alt="" />
            <img className={style['project__image']} src={project5} alt="" />
            <img className={style['project__image']} src={project6} alt="" />
          </div>
        </PageBlock>
      </>
    )
}
