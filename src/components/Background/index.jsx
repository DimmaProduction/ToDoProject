import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';

import s from './index.module.scss';

const SPLINE_URL = 'https://prod.spline.design/2vBUyOaoSQdFbJuR/scene.splinecode';

const Background = () => {
  const splineRef = useRef(null);

  return (
    <div className={s.container}>
      <Spline ref={splineRef} scene={SPLINE_URL} />
    </div>
  );
};

export default Background;
