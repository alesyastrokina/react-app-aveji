import { PageBlock } from "../../components/layout/PageBlock"
import style from './styles.module.css'
import { stepList } from './data'
import { StepItem } from "./StepItem"

export const Steps = () => {
    return (
        <PageBlock>
            <div className={style['steps-container']}>
              <div className={style['content-column-title']}>
                <h3>Как мы работаем</h3>
              </div>
              <div className={style['content-column-details']}>
                <div className={style['step-items__title']}>
                  <p>Алгоритм работы с нами для удобства и понимания проекта</p>
                </div>
                {stepList.map((step, index) => {
                  return (
                    <StepItem key={index} {...step} /> 
                  )
                })}
              </div>
            </div>
        </PageBlock>
    )
}


