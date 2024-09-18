import { PageBlock } from "../../components"
import style from './styles.module.css';
import formMain from '../../assets/images/form-main.png';
import formAppStore from '../../assets/images/form-app-store.png';
import formGooglePlay from '../../assets/images/form-google-play.png';

export const Form = () => {
    return (
      <>
        <PageBlock className={style['content-row', 'content-row--spaced', 'form-container']}>
          <div>
            <img src={formMain} alt="" />
          </div>
          <div>
            <div>
            <h3>Хотите заказать проект?</h3>
            </div>
            <div>
            Оставьте заявку, и мы вам перезвоним
            </div>
            <div className={style['subscribe-form__body']}>
              <form>
                <div className={style['form-row']}>
                  <input type="text" className={style['input']} placeholder="Имя" />
                </div>
                <div className={style['form-row']}>
                  <input type="email" className={style['input']} placeholder="E-mail" />
                </div>
                <div className={style['form-row']}>
                  <input type="text" className={style['input']} placeholder="Телефон" />
                </div>
                <div className={style['form-row']}>
                  <button className={style['button']}>
                    Оставить заявку
                  </button>
                </div>  
              </form>
            </div>
            <div className={style['form-stores']}>
              <div>
                <img src={formAppStore} alt="" />
              </div>
              <div>
                <img src={formGooglePlay} alt="" />
              </div>
            </div>
          </div> 
        </PageBlock>
      </>
    )
}
