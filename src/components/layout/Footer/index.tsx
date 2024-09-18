import style from './styles.module.css';

export const Footer = () => {
    return (
        <>
        <div className={style['site-footer']}>
          <div>
          © 2023 Aveji
          </div>
          <div className={style['site-footer-row']}>
            <div>
            Все права защищены
            </div>
            <div>
            <a href="#">Политика конфеденциальности</a> / <a href="#">Оплата и доставка</a>
            </div>
            <div>
            <a href="#">Вконтакте</a>&nbsp;&nbsp;&nbsp;<a href="#">Телеграм</a>
            </div>
          </div>
        </div>
        </>
    )
}
