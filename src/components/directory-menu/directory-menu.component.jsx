import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import sections from './directory-menu.data';
import './directory-menu.styles.scss';

const DirectoryMenu = () => (
  <div className="directory-menu">
    {
      sections.map(({
        id, title, imageUrl, size,
      }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))
    }
  </div>
);

export default DirectoryMenu;
