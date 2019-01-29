import * as React from 'react';
import { shallow } from 'enzyme';
import Layzily from '../';

describe('<Layzily/>', () => {
  it('Should render', () => {
    const wrapper = shallow(<Layzily />);
    expect(wrapper.exists()).toEqual(true);
  });
});
