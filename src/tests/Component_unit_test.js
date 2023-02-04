import React from 'react';
import { shallow } from 'enzyme';
import AnnonceCard from '../Components/Spaces/AnnonceSpace/AnnonceCard';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AnnonceCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
