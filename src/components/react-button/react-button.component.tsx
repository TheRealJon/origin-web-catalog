import * as React from 'react';

export interface IReactButtonProps {
  text: string;
  handler: () => boolean;
};

export interface IReactButtonState {};

export class ReactButton extends React.Component<IReactButtonProps, IReactButtonState> {
  render() {
    return (
      // <button onClick={this.props.onclick}>
      <button className="btn btn-default" onClick={this.props.handler}>
        {this.props.text}
      </button>
    );
  }
};
