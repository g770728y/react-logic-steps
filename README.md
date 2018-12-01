# react-logic-steps

>

[![NPM](https://img.shields.io/npm/v/react-logic-steps.svg)](https://www.npmjs.com/package/react-logic-steps) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 简述

这是一个简单的行为组件, 用于实现线性向导页时(也就是只有上一步、下一步这样的向导页)
此组件并不提供 ui 界面

## 场景

### 忘记密码

分填手机、填验证码、重置密码三个 panel, 这是另一种形态的 steps
搜到的 steps 组件都包含 ui, 与当前界面偏差很大

### 简单、线性的向导页

只包含上一步、下一步功能, 页面转向没有分叉
具体参见 exmple

## Install

```bash
npm install --save react-logic-steps

or

yarn add react-logic-steps
```

## Usage

```tsx
import * as React from 'react';

import Steps from 'react-logic-steps';

class Example extends React.Component {
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
```

## License

MIT © [g770728y](https://github.com/g770728y)
