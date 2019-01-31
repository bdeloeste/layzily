import * as React from 'react';
import { shallow } from 'enzyme';
import { Layzily, LayzilyProps } from '../Layzily';

const imgProps = {
  src: '',
};

const defaultProps: LayzilyProps = {
  actual: ({ imageProps }) => <img {...imageProps} />,
  fallback: ({ imageProps, ref }) => <img ref={ref} {...imageProps} />,
  src: imgProps.src,
};

describe('<Layzily/>', () => {
  it('Should render', () => {
    const wrapper = shallow(<Layzily {...defaultProps} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
