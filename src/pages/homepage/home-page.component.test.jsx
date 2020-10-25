import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './home-page.component';

describe('HomePage', () => {
  const homePage = shallow(<HomePage />);

  it('should render correctly', () => {
    expect(homePage).toMatchSnapshot();
  });

  it('should contain the `homepage` element', () => {
    expect(homePage.exists('.homepage')).toBeTruthy();
  });

  it('should contain the `directory-menu` element', () => {
    expect(homePage.exists('.directory-menu')).toBeTruthy();
  });

  it('should contain five `menu-item` elements', () => {
    expect(homePage.find('.menu-item')).toHaveLength(5);
  });

  it('should contain five `content` elements', () => {
    expect(homePage.find('.content')).toHaveLength(5);
  });

  it('should contain five `title` elements', () => {
    expect(homePage.find('.title')).toHaveLength(5);
  });

  it('should render the correct title text', () => {
    expect(homePage.find('.title').get(0).props.children).toBe('HATS');
    expect(homePage.find('.title').get(1).props.children).toBe('JACKETS');
    expect(homePage.find('.title').get(2).props.children).toBe('SNEAKERS');
    expect(homePage.find('.title').get(3).props.children).toBe('WOMENS');
    expect(homePage.find('.title').get(4).props.children).toBe('MENS');
  });

  it('should contain five `subtitle` elements', () => {
    expect(homePage.find('.subtitle')).toHaveLength(5);
  });
});
