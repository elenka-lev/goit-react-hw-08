import s from './NotFoundPage.module.css';
const NotFoundPage = () => {
    return (
        <div className={s.wrapNot}>
            <p className={s.descr}>Oooops... the page you are looking for not avaible!</p>
        </div>
    )
}

export default NotFoundPage;