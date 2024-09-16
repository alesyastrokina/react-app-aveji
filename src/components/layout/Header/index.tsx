import logo from '../../../assets/images/logo.svg'
import styles from './styles.module.css';

export const Header = () => {
    return (
        <>
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <nav className="header__nav">
            <ul className={styles['header__nav-list']}>
                <li>
                <a href="#" className="active">
                    О нас
                </a>
                </li>
                <li>
                <a href="#">
                    Проекты
                </a>
                </li>
                <li>
                <a href="#">
                    Материалы
                </a>
                </li>
                <li>
                <a href="#">
                    Отзывы
                </a>
                </li>
            </ul>
            </nav>
            <div className="header__contacts">
                <span>+7 999 999 99 99</span>
            </div>
        </>
    )
}
