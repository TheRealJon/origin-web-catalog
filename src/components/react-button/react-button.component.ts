import * as React from 'react';

export const reactButton = ({ children, ...restProps }) =>
  React.createElement('button', { ...restProps }, children);
