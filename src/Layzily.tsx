import * as React from 'react';
import Observer from 'react-intersection-observer';

export interface ObserverProps {
  rootMargin?: string;
  threshold?: number;
}

export interface RefArg {
  ref?: React.RefObject<any>;
}

export interface ImageRenderPropArgs {
  imageProps: ImageProps;
}

export interface LayzilyProps extends ImageProps {
  actual: (args: ImageRenderPropArgs) => React.ReactElement<{}>;
  observerProps?: ObserverProps;
  fallback: (args: ImageRenderPropArgs & RefArg) => void;
}

export interface ImageProps {
  alt?: string;
  src: string;
  srcSet?: string;
}

export interface LayzilyState {
  imageInView: boolean;
}

export class Layzily extends React.Component<LayzilyProps, LayzilyState> {
  state = {
    imageInView: false,
  };

  render() {
    const { observerProps, fallback, actual, ...imageProps } = this.props;
    const { imageInView } = this.state;
    return (
      <Observer
        rootMargin="50px 0px"
        threshold={0.01}
        {...observerProps}
        onChange={inView => {
          this.setState({ imageInView: inView });
        }}
      >
        {({ ref }) => {
          if (!imageInView) {
            return fallback({ imageProps, ref });
          }

          return actual({ imageProps });
        }}
      </Observer>
    );
  }
}
