import style from './myInput.module.css';

export const MyInput = ({ value, placeholder, textChange }) => {
  return (
    <input
      className={style.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={textChange}
      data-testid={'input'}
    />
  );
};
