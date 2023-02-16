import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ largeImageURL, handleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleModal]);

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      handleModal();
    }
  };
  const handleBackDrop = e => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackDrop}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
}
