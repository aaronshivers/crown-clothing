import React from 'react';
import { shallow } from 'enzyme';
import DirectoryMenu from './directory-menu.component';

describe('DirectoryMenu', () => {
  const directoryMenu = shallow(
    <DirectoryMenu />,
  );

  it('should render correctly', () => {
    expect(directoryMenu).toMatchSnapshot();
  });

  it('should have a class of `directory-menu`', () => {
    expect(directoryMenu.hasClass('directory-menu')).toBeTruthy();
  });

  it('should contain a `menu-item` element', () => {
    expect(directoryMenu.find('.menu-item')).toHaveLength(1);
  });
});
