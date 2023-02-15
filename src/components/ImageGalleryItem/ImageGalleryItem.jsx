import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, onItemClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={css.ImageGalleryItemImage}
        onClick={() => {
          onItemClick(largeImageURL);
        }}
      />
    </li>
  );
};
