import React, { Component } from 'react';

import Steps from 'react-logic-steps';

export default class App extends Component {
  getContent = current => {
    switch (current) {
      case 'first':
        return <span>第一步</span>;
      case 'second':
        return <span>第二步</span>;
      case 'third':
        return <span>第三步</span>;
      case 'fourth':
        return <span>第四步</span>;
      default:
        return null;
    }
  };
  render() {
    return (
      <Steps steps={['first', 'second', 'third', 'fourth']} initial={'first'}>
        {(current, isFirst, isLast, onBack, onForward) => {
          return (
            <div>
              <h1>{this.getContent(current)}</h1>
              <button onClick={onBack} disabled={isFirst}>
                向后
              </button>
              <button onClick={onForward} disabled={isLast}>
                向前
              </button>
            </div>
          );
        }}
      </Steps>
    );
  }
}
