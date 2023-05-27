import css from './FeedbackOptions.module.css';
export const Button = ({ text, onLeaveFeedback }) => {
    return <button className={css.button} type="button" onClick={onLeaveFeedback}>{text}</button>
}