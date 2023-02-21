import style from './button.module.css';

export const Button = ({ disabled, label }) => {
  return (
    <button disabled={disabled} className={style.button}>
      {label}
    </button>
  );
};
