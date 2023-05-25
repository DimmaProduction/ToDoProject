import MainPage from 'pages/MainPage';
import TaskBoard from 'pages/TaskBoard';

import s from './index.module.scss';

const Overlay = ({ scroll }) => {
  const handleOnScroll = (e) => {
    const scroll01 = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
    scroll.current = scroll01;
  };

  return (
    <div className={s.scrollContainer} onScroll={handleOnScroll}>
      <section className={s.section}>
        <MainPage />
      </section>

      <section className={s.section}>
        <TaskBoard />
      </section>
    </div>
  );
};

export default Overlay;
