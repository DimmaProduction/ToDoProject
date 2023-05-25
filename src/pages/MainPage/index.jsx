import React from 'react';

import { ReactComponent as ScrollDownIcon } from '../../assets/scroll-down.svg';

import s from './index.module.scss';

const MainPage = () => {
  return (
    <div className={s.container}>
      <header className={s.header__wrapper}>
        <div className={s.header__content}>
          <h2 className={s.header__title}>Todo project</h2>
          <ul className={s.header__list}>
            <li>About us</li>
            <li>Log in</li>
            <li></li>
          </ul>
        </div>
      </header>

      <h1 className={s.title}>
        Organize your tasks
        <br />
        on best 3D website..
      </h1>

      <ScrollDownIcon className={s.scrollDownIcon} />
    </div>
  );
};

export default MainPage;
