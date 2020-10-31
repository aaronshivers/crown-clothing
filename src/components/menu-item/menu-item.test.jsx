import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './menu-item.component';

describe('MenuItem', () => {
  const props = {
    title: 'Title',
    imageUrl: 'ImageUrl',
  };

  const menuItem = shallow(
    <MenuItem title={props.title} imageUrl={props.imageUrl} />,
  );

  it('should render correctly', () => {
    expect(menuItem).toMatchSnapshot();
  });

  it('should have a class of `menu-item`', () => {
    expect(menuItem.hasClass('menu-item')).toBeTruthy();
  });

  it('should contain a `background-image` element', () => {
    expect(menuItem.find('.background-image')).toHaveLength(1);
  });

  it('should contain a `content` element', () => {
    expect(menuItem.find('.content')).toHaveLength(1);
  });

  it('should contain a `title` element', () => {
    expect(menuItem.find('.title')).toHaveLength(1);
  });

  it('should contain a `subtitle` element', () => {
    expect(menuItem.find('.subtitle')).toHaveLength(1);
  });
});
