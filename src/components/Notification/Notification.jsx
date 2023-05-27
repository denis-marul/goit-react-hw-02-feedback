import css from './Notification.module.css';
export const Notification = ({ message, total }) => {
    return <p className={css.notification} style={{ display: total >= 1 ? 'none' : 'block' }}>{message}</p>
}