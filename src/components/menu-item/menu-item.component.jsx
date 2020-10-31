import React from 'react';
import PropTypes from 'prop-types';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={size ? `${size} menu-item` : 'menu-item'}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.defaultProps = {
  size: undefined,
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default MenuItem;
