import { useState } from 'react';
import './Eye.scss';
import { observer } from 'mobx-react-lite';
import EyeState from '../../stores/EyeState';

const Eye = observer(() => {

  const onClick = () => {
    EyeState.toggleEye();
  };

  return (
    <button
      className={`eye ${EyeState.isOpened && 'closed'}`}
      aria-label="make password visible"
      type="button"
      onClick={onClick}
    />
  );
})

export default Eye;
