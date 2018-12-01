import React, { ReactNode } from 'react';

interface IState {
  currentIndex: number;
}

type IProps = {
  steps: string[];
  initial?: string;
  children: (
    current: string,
    isFirst: boolean,
    isLast: boolean,
    onBack: VoidFunction,
    onForward: VoidFunction
  ) => ReactNode;
};

export interface StepProps {
  onBack: VoidFunction;
  onForward: VoidFunction;
}

class Steps extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { steps, initial } = props;
    const currentIndex = initial ? steps.indexOf(initial) : 0;
    if (currentIndex < 0) throw Error('Step组件: initial必须包含在steps里');
    this.state = {
      currentIndex
    };
  }

  onBack = () => {
    console.log('state:', this.state);
    const currentIndex = this.state.currentIndex;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  onForward = () => {
    const currentIndex = this.state.currentIndex;
    if (currentIndex < this.props.steps.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  render() {
    const { currentIndex } = this.state;
    const { steps } = this.props;
    const current = steps[currentIndex];
    return this.props.children(
      current,
      currentIndex === 0,
      currentIndex === steps.length - 1,
      this.onBack,
      this.onForward
    );
  }
}

export default Steps;
