import style from './styles.module.css'
import type { TStepItemProps } from './type'

export const StepItem = ({
    key,
    title,
    description
}: TStepItemProps) => {
    return (
            <div className={style['step-item']}>
              <div className={style['step-item__title']}>
                <strong>{title}</strong>
              </div>
              <div>
                {description}
              </div>
            </div>
           )
}
