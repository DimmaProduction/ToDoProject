import s from './index.module.scss';

const Checkbox = ({ isChecked = true, toggleCheckbox }) => {
  return (
    <label className={s.container}>
      <input value={isChecked} checked={isChecked} type="checkbox" />
      <div className={s.checkmark} onClick={toggleCheckbox}></div>
    </label>
  );
};

export default Checkbox;
