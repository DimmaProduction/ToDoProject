import { useEffect, useMemo, useState } from 'react';

import Checkbox from 'components/Checkbox';

import { ReactComponent as BinIcon } from '../../../../assets/delete.svg';
import { ReactComponent as SaveIcon } from '../../../../assets/save.svg';

import s from './index.module.scss';

const TodoItem = ({ item, onUpdate, onComplete, onRemove }) => {
  const [isCompleted, setIsCompleted] = useState(item.completed);
  const [isEditTitleMode, setEditTitleMode] = useState(false);
  const [isEditDescriptionMode, setEditDescriptionMode] = useState(false);

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  useEffect(() => {
    setIsCompleted(item.completed);
  }, [item.completed]);

  const handleUpdate = () => {
    onUpdate({ id: item.id, title, description });
    // TOGGLE EDIT MODE
    if (isEditTitleMode) toggleEditTitleMode();
    else if (isEditDescriptionMode) toggleEditDescriptionMode();
  };
  const handleRemove = () => onRemove(item.id);
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);

  const toggleEditTitleMode = () => setEditTitleMode((prevState) => !prevState);
  const toggleEditDescriptionMode = () => setEditDescriptionMode((prevState) => !prevState);
  const toggleIsComplete = () => onComplete({ id: item.id, completed: !isCompleted });

  const editArea = useMemo(() => {
    const editValue = isEditTitleMode ? title : isEditDescriptionMode ? description : '';
    const editFunc = isEditTitleMode
      ? handleChangeTitle
      : isEditDescriptionMode
      ? handleChangeDescription
      : () => {};

    return (
      <textarea
        name="item_title"
        id={item.id}
        cols="30"
        rows="3"
        value={editValue}
        onChange={editFunc}
        className={s.item__textarea}
      />
    );
  }, [title, description, isEditTitleMode, isEditDescriptionMode]);

  const isEditMode = isEditTitleMode || isEditDescriptionMode;

  return (
    <div className={`${s.item__wrapper} ${isCompleted ? s.item__wrapper_disabled : ''}`}>
      <div className={s.item__header}>
        {isEditMode ? (
          <div className={s.item__button_wrapper}>
            <SaveIcon className={s.item__button_save} onClick={handleUpdate} />
          </div>
        ) : (
          <Checkbox isChecked={isCompleted} toggleCheckbox={toggleIsComplete} />
        )}

        {!isEditMode && (
          <span
            className={`${s.item__title} ${isCompleted ? s.item__completed : ''}`}
            onClick={toggleEditTitleMode}>
            {title}
          </span>
        )}

        <div className={s.item__button_wrapper}>
          <BinIcon className={s.item__button_delete} onClick={handleRemove} />
        </div>
      </div>
      <div className={s.item__content}>
        {isEditMode ? (
          editArea
        ) : (
          <div className={s.item__description} onClick={toggleEditDescriptionMode}>
            <span className={isCompleted ? s.item__completed : ''}>{description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
