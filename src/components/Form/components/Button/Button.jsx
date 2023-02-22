import style from './button.module.css';

export const Button = ({label, disabled}) => {
    return (
        <button
            disabled={disabled}
            className={style.button}
        >
            {label}
        </button>
    );
};
