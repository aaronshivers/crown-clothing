import { shallow } from 'enzyme';
import React from 'react';
import HomePage from './pages/homepage/home-page.component';

describe('HomePage', () => {
  const homePage = shallow(<HomePage />);

  it('should render correctly', () => {
    expect(homePage).toMatchSnapshot();
  });
});
