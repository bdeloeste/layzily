import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Layzily } from '../src/Layzily';
import './styles.css';

const stories = storiesOf('Components', module);

const Container: React.SFC<{}> = ({ children }) => (
  <div>
    <div style={{ minHeight: 'calc(100vh + 100px)', fontFamily: 'Roboto' }}>
      <h1>
        Scroll to see the <code>Layzily</code> loaded image!
      </h1>
      <h2>You may want to throttle your network for a better effect 😊</h2>
    </div>
    <div>{children}</div>
  </div>
);

stories.add(
  'Layzily',
  () => (
    <Container>
      <Layzily
        src="https://www.bigimagesystems.com/wp-content/uploads/2016/07/website_startpage-2.jpg"
        alt="yolo"
        actual={({ imageProps }) => <img alt={imageProps.alt} {...imageProps} />}
        fallback={({ imageProps, ref }) => (
          <img ref={ref} alt={imageProps.alt} src="https://f4.bcbits.com/img/0008736837_10.jpg" />
        )}
      />
    </Container>
  ),
  { info: { inline: true } },
);
