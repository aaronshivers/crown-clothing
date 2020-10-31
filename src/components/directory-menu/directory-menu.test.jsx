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

  it('should contain 5 `MenuItem` components', () => {
    expect(directoryMenu.find('MenuItem')).toHaveLength(5);
  });

  it('should render the correct title text', () => {
    expect(directoryMenu.find('MenuItem').get(0).props.title).toBe('hats');
    expect(directoryMenu.find('MenuItem').get(1).props.title).toBe('jackets');
    expect(directoryMenu.find('MenuItem').get(2).props.title).toBe('sneakers');
    expect(directoryMenu.find('MenuItem').get(3).props.title).toBe('womens');
    expect(directoryMenu.find('MenuItem').get(4).props.title).toBe('mens');
  });
});
