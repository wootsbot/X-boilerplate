import React from 'react';

import { IconProps } from './types';

function ArrowLeftLine(props: IconProps) {
  const { size = 24, color = '#000000' } = props;
  return (
    <svg height={size} width={size} fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill={color} />
    </svg>
  );
}

export default ArrowLeftLine;
