import React, { Component } from 'react';

import Steps from 'react-logic-steps';

export default class App extends Component {
  render() {
    return (
      <Steps steps={['first', 'second', 'third', 'fourth']} initial={'first'}>
        {(current, onBack, onForward) => {
          return (
            <div>
              <h1>{current}</h1>
              <button onClick={onBack}>向后</button>
              <button onClick={onForward}>向前</button>
            </div>
          );
        }}
      </Steps>
    );
  }
}
