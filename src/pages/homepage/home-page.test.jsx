import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './home-page.component';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

describe('HomePage', () => {
  const homePage = shallow(<HomePage />);

  it('should render correctly', () => {
    expect(homePage).toMatchSnapshot();
  });

  it('should contain the DirectoryMenu component', () => {
    expect(homePage.exists(DirectoryMenu)).toBeTruthy();
  });

  it('should have a class of `homepage`', () => {
    expect(homePage.hasClass('homepage')).toBeTruthy();
  });
});
